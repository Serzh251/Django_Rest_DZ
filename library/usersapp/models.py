from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    email = models.CharField(max_length=64, unique=True)
    username = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']