# Generated by Django 4.1 on 2024-12-23 20:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('index', '0009_alter_restaurant_phone_number'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='restaurant',
            name='email',
        ),
    ]