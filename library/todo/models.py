from django.db import models
from usersapp.models import User


class Project(models.Model):
    project_name = models.CharField(max_length=32)
    project_link = models.TextField()
    project_author = models.ManyToManyField(User)
    #
    # class Meta:
    #     verbose_name = 'Проект'
    #     verbose_name_plural = 'Проекты'



class ToDo(models.Model):
    text = models.TextField()
    author = models.OneToOneField(Project, on_delete=models.CASCADE)
    update_datatime = models.DateField('дата обновления', auto_now=True)
    add_datatime = models.DateField('дата создания', auto_now_add=True)
    is_active = models.BooleanField('активность', default=True)
    #
    # class Meta:
    #     verbose_name = 'Заметка'
    #     verbose_name_plural = 'Заметки'


