from django.db import models

# Create your models here.

class Users(models.Model):
    User_Id = models.CharField(max_length=50)
    Registration_date = models.DateTimeField()
    Sex = models.CharField(max_length=10)
    Birth_date = models.DateField()
    Residence_adress = models.CharField(max_length=500)

class Groups(models.Model):
    Group_Id = models.CharField(max_length=500, null=True)
    level_1 = models.CharField(max_length=5000, null=True)
    level_2 = models.CharField(max_length=5000, null=True)
    level_3 = models.CharField(max_length=5000, null=True)
    Adress = models.CharField(max_length=10000, null=True)
    District = models.CharField(max_length=10000, null=True)
    Neighborhood = models.CharField(max_length=10000, null=True)
    Schedule_active = models.CharField(max_length=10000, null=True)
    Schedule_closed = models.CharField(max_length=10000, null=True)
    Schedule_plan = models.CharField(max_length=10000, null=True)
    Description = models.CharField(max_length=10000, null=True)

class Groups_Now(models.Model):
    Group_Id = models.CharField(max_length=50, null=True) 
    level_1 = models.CharField(max_length=500, null=True)
    level_2 = models.CharField(max_length=500, null=True)
    level_3 = models.CharField(max_length=500, null=True)
    Adress = models.CharField(max_length=500, null=True)
    District = models.CharField(max_length=500, null=True)
    Neighborhood = models.CharField(max_length=500, null=True)
    Schedule_active = models.CharField(max_length=500, null=True)
    Schedule_plan = models.CharField(max_length=500, null=True)
    Exp_date = models.DateField(null=True)
    Exp_date2 = models.DateField(null=True)
    Geo_location = models.CharField(max_length=500, null=True)

# class Activity(models.Model):
#     id_level_1 = models.CharField(max_length=50)
#     level_1 = models.CharField(max_length=50)
#     id_level_2 = models.CharField(max_length=50)
#     level_2 = models.CharField(max_length=50)
#     id_level_3 = models.CharField(max_length=50)
#     level_3 = models.CharField(max_length=50)
#     descr_level_1 = models.CharField(max_length=300)
#     descr_level_2 = models.CharField(max_length=300)
#     descr_level_3 = models.CharField(max_length=300)

class Attends(models.Model):
    Class_Id = models.CharField(max_length=100, null=True, unique=False)
    Group_Id = models.CharField(max_length=100, unique=False, null=True) 
    User_Id = models.CharField(max_length=100, unique=False, null=True) 
    level_2 = models.CharField(max_length=500, null=True) 
    level_3 = models.CharField(max_length=500, null=True) 
    Activity_type = models.CharField(max_length=500, null=True)
    Activity_date = models.DateField(null=True)
    Activity_start = models.CharField(null=True)
    Activity_end = models.CharField(null=True)



