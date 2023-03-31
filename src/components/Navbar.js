import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollToAbout = () => {
    scroll.scrollTo(document.getElementById('about').offsetTop - 70);
  };

  const scrollToProjects = () => {
    scroll.scrollTo(document.getElementById('projects').offsetTop - 70);
  };

  const scrollToContact = () => {
    scroll.scrollTo(document.getElementById('contact').offsetTop - 70);
  };

  const scrollToTechNews = () => {
    scroll.scrollTo(document.getElementById('technews').offsetTop - 70);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top fw-bold fs-5">
      <div className="navbar-nav d-flex flex-row">
        <button className="nav-link btn btn-link" onClick={scrollToTop}>
          Home
        </button>
        <button className="nav-link btn btn-link" onClick={scrollToAbout}>
          About
        </button>
        <button className="nav-link btn btn-link" onClick={scrollToProjects}>
          Projects
        </button>
        <button className="nav-link btn btn-link" onClick={scrollToContact}>
          Contact
        </button>
        <br />
        <button className="nav-link btn btn-link" onClick={scrollToTechNews}>
          TechNews
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
