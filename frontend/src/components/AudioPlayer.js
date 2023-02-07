import React, { useState, useRef, useEffect } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import "../../static/css/audioPlayer.css";

function AudioPlayer(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioPlayer = useRef(); //reference audio component
  const progressBar = useRef(); //reference to progress bar
  const animationRef = useRef(); //reference the animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration); //this is to change the float values to integers
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  useEffect(() => {
    togglePlayPause();
  }, [audioPlayer?.current?.canplay]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60); //to change to minutes in integers
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`; //to display the minutes as 05
    const seconds = Math.floor(secs % 60);
    const returnedSecs = seconds < 10 ? `0${seconds}` : `${seconds}`; //to change the seconds tp :06 format
    return `${returnedMinutes}:${returnedSecs}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };
  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value; // to update the time on the audio depending on the progress bar
    changePlayerCurrentTime();
  };
  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    ); //to update the seek before width color
    setCurrentTime(progressBar.current.value);
  };
  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value) - 30;
    changeRange();
  };
  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value) + 30;

    changeRange();
  };

  return (
    <div className="audio--player">
      <audio
        ref={audioPlayer}
        src={props.audioSrc}
        preload="metadata"
        autoPlay
      ></audio>
      <div className="cover--art">
        <img src={props.coverArt} />
      </div>
      <button className="forward--backward" onClick={backThirty}>
        <ArrowBackIosNewIcon />
        <p>30s</p>
      </button>
      <button className="play--pause" onClick={togglePlayPause}>
        {isPlaying ? (
          <PauseCircleOutlineIcon sx={{ width: "100%", height: "100%" }} />
        ) : (
          <PlayCircleOutlineIcon sx={{ width: "110%", height: "110%" }} />
        )}
      </button>
      <button className="forward--backward" onClick={forwardThirty}>
        <p>30s</p>
        <ArrowForwardIosIcon />
      </button>
      {/* props.inpage is to render components that should not be rendered in the header */}
      <div className="current--time"> {calculateTime(currentTime)}</div>

      {/* progress bar */}
      <div className="progress--bar--wrapper">
        <input
          type="range"
          className="progress--bar"
          defaultValue="0"
          ref={progressBar}
          onChange={changeRange}
        ></input>
      </div>

      <div className="duration">
        {isNaN(duration) ? "00:00" : calculateTime(duration)}
      </div>
    </div>
  );
}

export default AudioPlayer;
