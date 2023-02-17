//this is the navigation bar for the podcasts themselves

import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import "../css/home.css";

function PodcastNavBar() {
  const myTabs = ["ALL PODCASTS"];
  const [value, setValue] = useState(0);
  return (
    <div className="navbar--section">
      <AppBar
        className="navbar--container"
        sx={{ background: "black" }}
        position="relative"
      >
        <Toolbar className="tabs--container">
          <Tabs
            textColor="inherit"
            value={value}
            onChange={(e, value) => setValue(value)}
            indicatorColor="secondary"
          >
            {myTabs.map((myTab, index) => (
              <Tab
                key={index}
                label={myTab}
                // onClick=
              ></Tab>
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default PodcastNavBar;
