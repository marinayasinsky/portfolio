import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Projects() {
  return (
    <section id="projects" className="py-5">
       <div className="text-center">
        <h1 className="page-header lg=4" >Projects</h1>
        </div>
      <div className="container">
        
        <div className="row">
          <div className="col-md-6">
            <Card>
              <Card.Body>
                <Card.Title>React Star Wars App</Card.Title>
                <Card.Text>
                  This is a simple Star Wars-themed React web application
                  that utilizes the Star Wars API to display information
                  about various Star Wars characters, planets, and
                  starships.
                </Card.Text>
                <iframe
                  title="React Star Wars App Preview"
                  src="https://marinayasinsky.github.io/react-star-wars/"
                  style={{ width: "100%", height: "200px", border: "none" }}
                />
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
              <Card.Body>
                <Card.Title>Tic Tac Toe Game</Card.Title>
                <Card.Text>
                  This is a classic Tic Tac Toe game built using HTML, CSS,
                  and vanilla JavaScript. It features a simple and clean
                  user interface, and it allows users to play against the
                  computer.
                </Card.Text>
                <iframe
                  title="Tic Tac Toe Game Preview"
                  src="https://marinayasinsky.github.io/TicTacToe/"
                  style={{ width: "100%", height: "200px", border: "none" }}
                />
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
      </div>
    </section>
  );
}

export default Projects;
