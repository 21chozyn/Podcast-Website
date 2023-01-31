import React, { Component } from "react";
import { render } from "react-dom";
import Header from "./header";
import Podcast from "./Pages/Podcast";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";


export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}
const appDiv = document.getElementById("app");
const root = createRoot(appDiv);

root.render(<App />);
