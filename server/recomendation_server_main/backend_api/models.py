from django.db import models

# Create your models here.

class Users(models.Model):
    User_Id = models.CharField(max_length=50)
    Registration_date = models.DateTimeField()
    Sex = models.CharField(max_length=10)
    Birth_date = models.DateField()
    Residence_adress = models.CharField(max_length=500)

class Test(models.Model):
    User_Id = models.CharField(max_length=50)
    Group_Id = models.CharField(max_length=20)

class Group(models.Model):
    Group_Id = models.CharField(max_length=50)
    level_1 = models.CharField(max_length=50)
    level_2 = models.CharField(max_length=50)
    level_3 = models.CharField(max_length=50)
    Adress = models.CharField(max_length=50)
    District = models.CharField(max_length=100)
    Neighborhood = models.CharField(max_length=100)
    Schedule_active = models.CharField(max_length=100)
    Schedule_closed = models.CharField(max_length=100)
    Schedule_plan = models.CharField(max_length=100)

class Activity(models.Model):
    id_level_1 = models.CharField(max_length=50)
    level_1 = models.CharField(max_length=50)
    id_level_2 = models.CharField(max_length=50)
    level_2 = models.CharField(max_length=50)
    id_level_3 = models.CharField(max_length=50)
    level_3 = models.CharField(max_length=50)
    descr_level_1 = models.CharField(max_length=300)
    descr_level_2 = models.CharField(max_length=300)
    descr_level_3 = models.CharField(max_length=300)

class Attend(models.Model):
    Class_Id = models.CharField(max_length=20)
    Group_Id = models.CharField(max_length=20)
    User_Id = models.CharField(max_length=20)
    level_2 = models.CharField(max_length=50)
    level_3 = models.CharField(max_length=50)
    Activity_type = models.CharField(max_length=50)
    Activity_date = models.DateField()
    Activity_start = models.DateTimeField()
    Activity_end = models.DateTimeField()


