import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <ul className="footerItems">
          <li className="item">
            <i className="fab fa-instagram"></i>
          </li>
          <li className="item">
            <i className="fab fa-facebook-square"></i>
          </li>
          <li className="item">
            <i className="fab fa-twitter"></i>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
