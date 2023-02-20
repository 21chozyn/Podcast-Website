from rest_framework import generics, filters
from .models import Team,Podcast
from .serializers import TeamSerializer, PodcastSerializer

# Create your views here.
#api view that returns list of given database table

class TeamView(generics.ListAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

class PodcastView(generics.ListAPIView):
    queryset = Podcast.objects.all()
    serializer_class = PodcastSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['$title','$description']
    ordering_fields = ['id',"createdAt"]