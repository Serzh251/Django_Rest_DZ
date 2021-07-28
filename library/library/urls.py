from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from usersapp.views import UserViewSet
from usersapp import views
# from todo import views
from todo.views import ProjectViewSet, ToDoViewSet


router = DefaultRouter()
# router.register('users', UserViewSet)
router.register('users', views.UserViewSet, basename='users')
router.register('project', ProjectViewSet, basename='project')
router.register('todo', ToDoViewSet, basename='todo')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
