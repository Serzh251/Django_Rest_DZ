from rest_framework import mixins, viewsets
from rest_framework.generics import get_object_or_404
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from .models import Project, ToDo
from .serializers import ProjectSerializer, ToDoSerializer
from django_filters import rest_framework as filters


class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class ToDotLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20


class ProjectViewSet(mixins.ListModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin,
                     mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()
    pagination_class = ProjectLimitOffsetPagination
    filterset_fields = ['project_name']

    def get_queryset(self):
        project_name = self.request.query_params.get('project_name', None)
        if project_name:
            return Project.objects.filter(project_name=project_name)
        return Project.objects.all()


class ToDoViewSet(ModelViewSet):
    serializer_class = ToDoSerializer
    queryset = ToDo.objects.all()
    pagination_class = ToDotLimitOffsetPagination
    # filterset_fields = ['author']

    # filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('author', 'add_datatime', 'update_datatime') # не уверен насколько правильно по заданию

    def destroy(self, request, pk=None):
        todo = get_object_or_404(ToDo, pk=pk)
        serializer = ToDoSerializer(todo)
        todo.is_active = False
        todo.save()
        return Response(serializer.data)


# class ToDoViewSet(filters.FilterSet):
#     class Meta:
#         model = ToDo
#         fields = ('add_datatime', 'update_datatime')