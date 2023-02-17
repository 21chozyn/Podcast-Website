import React from "react";
import Header from "./Header";
import PodcastHome from "./PodcastHome";
import Player from "./Player";
import TeamPage from "./TeamPage";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import Error from "./Error";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../css/index.css";

export default function App() {
  return (
    <Router>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/podcast" element={<PodcastHome />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <div style={{ position: "relative", width: "100vw" }}>
        <Player />
      </div>
      <br />
      <br />

      <Footer />
    </Router>
  );
}
