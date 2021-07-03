from django.shortcuts import render
from students.models import Student


def get_students(request):
    context: dict

    if request.method == "GET":
        students = Student.objects.all()

        context = {
            "students": students
        }

    return render(request, 'students/students.html', context)


def get_student(request, student_id):
    context: dict

    student = Student.objects.get(id=student_id)

    context = {
        "student": student
    }

    return render(request, 'students/student-details.html', context)
