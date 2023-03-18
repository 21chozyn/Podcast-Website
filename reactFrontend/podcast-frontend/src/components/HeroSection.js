import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap-trial";
import "../css/heroSection.css";
import AnimatedLetters from "./AnimatedLetters";

const HeroSection = () => {
  const [doThisText, setDoThisText] = useState(
    "Listen to our funniest podcasts"
  );
  const [doThisTextClass, setDoThisTextClass] = useState("do-this-text");
  const handleTouch = () => {
    setDoThisTextClass("do-this-text-gsap")
    setDoThisText((currentText) =>
      currentText == "Listen to our funniest podcasts"
        ? "Watch some of our funniest tiktoks"
        : "Listen to our funniest podcasts"
    ); 
    gsap.timeline().fromTo(
      doThisRef.current,
      { opacity: 0, transform: "rotateX(90deg)" },
      { opacity: 1, transform: "rotateX(0)", duration: 1 }
    );
    if (doThisText == "Listen to our funniest podcasts"){
    gsap.timeline().to(
      spinnerRef.current,
      {transform: "rotate3d(0, 1, 0, -90deg)", duration: 1}
    )}
    else{
      gsap.timeline().to(
        spinnerRef.current,
        {transform: "rotate3d(0, 0, 0, 0)", duration: 1}
      )
    }
  };
  const handleClickScroll = () => {
    const element = document.getElementById("podcasts-container");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ align: true, behavior: "smooth" });
    }
  };

  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  const doThisRef = useRef();
  const spinnerRef = useRef();
  return (
    <div className="hero-container" onClick={handleTouch}>
      <div className="background" ></div>
      <h1>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={"The Rez Issue".split("")}
          idx={20}
        />
        <br />
        <AnimatedLetters
          letterClass={letterClass}
          strArray={"Welcomes You".split("")}
          idx={30}
        />
      </h1>
      <br/>
      <h2 className={doThisTextClass} ref={doThisRef}>{doThisText}</h2>

      <p className="sub-text">
        What are you still waiting for?
      </p>
      <br />
      <div className="hero-btn-container">
        <div className="spinner" ref={spinnerRef}>
          <div className="btn-1" onClick={handleClickScroll}>Listen</div>
          <div className="btn-2">Watch</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
