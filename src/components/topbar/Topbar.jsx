import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

function Topbar() {
  return (
    <div className="topbar">
      <nav className="navbar">
        <ul className="navItems">
          <li className="item">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="item">
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li className="item">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Topbar;
