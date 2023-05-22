from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from models import Users, Test, Group, Activity, Attend
from serialyzer import UsersSerializer, TestSerializer, GroupSerializer, ActivitySerializer, AttendSerializer

# Create your views here.
