import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IconButton, Typography, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { FaTiktok } from "react-icons/fa";

import "../../static/css/footer.css";

function Footer() {
  const navigateTo = (theLink) => {
    window.open(theLink, "_blank", "noreferrer");
  };

  return (
    <div className="footer-container">
      <section className="footer-subscription" color="white" >
        <Typography variant="h2" align="center" color="common.white">
          Join our Whatsapp community to recieve the latest news
        </Typography>
        <br/>
        <Typography variant="body1" align="center" color="common.white">
          Click on the Whatsapp icon to join
        </Typography>
        <br />
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <IconButton
            className="whatsapp-btn"
            sx={{ color: "white" }}
            size="large"
            color="inherit"
            onClick={() =>
              navigateTo(
                "https://wa.me/+263777474547?text=Hi I'd like to be added to your Whatsapp group"
              )
            }
          >
            <FaWhatsapp />
          </IconButton>
        </Stack>
      </section>
      <br/>
      <br/>
      <section className="footer-subscription">
        <Typography variant="h2" align="center" color="common.white">
          Why do we use it?
        </Typography>
        <br/>
        <Typography variant="body1" align="center" color="common.white">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here
        </Typography>
        <br/>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <IconButton
            sx={{ color: "white" }}
            size="large"
            color="primary"
            onClick={() =>
              navigateTo("https://twitter.com/Voice_Of_Peter?s=09")
            }
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            sx={{ color: "white" }}
            size="large"
            color="primary"
            onClick={() =>
              navigateTo(
                "https://www.facebook.com/sonofliterature?mibextid=ZbWKwL"
              )
            }
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            sx={{ color: "white" }}
            size="large"
            color="primary"
            onClick={() => navigateTo("https://youtube.com/@VOP1111")}
          >
            <YouTubeIcon />
          </IconButton>
          <IconButton
            sx={{ color: "white" }}
            size="large"
            onClick={() =>
              navigateTo(
                "https://www.tiktok.com/@voice_of_peter?_r=1&_d=e3j55hjekigjkj&language=en&sec_uid=MS4wLjABAAAAs-VG5Pg04fVW3ThhGBMISMouxYLseXJy5u-J2i2ZPCmsis6ob-l10SP389taG9br&share_author_id=7140575072112362501&source=h5_m&u_code=e3j56a6m5jldhl&timestamp=1673473476&user_id=7140575072112362501&sec_user_id=MS4wLjABAAAAs-VG5Pg04fVW3ThhGBMISMouxYLseXJy5u-J2i2ZPCmsis6ob-l10SP389taG9br&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7175776428368709381&share_link_id=f2b4221e-0dd9-4ad7-b28b-555fc9394f11&share_app_id=1233&ugbiz_name=Account&ug_btm=b8727%2Cb4907"
              )
            }
          >
            <FaTiktok />
          </IconButton>
        </Stack>
      </section>
    </div>
  );
}

export default Footer;
