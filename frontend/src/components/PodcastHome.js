import React, { useEffect, useState, useRef } from "react";
import {
  Stack,
  Divider,
  styled,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import { FaSoundcloud } from "react-icons/fa";
import "../../static/css/home.css";
import PodcastEpisode from "./PodcastEpisode";
import PodcastNavBar from "./PodcastNavBar";
import AudioPlayer from "./AudioPlayer";

const PodcastHome = () => {
  const initialPodcastEpisodes = [
    {
      id: 1,
      title: "uz shortage of housing",
      coverArt: "../../static/images/cover1.jpeg",
      description:
        "this is podcast info text here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Interne",
      audio:
        "https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3",
      createdAt: "30/01/2022",
      coHost: "blessed pukka",
      Host: "Travis Mawere",
    },
    {
      id: 1,
      title: "sex scandal on campus",
      coverArt: "../../static/images/cover1.jpeg",
      description:
        "this is podcast info text here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Interne",
      audio:
        "https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3",
      createdAt: "30/01/2022",
      coHost: "blessed pukka",
      Host: "Travis Mawere",
    },
  ];

  const [podcastEpisodes, setPodcastEpisodes] = useState(
    initialPodcastEpisodes
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [audioSrc, setAudioSrc] = useState("");

  useEffect(() => {
    fetch(`/api/podcast`)
      .then((response) => response.json())
      .then((usefulData) => {
        setLoading(false);
        setPodcastEpisodes(usefulData);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`);
      });
  }, []);

  return (
    <div className="podcast--home" id="podcastSection">
      {/* <Paper
        className="subscribe--page"
        sx={{ p: 4, margin: "auto", maxWidth: 1250 }}
        elevation={3}
      >
        <Stack spacing={3} alignItems="center" justifyContent="center">
          <Typography variant="h4" align="center">
            Listen and subscribe to The Rez Issue by The Voice
          </Typography>
          <Button
            onClick={() => console.log(audioSrc)}
            variant="contained"
            endIcon={<FaSoundcloud />}
            sx={{
              maxWidth: 150,
              backgroundColor: "#2f4f4f",
              "&:hover": { backgroundColor: "#fff", color: "#2f4f4f" },
            }}
          >
            SoundCloud
          </Button>
        </Stack>
      </Paper> */}
      <PodcastNavBar />
      <br />
      <br />

      <Stack
        className="podcasts"
        spacing={2}
        divider={<Divider orientation="horizontal" flexItem />}
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h4" align="left" sx={{ width: 900 }}>
          ALL PODCASTS
        </Typography>
        {podcastEpisodes.map((podcastEpisode, index) => (
          <>
            <PodcastEpisode
              key={index}
              className="podcast"
              title={podcastEpisode.title}
              infoText={podcastEpisode.description}
              imgSrc={podcastEpisode.coverArt}
              audio={podcastEpisode.audio}
              callback={setAudioSrc}
            />
          </>
        ))}
      </Stack>
      <br />
      <br />
      <div className="audio--player">
        <AudioPlayer audioSrc={audioSrc} />
      </div>

      <br />
    </div>
  );
};

export default PodcastHome;
