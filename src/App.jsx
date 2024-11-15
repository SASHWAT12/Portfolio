// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import ContactMe from './Components/ContactMe';
import LetsConnect from './Components/LetsConnect';

function App() {
  return (
    <div className="App">
      {/* This is Header */}
      <header > {/*className="App-header">*/}
        <p>This is Header</p>
      </header>
      {/* This is Main */}
      <main>
      This is body
      <Hero />
      </main>
      {/* This is footer */}
      <footer>
        <ContactMe />
      </footer>

    </div>
  );
}

export default App;
