# Generated by Django 4.2.1 on 2023-05-25 10:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend_api', '0003_groups_groups_now_rename_attend_attends_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='groups_now',
            name='Geo_location',
            field=models.CharField(max_length=500, null=True),
        ),
    ]
