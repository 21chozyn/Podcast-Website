import { Box, Typography, TextField, Grid, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, { useRef, useState, useReducer } from "react";

import Loader from 'react-loaders';

const Contact = () => {
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const [valid, setValid] = useState(false);

  const nameTxtBox = useRef();
  const emailAddressTxtBox = useRef();
  const subjectTxtBox = useRef();
  const messageTxtBox = useRef();
  const handleSend = () => {
    window.Email.send({
      Host: "smtp.elasticemail.com",
      Username: "panashemhondeh@gmail.com",
      Password: "4C6F004B4FB3675A0BBA9BEB5BEC6597884C",
      To: "21chozynyadigg@gmail.com",
      From: "panashemhondeh@gmail.com",
      Subject: subjectTxtBox.current.value,
      Body: `Name: ${nameTxtBox.current.value} \nE-mail-Addrress: ${emailAddressTxtBox.current.value} \n\n${messageTxtBox.current.value}`,
    })
      .then((message) => alert("Message sent successfully"))
      .then();
    nameTxtBox.current.value = "";
    emailAddressTxtBox.current.value = "";
    messageTxtBox.current.value = "";
    subjectTxtBox.current.value = "";
  };
  const attributes = [
    {
      error: false,
      helperText: "",
    },
    {
      error: false,
      helperText: "",
    },
    {
      error: false,
      helperText: "",
    },
    {
      error: false,
      helperText: "",
    },
  ];
  const [validateAttrib, setValidateAttrib] = useState(attributes);
  const validate = (index, textboxRef) => {
    const curAttributes = validateAttrib;
    if (index === 0 && textboxRef.current.value.length < 5) {
      curAttributes[index].error = true;
      curAttributes[index].helperText =
        "Name can not be less than 4 characters";
      setValidateAttrib(curAttributes);
      setValid(false);
      forceUpdate();
      return;
    }
    if (
      index === 0 &&
      !textboxRef.current.value.match(/^[a-zA-Z]+ [a-zA-Z]+$/)
    ) {
      curAttributes[index].error = true;
      curAttributes[index].helperText =
        "Please enter your name in the format: First Name + Last Name";
      setValidateAttrib(curAttributes);
      setValid(false);
      forceUpdate();
      return;
    }

    if (index === 1 && textboxRef.current.value.length === 0) {
      curAttributes[index].error = true;
      curAttributes[index].helperText = "E-mail can not be empty.";
      setValidateAttrib(curAttributes);
      setValid(false);
      forceUpdate();
      return;
    }
    if (
      index === 1 &&
      !textboxRef.current.value.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)
    ) {
      curAttributes[index].error = true;
      curAttributes[index].helperText = "Please enter valid E-mail address.";
      setValidateAttrib(curAttributes);
      setValid(false);
      forceUpdate();
      return;
    }
    if (index === 2 && textboxRef.current.value.length === 0) {
      curAttributes[index].error = true;
      curAttributes[index].helperText = "E-mail subject can not be empty.";
      setValidateAttrib(curAttributes);
      setValid(false);
      forceUpdate();
      return;
    }
    if (index === 3 && textboxRef.current.value.length < 10) {
      curAttributes[index].error = true;
      curAttributes[index].helperText = "Please write a longer mail.";
      setValidateAttrib(curAttributes);
      setValid(false);
      forceUpdate();
      return;
    }
    curAttributes[index].error = false;
    curAttributes[index].helperText = "";
    setValidateAttrib(curAttributes);
    if (
      nameTxtBox.current.value !== "" &&
      emailAddressTxtBox.current.value !== "" &&
      messageTxtBox.current.value !== "" &&
      subjectTxtBox.current.value !== ""
    ) {
      setValid(true);
    }

    forceUpdate();
  };
  return (
    <React.Fragment>
      <Grid container spacing={2} mt={7} display="flex">
        <Grid item xs={12} md={6}>
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
                inputRef={nameTxtBox}
                onChange={() => {
                  validate(0, nameTxtBox);
                }}
                {...validateAttrib[0]}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="emailAddress"
                label="Email Address"
                variant="filled"
                inputRef={emailAddressTxtBox}
                onChange={() => {
                  validate(1, emailAddressTxtBox);
                }}
                {...validateAttrib[1]}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="subject"
                label="Subject"
                variant="filled"
                inputRef={subjectTxtBox}
                onChange={() => {
                  validate(2, subjectTxtBox);
                }}
                {...validateAttrib[2]}
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
                inputRef={messageTxtBox}
                onChange={() => {
                  validate(3, messageTxtBox);
                }}
                {...validateAttrib[3]}
              />
            </Grid>
            <br />
            <Button
              variant="contained"
              disabled={!valid}
              endIcon={<SendIcon />}
              sx={{
                backgroundColor: "#2f4f4f",
                "&:hover": { backgroundColor: "#fff", color: "#2f4f4f" },
              }}
              onClick={handleSend}
            >
              Send Message
            </Button>
            <Grid container></Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />
      <br />
      <Loader type="line-spin-fade-loader" />
    </React.Fragment>
  );
};
export default Contact;
