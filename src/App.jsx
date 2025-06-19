import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import {Navbar,Hero,ContactMe,Education,Skills,Experience,Projects,Loading} from "./Components";
import './App.css';

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
            transition={{ duration: 1, delay: 0.25 }}
          >
          <header>
            <Navbar />
          </header>

          <main>
            <section id="Hero">
              <Hero />
            </section>
            <section id="Experience">
              <Experience />
            </section>
            <section id="Skills">
              <Skills />
            </section>
            <section id="Projects">
              <Projects />
            </section>
            <section id="Education">
              <Education />
            </section>
          </main>

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
