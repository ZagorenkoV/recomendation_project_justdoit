# Generated by Django 4.2.1 on 2023-05-25 17:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend_api', '0011_alter_groups_description_alter_groups_schedule_plan'),
    ]

    operations = [
        migrations.AlterField(
            model_name='groups',
            name='Group_Id',
            field=models.CharField(max_length=50, null=True),
        ),
    ]