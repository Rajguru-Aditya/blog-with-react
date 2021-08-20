import React from "react";
import "./topbar.css";

function Topbar() {
  return (
    <div className="topbar">
      <nav className="navbar">
        <ul className="navItems">
          <li className="item">Home</li>
          <li className="item">About</li>
          <li className="item">Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Topbar;
