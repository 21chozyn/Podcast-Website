import React, { useState, useEffect, useRef } from "react";
import { styled, Typography, Slider, Paper, Stack, Box } from "@mui/material";
import { useAudio } from "./audio-hooks";

import gsap from "gsap-trial";
// #region ------------ ICONS ---------
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import CircularProgress from "@mui/material/CircularProgress";
import PauseIcon from "@mui/icons-material/Pause";
import Replay30Icon from "@mui/icons-material/Replay30";
import Forward30Icon from "@mui/icons-material/Forward30";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "../images/defaultCover.jpg";

// #region -------- Styled Components -----------------------------------------
const CustomPaper = styled(Paper)(({ theme }) => ({
  marginLeft: theme.spacing(6),
  marginRight: theme.spacing(6),
  padding: theme.spacing(2),
}));

const PSlider = styled(Slider)(({ theme, ...props }) => ({
  color: "#dd1010",
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
  const { audioSrc, coverArt, isPlaying, setIsPlaying } = useAudio();
  const audioPlayer = useRef();
  const verticalVolumeBar = useRef();
  const actualVolumeRef = useRef();

  // const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(60);
  const [mute, setMute] = useState(false);

  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // console.log(audioPlayer.current.readyState)
  useEffect(() => {
    gsap.fromTo(
      actualVolumeRef.current,
      { height: "0px" },
      { height: `${(volume / 100) * 55}px`, duration: 1 }
    );
  }, [volume]);

  useEffect(() => {
    audioPlayer.current.play();
    if (audioPlayer.current.readyState === 0) {
      setIsLoading(true);
    }
  }, [audioSrc, setIsPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (audioPlayer.current.readyState === 4) {
        setIsLoading(false);
      }else {
        setIsLoading(true);
      }
    }, 500);
  
    return () => clearInterval(interval);
  }, []);


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

  function PlayPause() {
    return isLoading === true ? (
      <CircularProgress sx={{ color: "#dd1010", "&:hover": { color: "white" },cursor:"wait" }}
      />
    ) : isPlaying ? (
      <PauseIcon
        className="play-pause"
        fontSize={"large"}
        sx={{ color: "#dd1010", "&:hover": { color: "white" } }}
        onClick={togglePlay}
      />
    ) : (
      <PlayArrowIcon
        className="play-pause"
        fontSize="large"
        sx={{ color: "#dd1010", "&:hover": { color: "white" } }}
        onClick={togglePlay}
      />
    );
  }

  function VolumeBtns() {
    return mute ? (
      <VolumeOffIcon
        sx={{ color: "#dd1010", "&:hover": { color: "#d1a9ce" } }}
        onClick={() => setMute(!mute)}
      />
    ) : volume <= 20 ? (
      <VolumeMuteIcon
        sx={{ color: "#dd1010", "&:hover": { color: "#d1a9ce" } }}
        onClick={() => setMute(!mute)}
      />
    ) : volume <= 75 ? (
      <VolumeDownIcon
        sx={{ color: "#dd1010", "&:hover": { color: "#d1a9ce" } }}
        onClick={() => setMute(!mute)}
      />
    ) : (
      <VolumeUpIcon
        sx={{ color: "#dd1010", "&:hover": { color: "#d1a9ce" } }}
        onClick={() => setMute(!mute)}
      />
    );
  }

  function getPosition(e) {
    var rect = e.target.getBoundingClientRect();

    var y = e.clientY - rect.top;
    return {
      y,
    };
  }
  const handleVolumeChange = (e) => {
    var position = getPosition(e);
    var percent = Math.round(((55 - position.y) / 55) * 100);
    if (percent > 100) {
      percent = 100;
    }
    percent = Math.abs(percent);
    setVolume(percent);
  };
  return (
    <>
      <audio src={audioSrc} ref={audioPlayer} muted={mute} autoPlay={false} />
      <CustomPaper
        sx={{
          backgroundColor: "#cdcdcd",
          width: "100%",
          height: "100%",
          padding: 0,
          margin: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "10vh",
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{
              display: "inline-block",
              position: "absolute",
              width: "70px",
              height: "70px",
              left: "3px",
              top: "18px",
            }}
          >
            <VolumeBtns />
            <div
              className="volume-progress-bar"
              onClick={handleVolumeChange}
              ref={verticalVolumeBar}
              style={{
                backgroundColor: "white",
                position: "absolute",
                right: "2px",
                bottom: "30px",
                width: "30px",
                height: "55px",
                padding: 0,
                margin: 0,
                borderRadius: "5px",
                "&:hover": {
                  opacity: 0.7,
                },
              }}
            >
              <div
                ref={actualVolumeRef}
                style={{
                  backgroundColor: "#dd1010",
                  position: "absolute",
                  width: "100%",
                  bottom: 0,
                  borderRadius: "0 0 5px 5px",
                  boxSizing: "border-box",
                  transformOrigin: "bottom",
                }}
              ></div>
            </div>
          </Stack>

          <Stack
            direction="row"
            spacing={1}
            sx={{
              display: "flex",
              position: "absolute",
              top: "18px",
              left: "70px",
              width: "50%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Replay30Icon
              sx={{ color: "#dd1010", "&:hover": { color: "white" } }}
              onClick={toggleBackward}
            />

            <PlayPause />

            <Forward30Icon
              sx={{ color: "#dd1010", "&:hover": { color: "white" } }}
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
            <div
              className="cover--art"
              style={{
                maxWidth: "75px",
                maxHeight: "75px",
                position: "absolute",
                bottom: 5,
                right: 5,
              }}
            >
              <img
                src={coverArt}
                style={{ maxHeight: "100%", maxWidth: "100%" }}
                alt="cover art"
              />
            </div>
          </Stack>
        </Box>
        <Stack
          spacing={1}
          direction="row"
          sx={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
            bottom: "0",
            width: "70%",
            paddingLeft: "5px",
          }}
        >
          <Typography sx={{ color: "#dd1010", fontSize: "15px" }}>
            {formatTime(elapsed)}
          </Typography>
          <PSlider thumbless value={elapsed} max={duration} />
          <Typography sx={{ color: "#dd1010", fontSize: "15px" }}>
            {formatTime(duration - elapsed)}
          </Typography>
        </Stack>
      </CustomPaper>
    </>
  );
}
