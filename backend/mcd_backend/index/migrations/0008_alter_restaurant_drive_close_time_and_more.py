# Generated by Django 4.1 on 2024-12-23 20:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('index', '0007_happymealcollection_happymealtoys'),
    ]

    operations = [
        migrations.AlterField(
            model_name='restaurant',
            name='drive_close_time',
            field=models.CharField(default='05:00', max_length=5),
        ),
        migrations.AlterField(
            model_name='restaurant',
            name='drive_open_time',
            field=models.CharField(default='05:00', max_length=5),
        ),
        migrations.AlterField(
            model_name='restaurant',
            name='express_close_time',
            field=models.CharField(default='05:00', max_length=5),
        ),
        migrations.AlterField(
            model_name='restaurant',
            name='express_open_time',
            field=models.CharField(default='05:00', max_length=5),
        ),
        migrations.AlterField(
            model_name='restaurant',
            name='is_open_now',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='restaurant',
            name='main_close_time',
            field=models.CharField(default='22:30', max_length=5),
        ),
        migrations.AlterField(
            model_name='restaurant',
            name='main_open_time',
            field=models.CharField(default='05:00', max_length=5),
        ),
    ]
