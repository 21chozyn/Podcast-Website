import React, { useState, useEffect, } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import "../css/teamPage.css"
import LoadingSpinner from "./LoadingSpinner"

import TeamMemberComp from "./TeamMemberComp";

const TeamPage = () => {
  const initialMembers = [
    {
      name: "Chozyn",
      aboutText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
      picture: "/static/images/avatar1.jpg",
      pictureThumb:"http://127.0.0.1:8000/media/default.png"
    },
  ];
  const [teamMembers, setTeamMembers] = useState(
    initialMembers
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://54.89.27.89:8000/api/team`)
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
      {loading && <LoadingSpinner />}
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
          <Grid key={index} item xs={6}>
          <TeamMemberComp key={index} name={member.name} aboutText={member.aboutText} picture={member.pictureThumb}/>
        </Grid>
        ))}
      </Grid>
      <br/>
      <br/>
      <br/>
    </React.Fragment>
  );
};

export default TeamPage;
