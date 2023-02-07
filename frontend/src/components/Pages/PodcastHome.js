import React, { useEffect, useState, useRef } from "react";
import { Stack, Divider, Typography, Button } from "@mui/material";
import "../../../static/css/home.css";
import PodcastEpisode from "../PodcastEpisode";
import PodcastNavBar from "../PodcastNavBar";
import AudioPlayer from "../AudioPlayer";

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
  const [audioSrc, setAudioSrc] = useState("");
  const [coverArt, setCoverArt] = useState("../../../static/images/defaultCover.jpg");
  useEffect(() => {
    fetch(`/api/podcast`)
      .then((response) => response.json())
      .then((usefulData) => {
        setPodcastEpisodes(usefulData);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`);
      });
  }, []);

  return (
    <div className="podcast--home" id="podcastSection">
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
              key={podcastEpisode.id}
              className="podcast"
              title={podcastEpisode.title}
              infoText={podcastEpisode.description}
              imgSrc={podcastEpisode.coverArt}
              audio={podcastEpisode.audio}
              callback1={setAudioSrc}
              callback2={setCoverArt}
            />
          </>
        ))}
      </Stack>
      <br />
      <br />
      <AudioPlayer audioSrc={audioSrc} coverArt={coverArt} />

      <br />
    </div>
  );
};

export default PodcastHome;
