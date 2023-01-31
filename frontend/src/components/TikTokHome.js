import { Grid, Typography, Container } from "@mui/material";
import Box from "@mui/material/Box";

import React from "react";
import "../../static/css/home.css";

function TikTokHome() {
  return (
    <>
      <Grid className="tiktok-home" container spacing={8}>
        <Grid item xs={12} md={6} justifyContent="center">
          <Box
            mt={5}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{ height: "570px" }}
          >
            <Typography align="center" variant="h3">
              Lorem Ipsum is simply dummy textd
            </Typography>
            <Typography align="center" variant="body1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.{" "}
            </Typography>
          </Box>
        </Grid>
        <Grid container xs={12} md={6} justifyContent="center" alignItems="center">
          <Box
          className="tiktok--container"
            sx={{
              width: 500,
              height: 800,
            }}
          >
            {/* <TikTok url="https://www.tiktok.com/@voice_of_peter/video/7181034494705667334?is_from_webapp=1&sender_device=pc&web_id=7150185139111593478" /> */}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default TikTokHome;
