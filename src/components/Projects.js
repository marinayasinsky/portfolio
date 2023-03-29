import React from 'react';
import { Link } from 'react-scroll';
import { Carousel, Card, Button } from 'react-bootstrap';

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="mb-5">Projects</h2>
        <Carousel>
          <Carousel.Item>
            <div className="row">
              <div className="col-md-6">
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://i.imgur.com/8xky0TK.png"
                  />
                  <Card.Body>
                    <Card.Title>React Star Wars App</Card.Title>
                    <Card.Text>
                      This is a simple Star Wars-themed React web application
                      that utilizes the Star Wars API to display information
                      about various Star Wars characters, planets, and
                      starships.
                    </Card.Text>
                    <Button
                      variant="primary"
                      href="https://marinayasinsky.github.io/react-star-wars/"
                      target="_blank"
                    >
                      View Project
                    </Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-6">
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://i.imgur.com/e1jw8UI.png"
                  />
                  <Card.Body>
                    <Card.Title>Tic Tac Toe Game</Card.Title>
                    <Card.Text>
                      This is a classic Tic Tac Toe game built using HTML, CSS,
                      and vanilla JavaScript. It features a simple and clean
                      user interface, and it allows users to play against the
                      computer.
                    </Card.Text>
                    <Button
                      variant="primary"
                      href="https://marinayasinsky.github.io/TicTacToe/"
                      target="_blank"
                    >
                      View Project
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row">
              <div className="col-md-6">
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://i.imgur.com/8xky0TK.png"
                  />
                  <Card.Body>
                    <Card.Title>Project Title 1</Card.Title>
                    <Card.Text>
                      Project description 1
                    </Card.Text>
                    <Button
                      variant="primary"
                      href="https://example.com"
                      target="_blank"
                    >
                      View Project
                    </Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-6">
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://i.imgur.com/e1jw8UI.png"
                  />
                  <Card.Body>
                    <Card.Title>Project Title 2</Card.Title>
                    <Card.Text>
                      Project description 2
                    </Card.Text>
                    <Button
                      variant="primary"
                      href="https://example.com"
                      target="_blank"
                    >
                      View Project
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar, Projects };
