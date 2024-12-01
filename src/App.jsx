// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import ContactMe from './Components/ContactMe';
import Education from './Components/Education';
import LetsConnect from './Components/LetsConnect';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
