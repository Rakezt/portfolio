import './App.css';
import LetsTalk from './section/Contact/LetsTalk';
import Footer from './section/Footer/Footer';
import Hero from './section/Hero/Hero';
import HowIThink from './section/HowIthink/HowIthink';
import Projects from './section/Projects/Projects';
import Skills from './section/Skills/Skills';

function App() {
  return (
    <div>
      <Hero />
      <Projects />
      <HowIThink />
      <Skills />
      <LetsTalk />
      <Footer />
    </div>
  );
}

export default App;
