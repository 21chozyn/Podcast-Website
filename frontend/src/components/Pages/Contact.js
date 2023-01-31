import {
  Box,
  Typography,
  TextField,
  Grid,
  Container,
  Button,
  Stack,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, { Component, useState } from "react";

const Contact = () => {
  return (
    <React.Fragment>
      <Grid container spacing={2} mt={7} display="flex">
        <Grid item xs={12} md={6} >
          <Box
          mt={5}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"                 
          >
            <Typography variant="h3">Let's chat</Typography>
            <Typography variant="subtitle2" ml={5} mt={5}>
              We are always looking forward to your feedback, even if you just
              want to say HI.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid
            container
            columns={{ xs: 12 }}
            direction="column"
            alignItems="center"
            spacing={2}
            justifyContent="center"
            sx={{ "& .MuiTextField-root": { m: 1, width: "50ch" } }}
          >
            <Grid item xs={12}>
              <Typography variant="h4">Send us a message!</Typography>
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                id="fullName"
                label="Full Name"
                variant="filled"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="emailAddress"
                label="Email Address"
                variant="filled"
                color="warning"

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="subject"
                label="Subject"
                variant="filled"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="message"
                label="Message"
                variant="filled"
                multiline
                rows={5}
              />
            </Grid>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              sx={{
                backgroundColor: "#2f4f4f",
                "&:hover": { backgroundColor: "#fff", color: "#2f4f4f" },
              }}
            >
              Send Message
            </Button>
            <Grid container></Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />
      <br />
    </React.Fragment>
  );
};
export default Contact;
