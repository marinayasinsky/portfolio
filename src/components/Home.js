import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/Home.css';
import RunnerImg from "../assets/Runner.jpg";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="text-container">
              <h2>Hey, I am Marinka!</h2>
              <h2>NYC Based Full Stack Developer Who Embraces Challenges & Stays Positive Even When It Rains!</h2>
              <div className="social-buttons d-flex justify-content-center mt-50">
                <a href="https://www.linkedin.com/in/marinayasinsky/" target="_blank" rel="noopener noreferrer" className="me-4">
                  <FontAwesomeIcon icon={faLinkedin} size="3x" color="#888" />
                </a>
                <a href="https://github.com/marinayasinsky" target="_blank" rel="noopener noreferrer" className="ms-4">
                  <FontAwesomeIcon icon={faGithub} size="3x" color="#888"/>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image-container float-end">
              <img src={RunnerImg} alt="Marinka running in the rain" className="img-fluid custom-img-size" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
