from django.shortcuts import render
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.views import APIView
from datetime import datetime, timedelta


from .models import Users, Groups, Groups_Now, Attends
from .serialyzer import UsersSerializer, GroupsSerializer, Groups_NowSerializer, AttendSerializer

# Create your views here.

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

        if check_birth_date and ( from_date and to_date ):
            queryset=queryset.filter(Birth_date__range=[from_date,to_date])

        serializer = UsersSerializer(queryset,many=True)
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