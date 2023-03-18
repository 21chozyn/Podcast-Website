import "../css/navbar.scss";
import React, { useEffect, useRef } from "react";
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
import { useAudio } from "./audio-hooks";
import gsap from "gsap-trial";

const Navbar = () => {
  const { isPlaying } = useAudio();

  const playerContainerRef = useRef();
  useEffect(() => {
    if (isPlaying === true) {
      gsap.timeline().to(
        playerContainerRef.current,
        { opacity: 1,  duration: 1 }
      );
    }
    else{
      gsap.timeline().to(
        playerContainerRef.current,
        { opacity: 0.2,  duration: 1 ,delay:4}
      );
    }
  },[isPlaying]);
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
      <div className="player-container" ref={playerContainerRef} style={{ opacity: 0.2 }}>
        <Player />
      </div>
    </div>
  );
};

export default Navbar;
