import React, { useEffect, useState } from "react";
import { Stack, Divider, Typography ,Pagination } from "@mui/material";
import "../css/home.css";
import PodcastEpisode from "./PodcastEpisode";
import PodcastNavBar from "./PodcastNavBar";

function PodcastHome() {
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
  const initialApiData = {
    count: 3,
    next: "http://127.0.0.1:8000/api/podcast/?limit=2&offset=2",
    previous: null,
  };
  const podcastsPerPage = 2
  const [page, setPage] = React.useState(1);
  const [fetchLink, setFetchLink] = useState("http://127.0.0.1:8000/api/podcast/")
  const handleChange = (event, value) => {
    setFetchLink(`http://127.0.0.1:8000/api/podcast/?limit=${podcastsPerPage}&offset=${(value-1)*podcastsPerPage}`)

    
    setPage(value);
  };
  const [podcastEpisodes, setPodcastEpisodes] = useState(
    initialPodcastEpisodes
  );
  const [apiData, setApiData] = useState(initialApiData);


  useEffect(() => {
    fetch(fetchLink)
      .then((response) => response.json())
      .then((usefulData) => {
        setApiData({
          count: usefulData.count,
          next: usefulData.next,
          previous: usefulData.previous,
        });
        setPodcastEpisodes(usefulData.results);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`);
      });
  }, [fetchLink]);

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
        {console.log(apiData)}
        <Typography variant="h4" align="left" sx={{ width: 900 }}>
        Page: {page}
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
            />
          </>
        ))}
        <Pagination count={Math.ceil(apiData.count/podcastsPerPage)} page={page} onChange={handleChange} />
      </Stack>

      <br />
    </div>
  );
}

export default PodcastHome;
