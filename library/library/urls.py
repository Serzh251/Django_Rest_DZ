from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import permissions
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken import views
from usersapp.views import UserListAPIView, UserViewSet
from todo.views import ProjectViewSet, ToDoViewSet
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from django.views.generic import TemplateView
from graphene_django.views import GraphQLView


schema_view = get_schema_view(
    openapi.Info(
        title="Library",
        default_version='0.1',
        description="Documentation to out project",
        contact=openapi.Contact(email="admin@admin.local"),
        license=openapi.License(name="MIT License"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

router = DefaultRouter()
router.register('user', UserViewSet)
# router.register('users', views.UserViewSet, basename='users')
router.register('project', ProjectViewSet, basename='project')
router.register('todo', ToDoViewSet, basename='todo')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api-token-auth/', views.obtain_auth_token),
    path('api-auth/', include('rest_framework.urls')),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain'),
    path('', TemplateView.as_view(template_name='index.html')),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    re_path(r'^api/(?P<version>\d\.\d)/users/$', UserListAPIView.as_view()),
    path('api/users/0.1', include('usersapp.urls', namespace='0.1')),
    path('api/users/0.2', include('usersapp.urls', namespace='0.2')),

    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    path('swagger-ui/', TemplateView.as_view(template_name='swagger-ui.html',
                                             extra_context={'schema_url': 'openapi-schema'}), name='swagger-ui'),
    path('redoc/', TemplateView.as_view(template_name='redoc.html',
                                        extra_context={'schema_url':'openapi-schema'}), name='redoc'),
    path("graphql/", GraphQLView.as_view(graphiql=True)),
]
