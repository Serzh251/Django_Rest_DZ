from django.db import models
from django.contrib.auth.models import AbstractUser
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class User(AbstractUser):
    username = models.CharField(max_length=64, unique=True)
    email = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    is_staff = models.BooleanField('Personal', default=True)
    is_superuser = models.BooleanField('Superuser', default=True)
