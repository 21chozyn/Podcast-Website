import React, { useEffect, useState, useRef ,useCallback} from "react";
import "./index.scss";
import defaultImg from "../../images/avatar3.png";
import { gsap } from "gsap-trial";

const Member = (props) => {
  const nameRef = useRef();
  const imageContainerRef = useRef();
  const jobRef = useRef();
  const memberContainerRef = useRef();

  const handleMouseEnter = (e) => {

    gsap.timeline().fromTo(
      nameRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        top: `${e.clientY}px`,
        left: `${e.clientX}px`,
        duration: 0.4,
      }
    );
    gsap.timeline().to(jobRef.current, {
      backgroundColor: "#1d648a",
      fontSize: "20px",
      duration: 0.6,
    });
    gsap.timeline().to(memberContainerRef.current, {
      backgroundColor: "#115173",
      fontSize: "20px",
      duration: 0.6,
    });
  };
  const hideInfo = () => {
    gsap.timeline().to(jobRef.current, {
      backgroundColor: "#003739",
      fontSize: "0",
      duration: 0.6,
    });
    gsap.timeline().to(memberContainerRef.current, {
      backgroundColor: "#003739",
      fontSize: "0",
      duration: 0.6,
    });
    gsap.timeline().to(nameRef.current, { opacity: 0, duration: 0.4 });
  };
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          hideInfo();
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(memberContainerRef)

  return (
    <div className="member-container" ref={memberContainerRef} onMouseEnter={handleMouseEnter}>
      <div
        ref={imageContainerRef}
        className="image-container"
        onMouseEnter={handleMouseEnter}
      >
        <img src={defaultImg} alt="member" onMouseEnter={handleMouseEnter}/>
      </div>
      <div className="member-name" ref={nameRef} style={{ opacity: 0 }}>
        {props.name}
      </div>
      <p ref={jobRef}>{props.job}</p>
    </div>
  );
};

export default Member;
