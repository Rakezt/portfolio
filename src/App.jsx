import './App.css';
import LetsTalk from './section/LetsTalk/LetsTalk';
import Footer from './section/Footer/Footer';
import Hero from './section/Hero/Hero';
import Projects from './section/Projects/Projects';
import Skills from './section/Skills/Skills';
import HowIThink from './section/HowIthink/HowIthink';

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
