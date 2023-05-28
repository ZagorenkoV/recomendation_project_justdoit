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
from .models import Users, Groups, Groups_Now, Attends
from .serialyzer import UsersSerializer, GroupsSerializer, Groups_NowSerializer, AttendSerializer


class UsersApiView(APIView):

    def get(self, request, *args, **kwargs):
        queryset=Users.objects.all()

        # custom filter parameters

        check_birth_date=self.request.query_params.get('check_birth_date',None)

        from_date=self.request.query_params.get('from_date',None)
        to_date=self.request.query_params.get('to_date',None)

        if from_date and to_date: # check if key is not None
            date_format='%Y-%m-%d'
            from_date=datetime.strptime(from_date,date_format) #Convert string into date format
            to_date=datetime.strptime(to_date,date_format)
            to_date=to_date+timedelta(days=0) # add extra day in date search
            queryset=queryset.filter(Birth_date__range=[from_date,to_date])

        # if check_birth_date and ( from_date and to_date ):
        #     queryset=queryset.filter(Birth_date__range=[from_date,to_date])

        serializer = UsersSerializer(queryset,many=True)
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