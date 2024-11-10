// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import ContactMe from './Components/ContactMe';

function App() {
  return (
    <div className="App">
      {/* This is Header */}
      <header > {/*className="App-header">*/}
        <p>This is Header</p>
        <Navbar />
      </header>
      {/* This is Main */}
      <main>
      This is body
      <Hero> </Hero>
      </main>
      {/* This is footer */}
      <footer>
        <ContactMe />
      </footer>

    </div>
  );
}

export default App;
