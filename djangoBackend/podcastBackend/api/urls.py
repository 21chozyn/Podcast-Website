from django.urls import path
from .views import TeamView, PodcastView

urlpatterns = [
    path('podcast/', PodcastView.as_view()),
    path('team/', TeamView.as_view()),
]
