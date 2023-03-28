import React from "react";

const Education = () => {
  return (
    <section id="education">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="section-title">Education</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="education-block">
              <h4>Per Scholas</h4>
              <p>Software Engineering Bootcamp</p>
              <p>January 2023 - May 2023</p>
            </div>
          </div>
          <div className="col-md-8">
            <p>
              In this intensive software engineering bootcamp, I will learn how to develop full-stack web applications using HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, Mongoose, and React. I will also learn computer science concepts, including data structures and algorithms, as well as frontend and backend frameworks and databases. The course will cover the common phases in the software development life cycle and teach me how to solve algorithmic challenges and analyze the computational complexity of algorithms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
