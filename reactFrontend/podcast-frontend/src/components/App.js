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
import Layout from "./Layout";
import PodcastPage from "./PodcastPage";
import Contact from "./Contact";

export default function App() {
  return (
    <Router>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <Layout />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/team" element={<TeamPage />} />
        <Route path="/podcast" element={<PodcastPage style={{marginTop:"130px"}} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <br />
      <br />

      <Footer />
    </Router>
  );
}
