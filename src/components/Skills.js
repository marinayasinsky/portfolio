import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Skills = () => {
  return (
    <section id="skills" className="py-5">
      <Container>
        <h2 className="mb-5">Skills</h2>
        <Row className="justify-content-center">
          <Col md={4} sm={6} xs={12}>
            <h4>Web Development</h4>
            <ul className="list-unstyled">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>SQL</li>
            </ul>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <h4>Computer Science Concepts</h4>
            <ul className="list-unstyled">
              <li>Data Structures and Algorithms</li>
              <li>Frontend and Backend Frameworks</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
