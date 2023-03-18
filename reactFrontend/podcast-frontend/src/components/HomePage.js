import HeroSection from "./HeroSection.js";
import PodcastHome from "./PodcastHome";

import React from "react";
import PodcastPage from "./PodcastPage.js";
import Loading from "./Loading";
import Tip from "./Tip";

const Home = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <PodcastPage />
      <Loading />
      <Tip tip="click anywhere on the screen for more" />
    </React.Fragment>
  );
};

export default Home;
