from rest_framework.generics import ListAPIView, get_object_or_404
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from .models import User
from .serializers import UserSerializer
from rest_framework import mixins, viewsets
from rest_framework.decorators import action


class UserViewSet(ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

#
# class UserViewSet(viewsets.ViewSet):
#
#     def list(self, request):
#         queryset = User.objects.all()
#         serializer_class = UserSerializer(queryset, many=True)
#         return Response(serializer_class.data)

    # def retrieve(self, request, pk=None):
    #     article = get_object_or_404(User, pk=pk)
    #     serializer = UserSerializer(article)
    #     return Response(serializer.data)
#
#     @action(detail=True, methods=['post'])
#     def article_text_only(self, request, pk=None):
#         user = get_object_or_404(User, pk=pk)
#         return Response({'user.username': user.username})


# class UserViewSet(mixins.ListModelMixin, mixins.UpdateModelMixin,mixins.RetrieveModelMixin, viewsets.GenericViewSet, mixins.CreateModelMixin):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
