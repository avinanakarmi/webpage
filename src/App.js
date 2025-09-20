import About from './components/About';
import Contact from './components/Contact';
import './App.css';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Education from './components/Education';
import Experiences from './components/Experiences';

function App() {
  return (
    <div className="App">
      <About />
      <Projects />
      <Publications />
      <Experiences />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
