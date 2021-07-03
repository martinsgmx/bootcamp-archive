from django.db import models
from students.models import Student


class Course(models.Model):
    about = models.CharField(max_length=256)
    duration = models.IntegerField()
    name = models.CharField(max_length=128)
    url_image = models.CharField(max_length=128)
    students = models.ManyToManyField(Student, related_name="course")
    year = models.CharField(max_length=128)

    is_activate = models.BooleanField(default=True)

    def __str__(self):
        return self.name
