from rest_framework.serializers import ModelSerializer
from .models import User


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'last_name', 'email') # у суперюзера поля немного иные
        # fields = "__all__"