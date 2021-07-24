from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from usersapp.views import UserViewSet
from todo.views import ProjectViewSet, ToDoViewSet


router = DefaultRouter()
router.register('users', UserViewSet)
router.register('project', ProjectViewSet)
router.register('todo', ToDoViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
