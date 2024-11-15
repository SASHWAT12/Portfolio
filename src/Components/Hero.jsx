import React from "react";
import LetsConnect from "./LetsConnect";
import Lottie from "react-lottie-player";
import animationData from "./Lotties/person-coding.json";
import { aboutMe } from "../Assets";
import "./Stylings/Hero.css";  // Import the CSS file

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
  return (
    <section id="home" className="hero-section">
      <div className="hero-text">
        <div className="hero-intro">
          <h1 className="hero-greeting">Hi there! 👋</h1>
          <h1 className="hero-name">
            <span className="iam-text">I am</span> <span className="text-gradient">{aboutMe.name}</span>
          </h1>
        </div>
        <p className="hero-description">
          {aboutMe.intro}
        </p>
      </div>

      <div className="lets-connect-large">
        <LetsConnect />
      </div>
      <div className="lets-connect-small">
        <LetsConnect />
      </div>

      <div className="hero-animation">
        <div className="animation-container">
          <Lottie {...defaultOptions} />
        </div>
        <div className="animation-gradient"></div>
      </div>

      
    </section>
  );
};

export default Hero;

