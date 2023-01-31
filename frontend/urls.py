from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('podcast', index),
    path('video', index),
    path('team', index),
    path('about', index),
    path('contact', index),
    
]