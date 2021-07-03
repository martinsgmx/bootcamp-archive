from students.models import Student
from rest_framework.serializers import ModelSerializer


class StudentSerializer(ModelSerializer):
    class Meta:
        model = Student
        fields = ('born', 'email', 'name', 'nationality', 'url_image', 'is_activate')