import React, { useState } from "react";
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
import PodcastsIcon from "@mui/icons-material/Podcasts";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { FaTiktok } from "react-icons/fa";
import DrawerComp from "./DrawerComp";
import "../../static/css/index.css";
import LoadingSpinner from "./LoadingSpinner";

const Header = () => {
  const navigate = useNavigate();
  const pages = ["Home", "Podcasts", "Team", "Contact us"];
  const links = [
    "/",
    "/podcast",
    "/team",
    "/contact",
    "https://twitter.com/Voice_Of_Peter?s=09",
    "https://www.facebook.com/sonofliterature?mibextid=ZbWKwL",
    "https://youtube.com/@VOP1111",
    "https://www.tiktok.com/@voice_of_peter?_r=1&_d=e3j55hjekigjkj&language=en&sec_uid=MS4wLjABAAAAs-VG5Pg04fVW3ThhGBMISMouxYLseXJy5u-J2i2ZPCmsis6ob-l10SP389taG9br&share_author_id=7140575072112362501&source=h5_m&u_code=e3j56a6m5jldhl&timestamp=1673473476&user_id=7140575072112362501&sec_user_id=MS4wLjABAAAAs-VG5Pg04fVW3ThhGBMISMouxYLseXJy5u-J2i2ZPCmsis6ob-l10SP389taG9br&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7175776428368709381&share_link_id=f2b4221e-0dd9-4ad7-b28b-555fc9394f11&share_app_id=1233&ugbiz_name=Account&ug_btm=b8727%2Cb4907",
  ];
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const navigateTo = (index) => {
    if (index > 3) {
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
    <div className="Header">
      <LoadingSpinner isLoading={isLoading} />
      <AppBar sx={{ background: "#2f4f4f" }}>
        <Toolbar>
          <Typography>The Rez Issues</Typography>
          {isMatch ? (
            <>
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
                <TwitterIcon />
              </IconButton>
              <IconButton
                sx={{ marginLeft: "3px" }}
                size="large"
                color="inherit"
                onClick={() => navigateTo(5)}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{ marginLeft: "6px" }}
                size="large"
                color="inherit"
                onClick={() => navigateTo(6)}
              >
                <YouTubeIcon />
              </IconButton>
              <IconButton
                sx={{ marginLeft: "6px" }}
                size="large"
                color="inherit"
                onClick={() => navigateTo(7)}
              >
                <FaTiktok />
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
