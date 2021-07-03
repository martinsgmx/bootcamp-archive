# Academlo Django - 02

## TL;DR
<ul>
    <li>Build docker container.</li>
    <li>Run container.</li>
    <li>Import Postman colletion.</li>
    <li>Run test cases</li>
</ul>

Creds: admin@toor

## Project structure
```
src/
|  |_ academy
|  |   |_ [..]
|  |_ courses
|  |   |_ [..]
|  |_ students
|      |_ [..]
doc/
   |
   |_ Postman Collection
```

## Endpoints
```
API: 
    api/v1/token/
    api/v1/token/refresh/
COURSES:
    courses/
STUDENTS:
    students/
```

## Build Dockerfile
```
docker build -t django-app .
```

## Run project
```
docker run -it -p 8000:8000 django-app
```
