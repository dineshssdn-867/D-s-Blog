# Generated by Django 3.1.7 on 2021-05-23 07:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0009_auto_20210407_1150'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='userprofile',
            options={'ordering': ['id']},
        ),
    ]
