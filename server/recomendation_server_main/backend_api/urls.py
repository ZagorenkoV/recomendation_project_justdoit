from django.urls import re_path, path
from backend_api import views

from django.conf.urls.static import static
from django.conf import settings
from rest_framework.urlpatterns import format_suffix_patterns
from ..backend_api import views




urlpatterns = [
    path('api/survey', views.SurveyApiView.as_view()),
    path('api/popular', views.PopularApiView.as_view()),
    path('api/date', views.GetDateApiView.as_view()),
]

# urlpatterns = format_suffix_patterns(urlpatterns, allowed=['json', 'html'])

# urlpatterns=[
#     re_path(r'^users$', views.UsersApi),
#     re_path(r'^users/([0-9]+)$',views.UsersApi)
# ]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)