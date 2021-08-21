import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about-img-con">
        <img
          className="about-img"
          src="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
          alt="Dog Trainer"
        />
      </div>

      <div className="about-container">
        <h1 className="about-title">About Me</h1>
        <p className="about-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          odio repellat a ut quos, eligendi vitae ducimus rerum soluta ipsa,
          nostrum doloribus autem id voluptatum? Provident vel, ut obcaecati
          eaque, delectus libero aspernatur voluptate porro, odio neque quas
          iste cupiditate at soluta molestiae nisi quod quibusdam molestias quos
          iure. Rerum reiciendis a esse exercitationem quam ullam, sunt
          aspernatur. Dicta ea ratione a, maiores fugit enim? Accusamus aut ex,
          excepturi autem asperiores totam dolor accusantium quasi optio quidem
          id quisquam quam recusandae voluptatum quos ipsa aliquam
          exercitationem quo voluptas eos. Dignissimos nesciunt in enim dolor,
          necessitatibus eum tempore possimus consequuntur expedita!
        </p>
        <div className="my-social">
          <img
            className="social-icon"
            src="https://image.flaticon.com/icons/png/512/2111/2111463.png"
            alt="Instagram"
          />
          <img
            className="social-icon"
            src="https://image.flaticon.com/icons/png/512/145/145802.png"
            alt="Instagram"
          />
          <img
            className="social-icon"
            src="https://image.flaticon.com/icons/png/512/145/145812.png"
            alt="Instagram"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
