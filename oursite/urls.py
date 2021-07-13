from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('submit', views.register, name='registro'),
    path('login/', views.login_user, name='login'),
    path('login/submit', views.entrar),
    path('logout/', views.logout_user, name='logout'),
]