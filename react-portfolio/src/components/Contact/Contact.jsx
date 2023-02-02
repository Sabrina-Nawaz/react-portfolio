import React, { useState, useEffect } from 'react';
import "./Contact.css"

export default function Contact() {
  const [state, setState] = useState({
    name: '',
    email: '',
    comments: '',
    isSubmitted: false
  })

  const handleOnSubmit = () => {
    setState(prev => {
      const next = { ...prev }
      next.isSubmitted = true;
      return next;
    })
  }

  const handleOnChange = (key) => (event) => {
    setState(prev => {
      const next = { ...prev }
      next[key] = event.target.value
      return next
    })
  }

  useEffect(() => {
    if (state.isSubmitted) {
      const data = { ...state };
      delete data.isSubmitted;
      console.log('Form data', data);
    }
  }, [state])

  return (
    <div id="contact">
      <div>
      <label htmlFor="exampleName">Full Name</label>
      <input
        id="exampleName"
        type="text"
        name="text"
        placeholder="Please enter your name here"
        require="true"
        onChange={handleOnChange('name')}
      />
      {state.isSubmitted && state.name.length <= 0 && <div className="error">Invalid name</div>}
      </div>
     <div>
     <label htmlFor="exampleEmail">Email</label>
      <input
        id="exampleEmail"
        name="Email"
        placeholder="Please enter your email here"
        type="email"
        require="true"
        onChange={handleOnChange('email')}
      />
      {state.isSubmitted && state.email.length <= 0 && <div className="error">Invalid email</div>}
     </div>
      <div>
      <label htmlFor="exampleText">Comments</label>
      <input 
        id="exampleText" 
        name="textarea" 
        type="textarea"
        onChange={handleOnChange('comments')}
      />
      </div>

      <button type="submit" value="Submit" onClick={handleOnSubmit}>
        Submit
      </button>
    </div>
  );
}