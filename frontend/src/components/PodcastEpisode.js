import React from "react";
import "../../static/css/home.css";
import {
  Grid,
  Paper,
  Typography,
  ButtonBase,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { width } from "@mui/system";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

function PodcastEpisode(props) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 900,
        maxHeight: 150,
        flexGrow: 1,
      }}
    >
      <Grid container spacing={1} direction="row">
        <Grid item className="cover-art" xs={3}>
          {isMatch ? (
            <ButtonBase
              sx={{ width: 100, height: 100 }}
              onClick={() => {
                window.localStorage.setItem("browserAudioSrc", props.audio);
                window.localStorage.setItem("browserCoverArt", props.imgSrc);
              }}
            >
              <Img src={props.imgSrc} />
            </ButtonBase>
          ) : (
            <ButtonBase
              sx={{ width: 140, height: 140 }}
              onClick={() => {
                window.localStorage.setItem("browserAudioSrc", props.audio);
                window.localStorage.setItem("browserCoverArt", props.imgSrc);
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
              <Typography gutterBottom variant="h6" fontSize={13}>
                {props.title}
              </Typography>
            </Grid>
            <Grid item className="podcast--info--text">
              <Typography gutterBottom variant="body2" fontSize={11}>
                {props.infoText}
              </Typography>
            </Grid>
            <Grid item className="listen--btn">
              <div onClick={() => props.callback(props.audio)}>
                <Typography
                  fontSize={11}
                  gutterBottom
                  variant="subtitle2"
                  sx={{ cursor: "pointer" }}
                >
                  Listen now
                </Typography>
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
              <Typography gutterBottom variant="h6">
                {props.title}
              </Typography>
            </Grid>
            <Grid item className="podcast--info--text">
              <Typography gutterBottom variant="body2">
                {props.infoText}
              </Typography>
            </Grid>
            <Grid item className="listen--btn">
              <div onClick={() => props.callback(props.audio)}>
                <Typography
                  gutterBottom
                  variant="subtitle2"
                  sx={{ cursor: "pointer" }}
                >
                  Listen now
                </Typography>
              </div>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
}

export default PodcastEpisode;
