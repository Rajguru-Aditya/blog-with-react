import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <ul className="footerItems">
          <li className="item">
            <i>
              <InstagramIcon className="icon" />
            </i>
          </li>
          <li className="item">
            <i>
              <FacebookIcon className="icon" />
            </i>
          </li>
          <li className="item">
            <i>
              <TwitterIcon className="icon" />
            </i>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
