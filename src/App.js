import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        {/* <About/> */}
        {/* <Skills/> */}
        <Projects />
        {/* <Resume/> */}
        {/* <Contact/> */}
      </main>
    </div>
  );
}

export default App;
