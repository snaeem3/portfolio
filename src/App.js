import logo from './logo.svg';
// import './App.css';
import Nav from './components/Nav';
import Title from './components/Title';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Title />
        <About />
        <Projects />
        {/* <Resume/> */}
        <Contact />
      </main>
      <a href="#nav">
        <button type="button" className="icon-btn return-to-top-btn">
          Return to Top
        </button>
      </a>
    </div>
  );
}

export default App;
