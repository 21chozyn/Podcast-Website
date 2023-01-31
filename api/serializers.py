from rest_framework import serializers
from .models import Team, Podcast

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ('id', "name", "aboutText", 'picture')

class PodcastSerializer(serializers.ModelSerializer):
     class Meta:
        model = Podcast
        fields = ('id', 'title', 'coverArt', 'description', 'audio', "createdAt", "coHost", "host")