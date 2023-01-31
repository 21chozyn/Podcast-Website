import { Box, SliderMark, Typography } from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";

import TeamMember from "../TeamMemberComp";

const Team = () => {
  return (
    <React.Fragment>
      <Grid container rowSpacing={7} columnSpacing={2} sx={{ flexGrow: 1 ,paddingTop:5}}>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h1" gutterBottom>
            Our Team
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TeamMember />
        </Grid>
        <Grid item xs={6}>
          <TeamMember />
        </Grid>        
        <Grid item xs={6}>
          <TeamMember />
        </Grid>        
        <Grid item xs={6}>
          <TeamMember />
        </Grid>        
        <Grid item xs={6}>
          <TeamMember />
        </Grid>        
      </Grid>
    </React.Fragment>
  );
};

export default Team;
