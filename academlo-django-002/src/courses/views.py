from courses.models import Course
from courses.serializers import CourseSerializer
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework.viewsets import ModelViewSet


class CourseViewSet(ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

    def get_permissions(self) -> list:
        permissions: list

        if self.request.method == 'GET':
            permissions = (AllowAny, )
        elif self.request.method == 'DELETE' or 'POST' or 'PUT' or 'PATCH':
            permissions = (IsAdminUser, )

        return [ permission() for permission in permissions ]
