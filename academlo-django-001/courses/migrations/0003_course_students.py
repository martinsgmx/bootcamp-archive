# Generated by Django 2.2.24 on 2021-06-20 21:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0007_remove_student_courses'),
        ('courses', '0002_course_about'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='students',
            field=models.ManyToManyField(related_name='courses', to='students.Student'),
        ),
    ]