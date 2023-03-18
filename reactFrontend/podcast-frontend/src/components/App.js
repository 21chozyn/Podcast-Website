import React from "react";
import HomePage from "./HomePage";
import Error from "./Error";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../css/index.scss";
import Layout from "./Layout";
import PodcastPage from "./PodcastPage";
import Contact from "./Contact";
import Team from "./Team"

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
        <Route path="/team" element={<Team />} />
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
