import React from 'react';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };

  return (
    <>
    <div className="col-12 text-center my-4">
        <h1 className="page-header lg=4">Contact Me</h1>
        </div>
    <div >
        
      <div className="row">
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea className="form-control" rows="5" required></textarea>
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
