import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import DrawerComp from "./DrawerComp";
import "../css/index.scss";

const Header = () => {
  const navigate = useNavigate();
  const pages = ["Home", "Team", "Contact us"];
  const links = [
    "/",
    "/team",
    "/contact",
    "https://twitter.com/Voice_Of_Peter?s=09",
    "https://www.facebook.com/sonofliterature?mibextid=ZbWKwL",
    "https://youtube.com/@VOP1111",
    "https://www.tiktok.com/@voice_of_peter?_r=1&_d=e3j55hjekigjkj&language=en&sec_uid=MS4wLjABAAAAs-VG5Pg04fVW3ThhGBMISMouxYLseXJy5u-J2i2ZPCmsis6ob-l10SP389taG9br&share_author_id=7140575072112362501&source=h5_m&u_code=e3j56a6m5jldhl&timestamp=1673473476&user_id=7140575072112362501&sec_user_id=MS4wLjABAAAAs-VG5Pg04fVW3ThhGBMISMouxYLseXJy5u-J2i2ZPCmsis6ob-l10SP389taG9br&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7175776428368709381&share_link_id=f2b4221e-0dd9-4ad7-b28b-555fc9394f11&share_app_id=1233&ugbiz_name=Account&ug_btm=b8727%2Cb4907",
  ];
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [headerColor, setHeaderColor] = useState({
    color: "transparent",
    fontColor: "white",
  });
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    window.onscroll = () =>
    window.pageYOffset === 0 && window.location.pathname === "/"
        ? setHeaderColor({ color: "transparent", fontColor: "white" })
        : setHeaderColor({ color: "white", fontColor: "black" });
    return () => (window.onscroll = null);
  });

  const navigateTo = (index) => {


    if (index > 2) {
      window.open(links[index], "_blank", "noreferrer");
      return;
    } else {
      setIsLoading(true);
      window.setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      navigate(links[index]);
    }
  };

  return (
    <>
      <div className="Header">
        {/* <LoadingSpinner isLoading={isLoading} /> */}
        <AppBar
          sx={{
            backgroundColor: headerColor.color,
            color: headerColor.fontColor,
          }}
        >
          <Toolbar>
            {isMatch ? (
              <>
                {/* <AudioPlayer inHeader={true} /> */}
                <Typography sx={{color:"#9c27b0"}}>The Rez Issues</Typography>
                <DrawerComp drawerClose={navigateTo} />
              </>
            ) : (
              <>
                <Tabs
                  textColor="inherit"
                  value={value}
                  onChange={(e, value) => setValue(value)}
                  indicatorColor="secondary"
                >
                  {pages.map((page, index) => (
                    <Tab
                      key={index}
                      label={page}
                      onClick={() => navigateTo(index)}
                    ></Tab>
                  ))}
                </Tabs>
                <IconButton
                  sx={{ marginLeft: "auto" }}
                  size="large"
                  color="inherit"
                  onClick={() => navigateTo(4)}
                >
                  <TwitterIcon sx={{ color: "rgb(29 161 242)" }} />
                </IconButton>
                <IconButton
                  sx={{ marginLeft: "3px" }}
                  size="large"
                  color="inherit"
                  onClick={() => navigateTo(5)}
                >
                  <FacebookIcon sx={{ color: "rgb(66 103 178)" }} />
                </IconButton>
                <IconButton
                  sx={{ marginLeft: "6px" }}
                  size="large"
                  color="inherit"
                  onClick={() => navigateTo(6)}
                >
                  <YouTubeIcon sx={{ color: "red" }} />
                </IconButton>
                <IconButton
                  sx={{ marginLeft: "6px" }}
                  size="large"
                  color="inherit"
                  onClick={() => navigateTo(7)}
                >
                  <MusicNoteIcon />
                </IconButton>
              </>
            )}
          </Toolbar>
        </AppBar>
      </div>

      {/* <Player /> */}
      {/* <AudioPlayer inHeader={false}/> */}
    </>
  );
};

export default Header;
