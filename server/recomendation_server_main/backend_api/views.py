from django.shortcuts import render
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.views import APIView
from datetime import datetime, timedelta
import pandas as pd
import numpy as np
from geopy import distance
from xgboost import XGBClassifier
from .models import Users, Groups, Groups_Now, Attends
from .serialyzer import UsersSerializer, GroupsSerializer, Groups_NowSerializer, AttendSerializer


class GetDateApiView(APIView):
    def get(self, request, *args, **kwargs):

        date = self.request.query_params.get('date', None)
        to_date = self.request.query_params.get('to_date', None)
        if date and to_date:  # check if key is not None
            date_format = '%Y-%m-%d'
            date = datetime.strptime(date, date_format)
            to_date = datetime.strptime(to_date, date_format)
            to_date = to_date + timedelta(days=0)
            queryset = Users.objects.filter(Birth_date__range=[date,to_date])
        serializer = UsersSerializer(queryset, many=True)
        # print(serializer.data[0]['User_Id'])

        allgroups = pd.read_csv("static/groups.csv", dtype={"уникальный номер": "int32"})
        groups_now = pd.read_csv("static/groups_now.csv", dtype={"уникальный номер": "int32", "направление 1": "category",
                                                          "направление 2": "category", "направление 3": "category",
                                                          "район площадки": "category"})

        def get_dirs_xgb(user_id, n_samples):
            att = pd.read_csv("static/att_dirs.csv",
                              dtype={"уникальный номер участника": "int32", "уникальный номер группы": "int32",
                                     "уникальный номер занятия": "int32"})
            dirsframe = att[att["уникальный номер участника"].eq(user_id)][
                ["уникальный номер группы", "направление 2", "направление 3"]]
            # print(dirsframe, "все направления пользователя")
            dirsframe = dirsframe[dirsframe["направление 2"].isin(groups_now["направление 2"].unique().tolist())]
            # print(dirsframe["направление 2"], "все актуальные на сегодня уникальные направления пользователя")
            group_list = dirsframe["уникальный номер группы"].tolist()
            for i in allgroups[
                "район площадки"].unique():  #################################################################
                try:
                    short = i.split(",")
                    allgroups.loc[allgroups["район площадки"] == i, "район площадки"] = short[0]
                except:
                    continue  ###############################################################################################
            for group in group_list:
                dirsframe.loc[dirsframe["уникальный номер группы"].eq(group), "район площадки"] = allgroups.loc[
                    allgroups["уникальный номер"].eq(group), "район площадки"].item()
                dirsframe.loc[dirsframe["уникальный номер группы"].eq(group), "направление 1"] = allgroups.loc[
                    allgroups["уникальный номер"].eq(group), "направление 1"].item()
            dirsframe = dirsframe.replace(np.nan, "Без района")
            dirsframe = dirsframe.drop_duplicates(subset=["направление 2", "район площадки"])
            # print(dirsframe["направление 2"], "полученные уникальные направления")
            if not dirsframe.empty:
                try:
                    samples = dirsframe.sample(n=n_samples)
                    flag, n_dirs_to_get = 1, 4
                except:
                    samples = dirsframe.sample(n=1)
                    flag, n_dirs_to_get = 4, 1
            else:
                samples = groups_now.sample(n=n_samples)
                flag, n_dirs_to_get = 1, 4
            return samples[["направление 1", "направление 2", "район площадки"]], flag, n_dirs_to_get

        def make_recs_dirs(user_geo, user_id):
            # t0 = time.time()
            # print(time.time() - t0, "sec1")
            cols = ["направление 1", "направление 2", "район площадки"]
            train_data = groups_now[cols]
            d_groups_inference = dict()

            for i in enumerate(groups_now["направление 3"].unique().tolist()):
                d_groups_inference[i[0]] = i[1]

            # print(time.time() - t0, "sec2")
            clf = XGBClassifier(objective='multi:softmax', gpu_id=0, tree_method="gpu_hist",
                                feature_types=["c", "c", "c"],
                                gamma=0.1,
                                learning_rate=0.1, enable_categorical=True,
                                max_depth=7,
                                reg_lambda=0.5,  # predictor="gpu_predictor",
                                subsample=0.8,
                                eval_metric=['merror'],
                                seed=42)
            clf.load_model('static/xgb_groups.json')
            try_df, flag_usage, n_dirs_to_get = get_dirs_xgb(user_id, 4)
            # print(try_df["направление 2"])
            try_df = pd.concat([train_data, try_df], ignore_index=True)
            try_df = try_df.astype(
                {"направление 1": "category", "направление 2": "category", "район площадки": "category"})

            pred = clf.predict_proba(try_df[-n_dirs_to_get:])
            # print(time.time() - t0, "sec3")
            group_list = []
            for i in range(len(pred)):
                a = enumerate(pred[i])
                max_v_index = sorted(a, key=lambda x: x[1], reverse=True)[:flag_usage]

                for i in groups_now["geo"].unique():
                    try:
                        groups_now.loc[groups_now["geo"] == i, "distance"] = distance.distance(user_geo.split(" "),
                                                                                               i).km
                    except:
                        continue
                for i in range(len(max_v_index)):
                    group_dir = d_groups_inference[max_v_index[i][0]]
                    # print(group_dir, "directions")
                    nearest_groups = groups_now.loc[groups_now["направление 3"].isin([group_dir])][
                        ["уникальный номер", "distance"]].min()
                    group_distance = (int(nearest_groups["уникальный номер"]), '{:.1f} км'.format(nearest_groups["distance"]))
                    group_list.append(group_distance)
            return group_list

        recs = make_recs_dirs("55.901869 37.583544", serializer.data[0]['User_Id'])
        group_query = Groups.objects.all().filter(Group_Id__in=[recs[0][0], recs[1][0], recs[2][0], recs[3][0]])

        serializer = GroupsSerializer(group_query, many=True)
        return Response(serializer.data)


