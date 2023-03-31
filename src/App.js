import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TechNews from './components/TechNews';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <div className="my-3"></div>
      <section id="about">
        <About />
      </section>
      <div className="my-3"></div>
      <section id="projects">
        <Projects />
      </section>
      <div className="my-3"></div>
      <section id="contact">
        <Contact />
      </section>
      <div className="my-3"></div>
      <section id="technews">
        <TechNews />
      </section>
      <div className="my-3"></div>
      <Footer />
    </div>
  );
}

export default App;
