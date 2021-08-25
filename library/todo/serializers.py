from rest_framework.serializers import ModelSerializer
from .models import Project, ToDo
from usersapp.serializers import UserSerializer


class ProjectSerializer(ModelSerializer):
    project_author= UserSerializer(many=True)

    class Meta:
        model = Project
        fields = "__all__"


class ProjectSerializerBase(ModelSerializer):
    # project_author= UserSerializer(many=True)

    class Meta:
        model = Project
        fields = ('project_name',)


class ToDoSerializer(ModelSerializer):
    # author = ProjectSerializer(many=True) - c этим не работает, ошибка 'Project' object is not iterable
    class Meta:
        model = ToDo
        fields = "__all__"