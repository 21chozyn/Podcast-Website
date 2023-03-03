import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

import "../css/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="_footer section-padding">
        <div className="footer-links">
          <div className="links-div">
            <h4>The Rez Issues</h4>
            <a href="/">
              <p>Home</p>
            </a>
            <a href="/podcast">
              <p>Listen to podcasts</p>
            </a>
            <a href="/contact">
              <p>Contact us</p>
            </a>
          </div>

          <div className="links-div">
            <h4>Follow us on social media</h4>
            <div className="socialmedia">
              <p>
                <a
                  rel="noreferrer"
                  href="https://www.facebook.com/sonofliterature?mibextid=ZbWKwL"
                  target="_blank"
                >
                  <FacebookIcon sx={{ color: "rgb(66 103 178)" }}/>
                </a>
              </p>
              <p>
                <a
                  rel="noreferrer"
                  href="https://twitter.com/Voice_Of_Peter?s=09"
                  target="_blank"
                >
                  <TwitterIcon sx={{ color: "rgb(29 161 242)" }}/>
                </a>
              </p>
              <p>
                <a
                  rel="noreferrer"
                  href="https://youtube.com/@VOP1111"
                  target="_blank"
                >
                  <YouTubeIcon sx={{ color: "red" }} />
                </a>
              </p>
              <p>
                <a
                  rel="noreferrer"
                  href="https://www.tiktok.com/@voice_of_peter?_r=1&_d=e3j55hjekigjkj&language=en&sec_uid=MS4wLjABAAAAs-VG5Pg04fVW3ThhGBMISMouxYLseXJy5u-J2i2ZPCmsis6ob-l10SP389taG9br&share_author_id=7140575072112362501&source=h5_m&u_code=e3j56a6m5jldhl&timestamp=1673473476&user_id=7140575072112362501&sec_user_id=MS4wLjABAAAAs-VG5Pg04fVW3ThhGBMISMouxYLseXJy5u-J2i2ZPCmsis6ob-l10SP389taG9br&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7175776428368709381&share_link_id=f2b4221e-0dd9-4ad7-b28b-555fc9394f11&share_app_id=1233&ugbiz_name=Account&ug_btm=b8727%2Cb4907"
                  target="_blank"
                >
                  <MusicNoteIcon />
                </a>
                
              </p>
              <p>
                  <a
                    rel="noreferrer"
                    href="https://api.whatsapp.com/send?phone=263777474547&text=Hi%20I%20would%20like%20to%20be%20added%20to%20your%20whatsapp%20community"
                    target="_blank"
                  >
                    <WhatsAppIcon sx={{ color: "#34B7F1" }} />
                  </a>
                </p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="footer-below">
          <div className="footer-copyright">
            <p>@{new Date().getFullYear()} The Rez. All rights reserved</p>
          </div>
          <div className="footer-below-links">
            <a href="/terms">
              <div>
                <p>Terms & conditions</p>
              </div>
            </a>
            <a href="/terms">
              <div>
                <p>Terms & conditions</p>
              </div>
            </a>
            <a href="/terms">
              <div>
                <p>Terms & conditions</p>
              </div>
            </a>
            <a href="/terms">
              <div>
                <p>Terms & conditions</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
