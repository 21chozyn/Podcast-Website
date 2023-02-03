import { Box, SliderMark, Typography } from "@mui/material";
import React, { useState, useEffect, } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import "../../../static/css/teamPage.css"

import TeamMember from "../TeamMemberComp";

const Team = () => {
  const initialMembers = [
    {
      name: "Chozyn",
      aboutText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
      picture: "/static/images/avatar1.jpg",
    },
  ];
  const [teamMembers, setTeamMembers] = useState(
    initialMembers
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/team`)
      .then((response) => response.json())
      .then((usefulData) => {
        setLoading(false);
        setTeamMembers(usefulData);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`);
      });
  }, []);
  
  return (
    <React.Fragment>
      <Grid
        container
        rowSpacing={7}
        columnSpacing={2}
        sx={{ flexGrow: 1, padding: 5 }}
      >
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <h1 id="team--title">
            Our Team
          </h1>
        </Grid>
        {teamMembers.map((member,index)=>(
          <Grid item xs={6}>
          <TeamMember name={member.name} aboutText={member.aboutText} picture={member.picture}/>
        </Grid>
        ))}
      </Grid>
      <br/>
      <br/>
      <br/>
    </React.Fragment>
  );
};

export default Team;
