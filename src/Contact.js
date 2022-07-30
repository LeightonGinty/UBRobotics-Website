import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(window.innerWidth);
    emailjs.sendForm("service_azo764l", "template_hydc25t", form.current, "T7t9DjouC1aChv2y7")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <form className='contactForm' ref={form} onSubmit={sendEmail}>
      <label className='formElement' style={{width: `${window.innerWidth}`, color: "white"}}>Name</label>
      <input className='formElement' style={{width: `${window.innerWidth}`, color: "white"}} type="text" name="user_name" />
      <label className='formElement' style={{width: `${window.innerWidth}`, color: "white"}} >Email</label>
      <input className='formElement' style={{width: `${window.innerWidth}`, color: "white"}} type="email" name="user_email" />
      <label className='formElement' style={{width: `${window.innerWidth}`, color: "white"}} >Message</label>
      <textarea className='formElement' style={{width: `${window.innerWidth}`, color: "white"}} name="message" />
      <input style={{width: `${window.innerWidth}`}} className='submitButton' type="submit" value="Send" />
    </form>
  );
};

export default Contact