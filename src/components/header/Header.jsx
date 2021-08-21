import React from "react";
import "./header.css";
import dog from "./videos/DogVid2.mp4";

function Header() {
  return (
    <div className="header">
      <div className="heading-container">
        <h1>BEST TRAINING</h1>
        <h1>FOR</h1>
        <h1>BEST FRIEND</h1>
      </div>
      <div className="video-container">
        <video id="background-video" loop={true} autoPlay={true} muted={true}>
          <source src={dog} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Header;
