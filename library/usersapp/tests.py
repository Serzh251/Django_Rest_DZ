# import json
# from django.test import TestCase
# from rest_framework import status
# from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase
# from mixer.backend.django import mixer
# from django.contrib.auth.models import User as UserAbstract
# from .views import UserViewSet
# # from .models import User
# from todo.models import ToDo, Project
# from usersapp.models import User
# from todo.views import ProjectViewSet
#
#
# class TestAuthorViewSet(TestCase):
#
#     def test_get_list(self):
#         factory = APIRequestFactory()
#         request = factory.get('/api/users/')
#         view = UserViewSet.as_view({'get': 'list'})
#         response = view(request)
#         self.assertEqual(response.status_code, status.HTTP_200_OK)
#
#     def test_create_guest(self):
#         factory = APIRequestFactory()
#         request = factory.post('/api/users/', {'username': 'Пушкин', 'email': 'serzh@gb.ru'}, format='json')
#         view = UserViewSet.as_view({'post': 'create'})
#         response = view(request)
#         self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
#
#     def test_create_admin(self):
#         factory = APIRequestFactory()
#         request = factory.post('/api/users/', {'username': 'user1', 'email': 'serzh@gb.ru',
#                                                'last_name': 'lasr'}, format='json')
#         admin = User.objects.create_superuser('admin', 'admin@admin.com', 'admin123456')
#         force_authenticate(request, admin)
#         view = UserViewSet.as_view({'post': 'create'})
#         response = view(request)
#         self.assertEqual(response.status_code, status.HTTP_201_CREATED)
#
#     def test_get_detail(self):
#         project = Project.objects.create(project_name='Пушкин', project_link='www')
#         client = APIClient()
#         response = client.get(f'/api/project/{project.id}/')
#         self.assertEqual(response.status_code, status.HTTP_200_OK)
#
#     def test_edit_guest(self):
#         project = Project.objects.create(project_name='startapp1', project_link='www')
#         client = APIClient()
#         response = client.put(f'/api/project/{project.id}/', {'project_name': 'startapp2', 'project_link': 'www'})
#         self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
#
#     def test_edit_admin(self):
#         new_user = User.objects.create(username='Пушкин', email='serzh@gb.ru', last_name='Алекс')
#         client = APIClient()
#         admin = User.objects.create_superuser('admin', 'admin@admin.com', 'admin123456')
#         client.login(username='admin', password='admin123456')
#         response = client.put(f'/api/users/{new_user.id}/', {'username': 'user1', 'email': 'serzh222@gb.ru',
#                                                              'last_name': 'pavlov'}, format='json')
#         self.assertEqual(response.status_code, status.HTTP_200_OK)
#         author = User.objects.get(id=new_user.id)
#         self.assertEqual(author.username, 'user1')
#         self.assertEqual(author.email, 'serzh222@gb.ru')
#         client.logout()
#
#
# class TestMath(APISimpleTestCase):
#     def test_sqrt(self):
#         import math
#         self.assertEqual(math.sqrt(4), 2)
#
#
# class TestBookViewSet(APITestCase):
#
#     def test_get_list(self):
#         response = self.client.get('/api/todo/')
#         self.assertEqual(response.status_code, status.HTTP_200_OK)
#
#     def test_edit_admin(self):
#         project = Project.objects.create(project_name='Пушкин', project_link='www.ru')
#         todo = ToDo.objects.create(text='Пиковая дама', author=project)
#         admin = User.objects.create_superuser('admin', 'admin@admin.com', 'admin123456')
#         self.client.login(username='admin', password='admin123456')
#         response = self.client.put(f'/api/todo/{todo.id}/', {'text': 'Руслан и Людмила',
#                                                              'author': todo.author.id}, format='json')
#         self.assertEqual(response.status_code, status.HTTP_200_OK)
#         todo = ToDo.objects.get(id=todo.id)
#         self.assertEqual(todo.text, 'Руслан и Людмила')
#
#     def test_edit_mixer(self):
#         todo = mixer.blend(ToDo)
#         admin = User.objects.create_superuser('admin', 'admin@admin.com', 'admin123456')
#         self.client.login(username='admin', password='admin123456')
#         response = self.client.put(f'/api/todo/{todo.id}/', {'text': 'Руслан и Людмила',
#                                                              'author': todo.author.id}, format='json')
#         self.assertEqual(response.status_code, status.HTTP_200_OK)
#         todo = ToDo.objects.get(id=todo.id)
#         self.assertEqual(todo.text, 'Руслан и Людмила')
#
#     def test_get_detail(self):
#         todo = mixer.blend(ToDo, text='Алые паруса')
#         response = self.client.get(f'/api/todo/{todo.id}/')
#         self.assertEqual(response.status_code, status.HTTP_200_OK)
#         response_todo = json.loads(response.content)
#         self.assertEqual(response_todo['text'], 'Алые паруса')
#
#     def test_get_detail_author(self):
#         todo = mixer.blend(ToDo, author__project_name='Грин')
#         response = self.client.get(f'/api/todo/{todo.id}/')
#         self.assertEqual(response.status_code, status.HTTP_200_OK)
#         self.assertEqual(todo.author.project_name, 'Грин')
