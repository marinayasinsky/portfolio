import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Home.css';

const About = () => {
  return (
    <div className="about">
      <div className="page-header">
        <h1>About Me</h1>
      </div>
      <Container>
        <Row>
          <Col>
            <p>Currently, in training as a Software Engineering Bootcamp student(graduating May 2023), I have built a strong foundation in HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, Mongoose, React, SQL, and computer science concepts.</p>
            <p>With over 10 years of experience in business development and account management. Accomplished and results-driven professional with expertise in customer-focused cultures, market research, and sales revenue strategies. Articulate communicator with a track record of boosting loyalty and profits.</p>
            <p>Excited to apply my unique blend of technical and business skills to drive success for your team.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="resume">
              <h2>Resume</h2>
              <p>Download my resume:</p>
              <Button variant="primary" href="/path/to/resume.pdf" download>
                Download Resume
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
