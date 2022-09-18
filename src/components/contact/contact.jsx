import React, { useRef } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"

export const Contact = () => {
  const form = useRef();
  const [show,setShow]=useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_40xb8el', 'template_nuzcbeq', form.current, 'HisGcoHbzLrIOG6Wb')
      .then((result) => {
          //console.log(result.text);
          setShow(true)
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div>
    <h1 className="form_title">Send me an Email and we´ll talk!</h1>
    <form ref={form} onSubmit={sendEmail} id="form">
      <label>Name</label>
      <input type="text" name="user_name" required placeholder="Your Name"/>
      <label>Email</label>
      <input type="email" name="user_email" required placeholder="Your@Email.com"/>
      <label>Message</label>
      <textarea name="message" required placeholder="Your Message"/>
      <button type="submit" value="Send" >Send Message</button>

{/* Show message when sent email = true*/}
      {
       show?<h1>Message Sent!</h1>:null
      }  
      
    </form>
    </div>
  );
};
