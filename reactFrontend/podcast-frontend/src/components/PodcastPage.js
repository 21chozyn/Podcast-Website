import React, { useEffect, useState, useRef } from "react";
import PodcastEpisode from "./PodcastEpisode";
import "../css/podcastspage.scss";
import SearchIcon from "@mui/icons-material/Search";
import Loading from "./Loading"

import { Pagination } from "@mui/material";


const PodcastPage = (props) => {
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
  const sortMethods = [
    {
      value: "createdAt",
      label: "Recently Added",
    },
    {
      value: "-createdAt",
      label: "Oldest Podcasts",
    },
  ];

  const initialApiData = {
    count: 3,
    next: "http://127.0.0.1:8000/api/podcast/?limit=2&offset=2",
    previous: null,
  };
  const podcastsPerPage = 5;
  const [page, setPage] = React.useState(1);
  const [fetchLink, setFetchLink] = useState(
    "http://100.25.163.230:8000/api/podcast/"
  );
  const searchInput = useRef();
  const orderingInput = useRef();
  const handlePagination = (event, value) => {
    setFetchLink(
      `http://100.25.163.230:8000/api/podcast/?limit=${podcastsPerPage}&offset=${
        (value - 1) * podcastsPerPage
      }&search=${searchInput.current.value}&ordering=${
        orderingInput.current.value
      }`
    );
    setPage(value);
  };
  const handleSearch = () => {
    setFetchLink(
      `http://100.25.163.230:8000/api/podcast/?limit=${podcastsPerPage}&offset=0&search=${searchInput.current.value}&ordering=${orderingInput.current.value}`
    );
  };

 
  const [podcastEpisodes, setPodcastEpisodes] = useState(
    initialPodcastEpisodes
  );
  const [apiData, setApiData] = useState(initialApiData);
  useEffect(() => {
    window.scrollTo(0, 0);
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
    <div className="podcasts-container" id="podcasts-container" style={props.style}>
      <div className="search-filter-container">
        <input
          type="search"
          ref={searchInput}
          className="search-bar"
          placeholder="Search Podcasts"
        ></input>

        <select className="dropdown" ref={orderingInput}>
          {sortMethods.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="search-btn" onClick={handleSearch}>
          <SearchIcon />
        </div>
      </div>
      <h2>Page: {page}</h2>
      <div className="podcasts-div">
        {podcastEpisodes.map((podcastEpisode, index) => (
          <div key={index} className={`podcast _${index + 20}`}>
            <PodcastEpisode
              title={podcastEpisode.title}
              infoText={podcastEpisode.description}
              imgSrc={podcastEpisode.coverArt}
              audio={podcastEpisode.audio}
            />
          </div>
        ))}

        <Pagination
          className="pagination"
          count={Math.ceil(apiData.count / podcastsPerPage)}
          page={page}
          onChange={handlePagination}
          color="error"
        />
      </div>
      <Loading />
    </div>
  );
};

export default PodcastPage;
