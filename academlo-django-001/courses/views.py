from django.shortcuts import render
from courses.models import Course


def get_courses(request):
    context: dict

    if request.method == "GET":
        courses = Course.objects.all()

        context = {
            "courses": courses
        }

    return render(request, 'courses/courses.html', context)


def get_course(request, course_id):
    context: dict

    course = Course.objects.get(id=course_id)

    context = {
        "students": course.students.all(),
        "course": course
    }

    return render(request, 'courses/course-details.html', context)
