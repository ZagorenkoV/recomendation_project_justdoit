# Generated by Django 4.2.1 on 2023-05-25 13:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend_api', '0009_delete_groups_nowimport_alter_groups_now_adress_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='attends',
            name='Activity_date',
            field=models.DateField(null=True),
        ),
        migrations.AlterField(
            model_name='attends',
            name='Activity_end',
            field=models.DateTimeField(null=True),
        ),
        migrations.AlterField(
            model_name='attends',
            name='Activity_start',
            field=models.DateTimeField(null=True),
        ),
        migrations.AlterField(
            model_name='attends',
            name='Activity_type',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='attends',
            name='level_2',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='attends',
            name='level_3',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='groups',
            name='Adress',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='groups',
            name='Description',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='groups',
            name='District',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='groups',
            name='Neighborhood',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='groups',
            name='Schedule_active',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='groups',
            name='Schedule_closed',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='groups',
            name='Schedule_plan',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='groups',
            name='level_1',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='groups',
            name='level_2',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='groups',
            name='level_3',
            field=models.CharField(max_length=500, null=True),
        ),
    ]
