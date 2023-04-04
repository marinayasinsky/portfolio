import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Get form values
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    // Create the email template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Marina',
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(
        'service_yiu81hr',
        'template_nvqnvd7',
        templateParams,
        'vHo8y80pHlPOiyuKU' 
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setFormSubmitted(true);
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Failed to send the message. Please try again later.');
        }
      );
  };

  if (formSubmitted) {
    return (
      <>
        <div className="col-12 text-center my-4">
          <h1 className="page-header lg=4">Contact Me</h1>
        </div>
        <div className="row justify-content-center">
  <div className="col-lg-6">
    <div style={{ backgroundColor: '#F1F1F1', padding: '20px', textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }}>
      Thank you for your message!
    </div>
  </div>
</div>
      </>
    );
  }

  return (
    <>
      <div className="col-12 text-center my-4">
        <h1 className="page-header lg=4">Contact Me</h1>
      </div>
      <div>
        <div className="row"></div>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea className="form-control" rows="5" name="message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
