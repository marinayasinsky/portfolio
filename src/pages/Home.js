import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="container my-5">
      <Card>
        <Card.Body>
          <Card.Title>Hello, I'm Marina!</Card.Title>
          <Card.Text>
            I'm a software engineer with experience in HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, Mongoose, React, SQL, and computer science concepts. I'm also a skilled business development and account management professional with a track record of boosting loyalty and profits.
          </Card.Text>
          <Button variant="primary">Learn more</Button>
        </Card.Body>
      </Card>
      <Footer />
    </div>
  );
};

export default Home;
