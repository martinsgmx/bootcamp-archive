from django.db import models


class Student(models.Model):
    born = models.DateField()
    email = models.CharField(max_length=64)
    name = models.CharField(max_length=128)
    nationality = models.CharField(max_length=8)
    url_image = models.CharField(max_length=128)

    is_activate = models.BooleanField(default=True)

    def __str__(self):
        return self.name
