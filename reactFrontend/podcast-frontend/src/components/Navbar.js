import "../css/navbar.scss";
import React from "react";
import Logo from "../assets/images/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faPeopleGroup,
  faPodcast,
} from "@fortawesome/free-solid-svg-icons";
import Player from "./Player";
import AudioPlayer from "./AudioPlayer";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/podcast"
          className="podcast-link"
        >
          <FontAwesomeIcon icon={faPodcast} />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/team"
          className="team-link"
        >
          <FontAwesomeIcon icon={faPeopleGroup} />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/contact"
          className="contact-link"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
      </nav>
      <div className="player-container">
        <Player />
      </div>
    </div>
  );
};

export default Navbar;
