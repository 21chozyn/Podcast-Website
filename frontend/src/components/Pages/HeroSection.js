import React from "react";
import { Typography, Button } from "@mui/material";
import "../../../static/css/HeroSection.css";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";


const HeroSection = () => {
  const handleClickScroll = () => {
    const element = document.getElementById('podcastSection');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView( { align:true, behavior: 'smooth' });
    }
  };
  return (
    <div className="hero-container">
      <Typography
        align="center"
        sx={{fontWeight:"bold", typography: { md: "h1", sm: "h2", xs: "h3" } }}
        color="common.white"
      >
        Listen to the latest UZ stories
      </Typography>
      <Typography
        align="center"
        sx={{ typography: { md: "h4", sm: "h5", xs: "h6" } }}
        color="common.white"
      >
        What are you still waiting for?
      </Typography>
      <br />
      <div className="hero--btn--div">
        <Button
          className="hero--btn"
          endIcon={<ExpandCircleDownIcon/>}
          variant="contained"
          onClick={handleClickScroll}
          sx={{
            color: "#2f4f4f",
            backgroundColor: "#fff",
            "&:hover": { backgroundColor: "#2f4f4f", color:"white"},
          }}
        >
          listen
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
