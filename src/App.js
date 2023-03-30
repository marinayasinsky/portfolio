import React from 'react';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Home from './components/Home';
import About from './components/About';
import TechNews from './components/TechNews';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="technews">
        <TechNews />
      </section>
    </div>
  );
}

export default App;
