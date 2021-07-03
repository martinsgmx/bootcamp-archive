from courses.models import Course
from rest_framework.serializers import ModelSerializer


class CourseSerializer(ModelSerializer):
    class Meta:
        model = Course
        fields = ('about', 'duration', 'name', 'year', 'url_image', 'students', 'year', 'is_activate')
