import React from 'react';
import { motion } from 'framer-motion';
import "./Stylings/Loading.css";
import { PassportImage } from '../Assets';

const Loading = () => {
  return (
    <motion.div
      id="loading"
      className="loading-container"
      initial={{ scale: 1.0, opacity: 0.25 }}
      animate={{ scale: 2.2, opacity: 0.75 }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
    >
      <img src={PassportImage} alt="Parth Mittal" className="loading-image" />
    </motion.div>
  );
};

export default Loading;
