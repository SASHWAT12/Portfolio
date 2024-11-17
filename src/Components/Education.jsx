import React from "react";
import "./Stylings/Education.css";
import { educationList } from "../Assets";
import Lottie from "react-lottie-player";
import animationData from "./Lotties/quiz-mode-teal-dark.json";
import { motion } from "framer-motion";

// Lottie configuration
const defaultOptions = {
  loop: true,
  play: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "none", // Disable aspect ratio constraints
  },
};

const FeatureCard = ({
  icon,
  title,
  degree,
  duration,
  content1,
  content2,
  link, // Pass link as a prop
}) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div className="feature-card" onClick={handleClick} role="button" tabIndex={0}>
      <div className="feature-icon-container">
        <img src={icon} alt="icon" className="feature-icon" />
      </div>
      <div className="feature-content">
        <h4 className="feature-title">{title}</h4>
        <p className="feature-degree">{degree}</p>
        <p className="feature-duration">{duration}</p>
        <p className="feature-content-item">● {content1}</p>
        {content2 && <p className="feature-content-item">● {content2}</p>}
      </div>
    </div>
  );
};


const Education = () => {
  return (
    <section className="education-section" id="education">
      <h1 className="education-heading">Education</h1>
      <motion.div
        className="section-container"
        whileInView={{ x: [-60, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        {/* Lottie animation on the left */}
        <div className="section-image-container">
          <Lottie
            {...defaultOptions}
            className="lottie"
          />
        </div>

        {/* Education content on the right */}
        <div className="section-info">
          {educationList.map((feature, index) => (
            <FeatureCard key={feature.id} index={index} {...feature} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
