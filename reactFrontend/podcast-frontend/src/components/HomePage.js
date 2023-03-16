import HeroSection from "./HeroSection.js";
import PodcastHome from "./PodcastHome";

import React from "react";
import PodcastPage from "./PodcastPage.js";

const Home = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <PodcastPage />
    </React.Fragment>
  );
};

export default Home;
