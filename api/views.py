from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Team,Podcast
from .serializers import TeamSerializer, PodcastSerializer

# Create your views here.
#api view that returns list of given database table

class TeamView(generics.ListCreateAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

class PodcastView(generics.ListCreateAPIView):
    queryset = Podcast.objects.all()
    serializer_class = PodcastSerializer

# class GetPodcasts(APIView):
    
#     def get(self,request,format=None):
#         podcasts = Podcast.objects.all()
#         serializer = PodcastSerializer
#         return Response(serializer.data)
    