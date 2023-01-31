import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { Avatar } from "@mui/material";

const TeamMember = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          columns={{ xs: 3, sm: 6, md: 9, lg: 12 }}
        >
          <Grid item xs={4}>
            <Avatar
              src={`/static/images/avatar1.jpg`}
              sx={{ width: 180, height: 180 }}
            />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h3" gutterBottom align="left">
              Chozyn
            </Typography>
            <Typography variant="body2" gutterBottom>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TeamMember;
