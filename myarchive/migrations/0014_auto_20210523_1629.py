# Generated by Django 3.1.7 on 2021-05-23 10:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myarchive', '0013_auto_20210523_1625'),
    ]

    operations = [
        migrations.AlterField(
            model_name='archive',
            name='post',
            field=models.PositiveIntegerField(default=0, verbose_name='hit'),
        ),
    ]
