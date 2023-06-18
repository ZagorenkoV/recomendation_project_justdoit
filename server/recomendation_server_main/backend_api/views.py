from rest_framework.response import Response
from rest_framework.views import APIView
from datetime import datetime, timedelta
import numpy as np
from geopy import Yandex
from .models import Users, Groups, Groups_Now, Attends
from .serialyzer import UsersSerializer, GroupsSerializer, Groups_NowSerializer, AttendSerializer
from .blind_recs import make_blind_recs
from .opros import make_opros_recs
from .xgb_dirs import make_recs_dirs

class GetDateApiView(APIView):
    def get(self, request, *args, **kwargs):
        geo = self.request.query_params.get("geo", np.nan)
        date = self.request.query_params.get('date', None)
        to_date = self.request.query_params.get('to_date', None)
        if date and to_date:  # check if key is not None
            date_format = '%Y-%m-%d'
            date = datetime.strptime(date, date_format)
            to_date = datetime.strptime(to_date, date_format)
            to_date = to_date + timedelta(days=0)
            queryset = Users.objects.filter(Birth_date__range=[date,to_date])
            if not queryset:
                recs = make_blind_recs(geo)
            else:
                serializer = UsersSerializer(queryset, many=True)
                loc = Yandex(api_key="5d73e12f-0c42-4a38-ab77-dafc01e11f4c").geocode(serializer.data[0]['Residence_adress'], exactly_one=True)
                geo_y = str(loc.latitude) + " " + str(loc.longitude)
                recs = make_recs_dirs(geo_y, serializer.data[0]['User_Id'])
        else:
            recs = make_blind_recs(geo)
        group_query = Groups.objects.all().filter(Group_Id__in=[recs[0][0], recs[1][0], recs[2][0], recs[3][0]])

        serializer = GroupsSerializer(group_query, many=True)
        return Response(serializer.data)


class PopularApiView(APIView):
    def get(self, geo, *args, **kwargs):

        geo = self.request.query_params.get("geo", np.nan)
        dirs = self.request.query_params.get("popular", np.nan)
        recs = make_blind_recs(geo)
        group_query = Groups.objects.all().filter(Group_Id__in=[recs[0][0],recs[1][0],recs[2][0],recs[3][0]])

        serializer = GroupsSerializer(group_query, many=True)
        return Response(serializer.data)


class SurveyApiView(APIView):
    def get(self, request, *args, **kwargs):

        dirs = self.request.query_params.get("n", np.nan)
        geo = self.request.query_params.get("geo", np.nan)
        recs = make_opros_recs(geo, dirs)
        group_query = Groups.objects.all().filter(Group_Id__in=[recs[0][0], recs[1][0], recs[2][0], recs[3][0]])

        serializer = GroupsSerializer(group_query, many=True)
        return Response(serializer.data)
