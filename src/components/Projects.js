import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import starWarsImg from '../assets/StarWars.jpg';
import ticTacToeImg from '../assets/TicTacToe.jpg';

function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="text-center">
        <h1 className="page-header lg=4">Projects</h1>
      </div>
      <div className="container col-lg-10 h-10">
        <div className="row">
          <div className="col-md-6">
            <Card className="h-100 project-card">
              <Card.Img variant="top" src={starWarsImg} alt="Star Wars App" />
              <Card.Body className="d-flex flex-column">
                <Card.Title>React Star Wars App</Card.Title>
                <Card.Text>
                  This is a simple Star Wars-themed React web application that utilizes the Star Wars API to display information about various Star Wars characters, planets, and starships.
                </Card.Text>
                <Button variant="primary" href="https://marinayasinsky.github.io/react-star-wars/" target="_blank">
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6">
            <Card className="h-100">
              <Card.Img variant="top" src={ticTacToeImg} alt="Tic Tac Toe Game" />
              <Card.Body className="d-flex flex-column">
                <Card.Title>Tic Tac Toe Game</Card.Title>
                <Card.Text>
                  This is a classic Tic Tac Toe game built using HTML, CSS, and vanilla JavaScript. It features a simple and clean user interface, and it allows users to play against the computer.
                </Card.Text>
                <Button variant="primary" href="https://marinayasinsky.github.io/TicTacToe/" target="_blank">
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
