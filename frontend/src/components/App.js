import React, { useState } from "react";
import Header from "./header";
import PodcastHome from "./Pages/PodcastHome";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";

export default function App() {
 
  return (
    <Router>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route
          path="/podcast"
          element={
            <PodcastHome />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}
const appDiv = document.getElementById("app");
const root = createRoot(appDiv);

root.render(<App />);
