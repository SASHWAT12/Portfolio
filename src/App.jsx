import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import ContactMe from './Components/ContactMe';
import Education from './Components/Education';
import LetsConnect from './Components/LetsConnect';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Loading from './Components/Loading';  // Import the loading component

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);  // Set loading to false after 1.2 seconds
    }, 1200);
  }, []);

  return (
    <div className="App">
      <AnimatePresence>
      {isLoading ? (
        <Loading />  // Show the loading screen while loading
      ) : (
        <motion.section
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.5 }}
          >
            {/* This is Header */}
          <header>
            <p>This is Header</p>
          </header>

          {/* This is Main */}
          <main>
            <Navbar />

            {/* Assign IDs to sections */}
            <section id="Hero">
              <Hero />
            </section>

            <section id="Education">
              <Education />
            </section>

            <section id="Skills">
              <Skills />
            </section>

            <section id="Experience">
              <Experience />
            </section>

            <section id="Projects">
              <Projects />
            </section>
          </main>

          {/* This is Footer */}
          <footer>
            <section id="ContactMe">
              <ContactMe />
            </section>
          </footer>
          </motion.section>
      )}
      </AnimatePresence>
    </div>
  );
}

export default App;
