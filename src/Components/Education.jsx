import React from "react";
import "./Stylings/Education.css";
import { educationList } from "../Assets";
import Lottie from "react-lottie-player";
import animationData from "./Lotties/quiz-mode-teal-dark.json";
import { motion } from "framer-motion";

const defaultOptions = {
  loop: true,
  play: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const FeatureCard = ({
  icon,
  title,
  degree,
  duration,
  content1,
  content2,
  index,
}) => (
  <div className="feature-card">
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

const Education = () => {
  return (
    <section className="education-section" id="education">
      <h1 className="education-heading">Education</h1>
      <motion.div
        className="section-container"
        whileInView={{ x: [-60, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <div className="section-image-container">
          <Lottie {...defaultOptions} className="lottie" />
          <div className="gradient gradient-white"></div>
          <div className="gradient gradient-pink"></div>
        </div>

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