// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import ContactMe from './Components/ContactMe';
import Education from './Components/Education';
import LetsConnect from './Components/LetsConnect';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      {/* This is Header */}
      <header > {/*className="App-header">*/}
        <p>This is Header</p>
      </header>
      {/* This is Main */}
      <main>
      <Hero />
      <Education />

      <Skills />
      </main>
      {/* This is footer */}
      <footer>
        <ContactMe />
      </footer>

    </div>
  );
}

export default App;
