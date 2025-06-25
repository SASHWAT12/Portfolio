import { motion } from "framer-motion";
import React from "react";
import "./Stylings/Skills.css";
import { SkillSet } from "../Assets";

const Skills = () => {
    // const categories = ["Programming Languages", "Web Development", "Other Skills"];

  const categories = ["Programming Languages", "Other Skills"];

  return (
    <div className="skills-section">
      <h1 className="skills-heading">Skills</h1>
      <div className="skills-grid">
        {categories.map((category, index) => {
          const skills = SkillSet.find((set) => set.category === category)?.skills || [];
          const columns = Array.from({ length: Math.ceil(skills.length / 4) }, (_, colIndex) =>
            skills.slice(colIndex * 4, colIndex * 4 + 4)
          );

          return (
            <motion.div
              className="SkillSet"
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.75, delay: 0.1 }}
            >
              <h2 className="category-heading">{category}</h2>
              <div className="skills-list">
                {columns.map((column, colIndex) => (
                  <div className="skills-sub-column" key={colIndex}>
                    {column.map((skill) => (
                      <motion.div
                        className="skill-card"
                        key={skill.id}
                        whileHover={{ scale: 1.1 }}
                      >
                        <img src={skill.icon} alt={skill.name} className="skill-icon" />
                        <p className="skill-name">{skill.name}</p>
                      </motion.div>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
