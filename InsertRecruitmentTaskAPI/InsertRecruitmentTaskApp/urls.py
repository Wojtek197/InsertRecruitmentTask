from django.urls import re_path
from InsertRecruitmentTaskApp import views

urlpatterns=[
    re_path(r'^category/$', views.categoryApi),
    re_path(r'^category/([0-9]+)$', views.categoryApi),

    re_path(r'^offers/$', views.offerApi),
    re_path(r'^offers/([0-9]+)$', views.offerApi)
]