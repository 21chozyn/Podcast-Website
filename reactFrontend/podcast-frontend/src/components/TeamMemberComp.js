import { Grid, Typography } from "@mui/material";
import React from "react";
import { Avatar } from "@mui/material";

const TeamMemberComp = (props) => {
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
            <Avatar src={props.picture} sx={{ width: 180, height: 180 }} />
          </Grid>
          <Grid item xs={8}>
            <h2> {props.name}</h2>
            <p>
              {props.aboutText}
            </p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TeamMemberComp;
