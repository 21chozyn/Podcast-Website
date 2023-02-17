from django.contrib import admin

# Register your models here.
from .models import Team, Podcast

# Register your models here.
class PodcastAdmin(admin.ModelAdmin):
    list = ('id', 'title', 'coverArt', 'description', 'audio', "createdAt", "coHost", "host")

class TeamAdmin(admin.ModelAdmin):
    list = ('name', "aboutText", "pictureThumb")


admin.site.register(Podcast, PodcastAdmin)
admin.site.register(Team, TeamAdmin)
