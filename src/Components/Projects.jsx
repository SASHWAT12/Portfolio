import React from "react";
import { projects, GithubIcon} from "../Assets";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";  // Import Marquee component
import "./Stylings/Projects.css";

const Project = (props) => {
  return (
    <motion.div
      className="project-card"
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.75, delay: 0.1 }}
    >
      <div className="project-container">
        <img
          className="project-image"
          src={props.image}
          alt={props.title}
        />
        <div className="project-details">
          <h1 className="project-title">{props.title}</h1>
          <p className="project-tech">Tech Stack</p>
          <div className="project-stack">
            <div className="stack-icons">
              {props.stack.map((tech, index) => (
                <div
                  key={tech.id}
                  className="stack-icon tooltip"
                >
                  {/* Render SVG as an <img> */}
                  <img src={tech.icon} alt={tech.name} className="tech-icon" />
                  <span className="tooltip-text">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="project-description">{props.content}</p>

      <div className="project-links">
        {props.github && (
          <a href={props.github} target="_blank" rel="noopener noreferrer">
            <img src={GithubIcon} alt="GitHub Link" />
          </a>
        )}
        {props.link && (
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <img src={GithubIcon} alt="Project Link" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="projects-heading">Projects</h1>
      <div className="projects-container">
        {/* <Marquee MARQUEE ANIMATION UNCOMMENT LATER
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        > */}
          <div className="marquee-container"> {/* Added wrapper for Marquee items */}
            {projects.map((project, index) => (
              <Project key={project.id} index={index} {...project} />
            ))}
          </div>
        {/* </Marquee> */}
      </div>
    </section>
  );
};

export default Projects;
