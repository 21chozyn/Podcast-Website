# Generated by Django 4.1.4 on 2023-02-04 08:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0002_alter_podcast_audio_alter_podcast_coverart_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="team",
            name="pictureThumb",
            field=models.ImageField(blank=True, default="default.png", upload_to=""),
        ),
    ]