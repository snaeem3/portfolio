import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Title from './components/Title';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Title />
        <About />
        <Projects />
        {/* <Resume/> */}
        {/* <Contact/> */}
      </main>
    </div>
  );
}

export default App;
