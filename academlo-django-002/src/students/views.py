from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from students.serializers import StudentSerializer
from students.models import Student
from rest_framework.viewsets import ModelViewSet


class StudentViewSet(ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

    def get_permissions(self) -> list:
        permissions: list

        if self.request.method == 'GET':
            permissions = (AllowAny, )
        elif self.request.method == 'POST' or 'PUT' or 'PATCH':
            permissions = (IsAuthenticated, )
        elif self.request.method == 'DELETE':
            permissions = (IsAdminUser, )



        return [ permission() for permission in permissions ]