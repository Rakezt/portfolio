import './App.css';
import Contact from './section/Contact/Contact';
import Footer from './section/Footer/Footer';
import Hero from './section/Hero/Hero';
import Projects from './section/Projects/Projects';
import Skills from './section/Skills/Skills';

function App() {
  return (
    <div>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
