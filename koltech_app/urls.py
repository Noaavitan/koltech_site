from django.contrib import admin
from django.urls import path
from koltech_app import views
from django.conf.urls import include


urlpatterns = [
    path('', views.index, name='index'),
    # path('project_koltech/', include('project_koltech.urls'))
]
