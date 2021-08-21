import React from "react";
import "./blogs.css";

function Blogs() {
  const card = (locale) => {
    let date = new Date();
    let day = date.toLocaleDateString(locale, { weekday: "long" });
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return (
      <div className="card">
        <img
          className="blog-image"
          src="https://media.nature.com/lw800/magazine-assets/d41586-020-01430-5/d41586-020-01430-5_17977552.jpg"
          alt="blog-pic"
        />
        <div className="card-desc">
          <p className="blog-title">Blog Title</p>
          <p className="blog-date">{day + "," + month + "," + year}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="blogs">
      {card()}
      {card()}
      {card()}
      {card()}
      {card()}
      {card()}
      {card()}
      {card()}
      {card()}
      {card()}
    </div>
  );
}

export default Blogs;
