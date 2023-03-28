import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <Container>

        //.spread footer accross the bottom of the page

        <Row>
          <Col md={6}>
            <p>&copy; 2023 My Name</p>
          </Col>
          <Col md={6} className="d-flex justify-content-end">
           
            <ul className= "list-unstyled d-flex">
              <li className="d-inline me-2"><a href="mailto:marinayasinsky@gmail.com" className="text-light">Email</a></li>
              <li className="d-inline me-2"><a href="https://www.linkedin.com/in/marinayasinsky/" className="text-light">LinkedIn</a></li>
              <li className="d-inline"><a href="https://github.com/marinayasinsky" className="text-light">GitHub</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
