# Generated by Django 4.1 on 2024-12-23 21:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('index', '0011_alter_restaurant_phone_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='restaurant',
            name='number',
            field=models.IntegerField(),
        ),
    ]
