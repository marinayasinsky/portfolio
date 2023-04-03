import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Home.css';
import resume from '../assets/Resume.docx';

const About = () => {
  return (
  <>
  <div className="col-12 text-center my-4">
        <h1 className="page-header lg=4 mb-0">About Me</h1>
      </div>
    <div className="about">
      <Container className="about-container p-1">
        <Row>
          <Col>
          <p>As a software engineering bootcamp student with over 10 years of experience in business development and account management, I have developed a strong foundation in HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, Mongoose, React, SQL, and computer science concepts.</p>
<p>I am a results-driven professional with expertise in customer-focused cultures, market research, and sales revenue strategies. My articulate communication skills have helped me build and foster productive relationships with clients, resulting in increased loyalty and profits.</p>
<p>I am passionate about the tech industry and my work. I enjoy working on challenging projects and strive to continuously improve my skills and knowledge. As a detail-oriented and adaptable individual with a strong work ethic, I am confident in my ability to achieve my professional goals and make valuable contributions to any team.</p>
<p>In addition to my software engineering training, I hold a combined Bachelor's/Master's degree in Economics and have completed a certificate program in International Business. I am also proficient in MS Office, QuickBooks, and Salesforce.</p>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-end">
            <div className="resume ml-auto">
              <Button variant="secondary" href={resume}  download className="mr-3">
                Download Resume
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default About;
