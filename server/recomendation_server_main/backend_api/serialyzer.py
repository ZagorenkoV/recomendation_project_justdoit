from rest_framework import serializers
from .models import Users, Groups, Groups_Now, Attends

class UsersSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Users
        fields = ['User_Id', 'Registration_date', 'Sex', 'Birth_date', 'Residence_adress']

class GroupsSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Groups
        fields = ['Group_Id', 'level_1', 'level_2', 'level_3', 'Adress', 'District', 
    'Neighborhood', 'Schedule_active', 'Schedule_closed', 'Schedule_plan', 'Description']

class Groups_NowSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Groups_Now
        fields = ['Group_Id', 'level_1', 'level_2', 'level_3', 'Adress', 'District', 
    'Neighborhood', 'Schedule_active', 'Schedule_plan', 'Exp_date', 'Exp_date2', 'Geo_location']

class AttendSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Attends
        fields = ['Class_Id', 'Group_Id', 'User_Id', 'level_2', 'level_3', 'Activity_type', 
    'Activity_date', 'Activity_start', 'Activity_end']