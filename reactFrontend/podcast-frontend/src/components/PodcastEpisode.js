import React from "react";
import "../css/home.scss";
import {
  Grid,
  Paper,
  ButtonBase,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useAudio } from "./audio-hooks";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

function PodcastEpisode(props) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const {
    setAudioSrc,
    setCoverArt,
    setIsPlaying,
  } = useAudio();

  return (
    <Paper
      sx={{
        p: 2,
        backgroundColor: "#136f73",
        width: "100%",
        maxHeight: 150,
        flexGrow: 1,
        boxShadow: "0 0 15px lightyellow",
      }}
    >
      <Grid container spacing={1} direction="row">
        <Grid item className="cover-art" xs={3}>
          {isMatch ? (
            <ButtonBase
              sx={{ width: 100, height: 100 }}
              onClick={() => {
                setAudioSrc(props.audio);
                setCoverArt(props.imgSrc);
                setIsPlaying(true);

              }}
            >
              <Img src={props.imgSrc} />
            </ButtonBase>
          ) : (
            <ButtonBase
              sx={{ width: 140, height: 140 }}
              onClick={() => {
                setAudioSrc(props.audio);
                setCoverArt(props.imgSrc);
                setIsPlaying(true);
              }}
            >
              <Img src={props.imgSrc} />
            </ButtonBase>
          )}
        </Grid>
        {isMatch ? (
          <Grid
            item
            className="podcast--text"
            xs={9}
            container
            direction="column"
          >
            <Grid item className="podcast--title">
              <h4>{props.title}</h4>
            </Grid>
            <Grid item className="podcast--info--text">
              <p> {props.infoText}</p>
            </Grid>
            <Grid item className="listen--btn">
              <div
                onClick={() => {
                  setAudioSrc(props.audio);
                  setCoverArt(props.imgSrc);
                  setIsPlaying(true);
                }}
                className="listennow-btn"
              >
                <p>Listen now</p>
              </div>
            </Grid>
          </Grid>
        ) : (
          <Grid
            item
            className="podcast--text"
            xs={9}
            container
            direction="column"
          >
            <Grid item className="podcast--title">
              <h4>{props.title}</h4>
            </Grid>
            <Grid item className="podcast--info--text">
              <p> {props.infoText}</p>
            </Grid>
            <Grid item className="listen--btn">
              <div
                className="listennow-btn"
                onClick={() => {
                  setAudioSrc(props.audio);
                  setCoverArt(props.imgSrc);
                  setIsPlaying(true);
                }}
              >
                <p>Listen now</p>
              </div>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
}

export default PodcastEpisode;
