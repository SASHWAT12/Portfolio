import React from "react";
import { experiences } from "../Assets";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import experiencelottie from "./Lotties/experience.json";
import "./Stylings/Experience.css"; // Import the CSS file

const AnimationLottie = ({ animationPath }) => {
  return (
    <Lottie
      animationData={animationPath}
      loop={true}
      autoplay={true}
      style={{ width: "100%", height: "100%"}}
    />
  );
};

const Content = ({ text, link }) => {
  return (
    <div className="content-container">
      <p className="content">
        {text}{" "}
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            (Link)
          </a>
        ) : (
          ""
        )}
      </p>
    </div>
  );
};

const ExperienceCard = ({ logo, organisation, positions }) => {
  return (
    <motion.div
      className="motion-enter experience-card"
      whileInView={{ y: [-20, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="experience-header">
        <img
          src={logo}
          alt={organisation}
          className="experience-logo"
        />
        <h4 className="experience-title">{organisation}</h4>
      </div>
      <ol className="experience-list">
        {positions.map((position, index) => (
          <li
            key={index}
            className={`experience-item ${
              index === positions.length - 1 ? "" : "mb-4"
            }`}
          >
            <div className="circle"></div>
            <h3 className="experience-position">{position.title}</h3>
            <time className="experience-duration">{position.duration}</time>
            {position.content.map((info, idx) => (
              <Content key={idx} {...info} />
            ))}
          </li>
        ))}
      </ol>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h1 className="experience-heading">Experience</h1>
      <div className="experience-container">
        {/* Render Lottie animation only once */}
        <div className="lottie-container">
          <AnimationLottie animationPath={experiencelottie} />
        </div>
        <div className="cards-container">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
