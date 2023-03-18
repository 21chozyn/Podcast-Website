import React, { useEffect, useRef, useState } from "react";
import "./index.scss";

const Tip = ({ tip }) => {
  const tipRef = useRef();
  const [display, setDisplay] = useState("initial");

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setDisplay("none");
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
  useOutsideAlerter(tipRef)
  return (

    <div id="tip" ref={tipRef} style={{display: display}}>
      <p>Tip: {tip}</p>
    </div>
  );
};

export default Tip;
