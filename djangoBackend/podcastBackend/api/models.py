from django.db import models

# Create your models here.
class Team(models.Model):  # this table stores data about team members
    name = models.CharField(max_length=30)
    aboutText = models.CharField(max_length=500)
    pictureThumb = models.ImageField(default='default.png', blank=True)

    def _str_(self): 
        return self.name


class Podcast(models.Model):  # this stores podcast episode data
    title = models.CharField(max_length=40, null=False)
    coverArt = models.ImageField(default='defaultCover.png', blank=True)
    description = models.CharField(max_length=400, null=False)
    audio = models.FileField(default='default.mp3', blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    coHost = models.CharField(max_length=50, default=None,)
    host = models.CharField(max_length=50, default=None) 

    def _str_(self):
        return self.title
