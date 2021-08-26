from rest_framework.serializers import ModelSerializer
from .models import User


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'last_name', 'email')


class UserSerializerV2(ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'last_name', 'email', 'is_staff', 'is_superuser')
