from django.contrib import admin
from .models import Team, Podcast

# Register your models here.
class PodcastAdmin(admin.ModelAdmin):
    list = ('id', 'title', 'coverArt', 'description', 'audio', "createdAt", "coHost", "host")


admin.site.register(Podcast, PodcastAdmin)
