import React, { useState, useEffect, useRef } from "react";
import { styled, Typography, Slider, Paper, Stack, Box } from "@mui/material";

// #region ------------ ICONS ---------
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";

import PauseIcon from "@mui/icons-material/Pause";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import FastForwardIcon from "@mui/icons-material/FastForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "../images/defaultCover.jpg"

// #region -------- Styled Components -----------------------------------------
const CustomPaper = styled(Paper)(({ theme }) => ({
  marginLeft: theme.spacing(6),
  marginRight: theme.spacing(6),
  padding: theme.spacing(2),
}));

const PSlider = styled(Slider)(({ theme, ...props }) => ({
  color: "#8c1f85",
  height: 2,
  "&:hover": {
    cursor: "auto",
  },
  "& .MuiSlider-thumb": {
    width: "13px",
    height: "13px",
    display: props.thumbless ? "none" : "block",
  },
}));
// #endregion ---------------------------------------------------------------

export default function Player() {

  const audioPlayer = useRef();

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(30);
  const [mute, setMute] = useState(false);

  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioSrc, setAudioSrc] = useState("../../static/audio/audio1.mp3");
  const [coverArt, setCoverArt] = useState(
    "../images/defaultCover.jpg"
  );
  
  useEffect(() => {
    if (window.localStorage.getItem("browserCoverArt") === null) {
      setAudioSrc("../../static/audio/audio1.mp3");
      setCoverArt("../images/defaultCover.jpg");
    }
    setAudioSrc(window.localStorage.getItem("browserAudioSrc"));
    setCoverArt(window.localStorage.getItem("browserCoverArt"));
  }, [window.localStorage.getItem("browserAudioSrc")]);

  useEffect(() => {
    if (audioPlayer) {
      audioPlayer.current.volume = volume / 100;
    }

    if (isPlaying) {
      setInterval(() => {
        const _duration = Math.floor(audioPlayer?.current?.duration);
        const _elapsed = Math.floor(audioPlayer?.current?.currentTime);

        setDuration(_duration);
        setElapsed(_elapsed);
      }, 100);
    }
  }, [volume, isPlaying]);

  function formatTime(time) {
    if (time && !isNaN(time)) {
      const minutes =
        Math.floor(time / 60) < 10
          ? `0${Math.floor(time / 60)}`
          : Math.floor(time / 60);
      const seconds =
        Math.floor(time % 60) < 10
          ? `0${Math.floor(time % 60)}`
          : Math.floor(time % 60);

      return `${minutes}:${seconds}`;
    }
    return "00:00";
  }

  const togglePlay = () => {
    if (!isPlaying) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
    setIsPlaying((prev) => !prev);
  };

  const toggleForward = () => {
    audioPlayer.current.currentTime += 10;
  };

  const toggleBackward = () => {
    audioPlayer.current.currentTime -= 10;
  };

  function VolumeBtns() {
    return mute ? (
      <VolumeOffIcon
        sx={{ color: "#8c1f85", "&:hover": { color: "#d1a9ce" } }}
        onClick={() => setMute(!mute)}
      />
    ) : volume <= 20 ? (
      <VolumeMuteIcon
        sx={{ color: "#8c1f85", "&:hover": { color: "#d1a9ce" } }}
        onClick={() => setMute(!mute)}
      />
    ) : volume <= 75 ? (
      <VolumeDownIcon
        sx={{ color: "#8c1f85", "&:hover": { color: "#d1a9ce" } }}
        onClick={() => setMute(!mute)}
      />
    ) : (
      <VolumeUpIcon
        sx={{ color: "#8c1f85", "&:hover": { color: "#d1a9ce" } }}
        onClick={() => setMute(!mute)}
      />
    );
  }

  return (
    
    <>
      <audio src={audioSrc} ref={audioPlayer} muted={mute} autoPlay/>
      <CustomPaper

        sx={{         
          backgroundImage: `url(${coverArt})`,

        }}
      >
          <Box sx={{ display: "flex", justifyContent: "space-between" ,height:"10vh"}}>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                width: "25%",
                alignItems: "center",
              }}
            >
              <VolumeBtns />

              <PSlider
                min={0}
                max={100}
                value={volume}
                onChange={(e, v) => setVolume(v)}
              />
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              sx={{
                display: "flex",
                width: "50%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FastRewindIcon
                sx={{ color: "#8c1f85", "&:hover": { color: "white" } }}
                onClick={toggleBackward}
              />

              {!isPlaying ? (
                <PlayArrowIcon
                  fontSize={"large"}
                  sx={{ color: "#8c1f85", "&:hover": { color: "white" } }}
                  onClick={togglePlay}
                />
              ) : (
                <PauseIcon
                  fontSize={"large"}
                  sx={{ color: "#8c1f85", "&:hover": { color: "white" } }}
                  onClick={togglePlay}
                />
              )}

              <FastForwardIcon
                sx={{ color: "#8c1f85", "&:hover": { color: "white" } }}
                onClick={toggleForward}
              />
            </Stack>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                width: "25%",
                alignItems: "center",
              }}
            >
              <div className="cover--art" style={{maxWidth:"75px", maxHeight:"75px"}}>
                <img src={coverArt} style={{maxHeight: "100%" ,maxWidth:"100%"}} alt="cover art" />
              </div>
            </Stack>
          </Box>
          <Stack
            spacing={1}
            direction="row"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography sx={{ color: "#8c1f85" }}>
              {formatTime(elapsed)}
            </Typography>
            <PSlider thumbless value={elapsed} max={duration} />
            <Typography sx={{ color: "#8c1f85" }}>
              {formatTime(duration - elapsed)}
            </Typography>
          </Stack>
      </CustomPaper>
    </>
  );
}
