import React, { useState } from "react";
import {LetsConnect} from "../Components";
import Lottie from "react-lottie-player";
import animationData from "./Lotties/person-coding.json";
import { aboutMe } from "../Assets";
import "./Stylings/Hero.css";

// Lottie animation configuration
const defaultOptions = {
  loop: true,
  play: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Hero = () => {
  const [isPaused, setIsPaused] = useState(false);

  const toggleAnimation = () => {
    setIsPaused((prev) => !prev); 
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-text">
        <div className="hero-intro">
          <h1 className="hero-greeting">Hi there! 👋</h1>
          {/* <br /> <br /> <br /> <br /> */}
          <h1 className="hero-name">
            <span className="iam-text">I am </span>
          </h1>
          <div className="lets-connect-large">
            <LetsConnect />
          </div>
          <h1 className="hero-name">
            <span className="text-gradient">{aboutMe.name}</span>
          </h1>
        </div>
        <p className="hero-description">{aboutMe.intro}</p>
      </div>

      <div className="lets-connect-small">
        <LetsConnect />
      </div>

      <div className="hero-animation">
        <div className="animation-container" onClick={toggleAnimation}>
          <Lottie
            {...defaultOptions}
            play={!isPaused} 
          />
        </div>
        <div className="animation-gradient"></div>
      </div>
    </section>
  );
};

export default Hero;
