from django.db import models


class Student(models.Model):
    born = models.DateField()
    # courses = models.ManyToManyField(Course, related_name="courses")
    email = models.CharField(max_length=64)
    name = models.CharField(max_length=128)
    nationality = models.CharField(max_length=8)
    url_image = models.CharField(max_length=128)

    is_activate = models.BooleanField(default=True)

    def __str__(self):
        return self.name
