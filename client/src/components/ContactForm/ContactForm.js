import React from 'react'

const ContactForm = () => {
  return (
    <div className="container">
      <div className="form-group">
        <label for="exampleFormControlInput1">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Name</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Leave a message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="button" className="btn btn-secondary">Submit</button>
      </div>
  )
}

export default ContactForm