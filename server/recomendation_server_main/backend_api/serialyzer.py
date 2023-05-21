from rest_framework import serializers
from models import Users, Test, Group, Activity, Attend

class UsersSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Users
        fields = ['User_Id', 'Registration_date', 'Sex', 'Birth_date', 'Residence_adress']

class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = ['User_Id', 'Group_Id']

class GroupSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Group
        fields = ['Group_Id', 'level_1', 'level_2', 'level_3', 'Adress', 'District', 
    'Neighborhood', 'Schedule_active', 'Schedule_closed', 'Schedule_plan']
        
class ActivitySerializer(serializers.ModelSerializer):
    class Meta: 
        model = Activity
        fields = ['id_level_1', 'level_1', 'id_level_2', 'level_2', 'id_level_3', 'level_3',
        'descr_level_1', 'descr_level_2', 'descr_level_3']

class AttendSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Attend
        fields = ['Class_Id', 'Group_Id', 'User_Id', 'level_2', 'level_3', 'Activity_type', 
    'Activity_date', 'Activity_start', 'Activity_end']