class PopularApiView(APIView):

    def get(self, geo, *args, **kwargs):

        pop = self.request.query_params.get('popular', None)
        geo = self.request.query_params.get("geo", np.nan)

        groups_now = pd.read_csv("static/groups_now.csv", dtype={"уникальный номер": "int32"})

        def make_blind_recs(user_geo):
            group_list = []
            if not pd.isna(user_geo):
                for i in groups_now["geo"].unique():
                    try:
                        groups_now.loc[groups_now["geo"] == i, "distance"] = distance.distance(user_geo.split("%20"),i).km
                    except:
                        continue
                samples = groups_now["направление 3"].sample(n=4).tolist()
                for i in range(len(samples)):
                    nearest_groups = groups_now.loc[groups_now["направление 3"].isin([samples[i]])][["уникальный номер", "distance"]].min()
                    group_distance = (int(nearest_groups["уникальный номер"]), '{:.1f} км'.format(nearest_groups["distance"]))
                    group_list.append(group_distance)
                return group_list
            else:
                samples = groups_now["уникальный номер"].sample(n=4).tolist()
                for i in range(len(samples)):
                    group = (int(samples[i]), np.nan)
                    group_list.append(group)
                return group_list
        recs = make_blind_recs(geo)
        to_serialize = []
        group_query = Groups.objects.all().filter(Group_Id__in=[recs[0][0],recs[1][0],recs[2][0],recs[3][0]])

        serializer = GroupsSerializer(group_query, many=True)
        return Response(serializer.data)
        
# def UsersApi(self, request, *args, **kwargs):
#         if request.method=='GET':
#             users = Users.objects.filter(Birth_date = pk)
#             users_serializer = UsersSerializer(users,many=True)
#             return JsonResponse(users_serializer.data, safe=False)
#         elif request.method=='POST':
#             users_data = JSONParser().parse(request)
#             users_serializer = UsersSerializer(data=users_data)
#             if users_serializer.is_valid():
#                 users_serializer.save()
#                 return JsonResponse('Added Successfully', safe=False)
#             return JsonResponse('Failed to Add', safe=False)
#         elif request.method=='PUT':
#             users_data = JSONParser().parse(request)
#             users = Users.objects.get(Users_Id = users_data['Users_Id'])
#             users_serializer = UsersSerializer(users, data=users_data)
#             if users_serializer.is_valid():
#                 users_serializer.save()
#                 return JsonResponse('Update Successfully', safe=False)
#             return JsonResponse('Failed to Update')

# class UsersApiView(APIView):
#
#     def get(self, request, *args, **kwargs):
#         queryset=Users.objects.all()
#
#         # custom filter parameters
#
#         check_birth_date=self.request.query_params.get('check_birth_date',None)
#
#         from_date=self.request.query_params.get('from_date',None)
#         to_date=self.request.query_params.get('to_date',None)
#
#         if from_date and to_date: # check if key is not None
#             date_format='%Y-%m-%d'
#             from_date=datetime.strptime(from_date,date_format) #Convert string into date format
#             to_date=datetime.strptime(to_date,date_format)
#             to_date=to_date+timedelta(days=0) # add extra day in date search
#             queryset=queryset.filter(Birth_date__range=[from_date,to_date])
#
#         # if check_birth_date and ( from_date and to_date ):
#         #     queryset=queryset.filter(Birth_date__range=[from_date,to_date])
#
#         serializer = UsersSerializer(queryset,many=True)
#         return Response(serializer.data)
