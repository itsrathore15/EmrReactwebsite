import React from "react";
import "./contacts.css"
import { useRef } from 'react';
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';

import {AiOutlineMail} from "react-icons/ai"
import {BsInstagram} from "react-icons/bs";
 import {BsWhatsapp} from "react-icons/bs"

function Contacts(){
      const form=useRef();

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dso8ijj', 'service_dso8ijj', form.current, 'cPVQfnsha2Q2DPFn7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
    return (
        <section id="contact">
           <h5>Get In Touch</h5>
           <h2>Contact Us</h2>

           <div className="container contact_container">
             <div className="contact_options">
               <article className="contact_option">
                 <AiOutlineMail className="contact_option-icon"/>
                 <h4>Email</h4>
                  <h5>emr@nitkkr.ac.in</h5>
                  <a href="mailto:emr@nitkkr.ac.in" target="_blank">Send a message</a>
               </article>
               <article className="contact_option">
                 <BsInstagram className="contact_option-icon"/>
                 <h4>Instagram</h4>
                  <h5>@emrnitkkr</h5>
                  <a href="https://www.instagram.com/emr_nitkkr/" target="_blank">Send a message</a>
               </article>
               <article className="contact_option">
                 <BsWhatsapp className="contact_option-icon"/>
                 <h4>WhatsApp</h4>
                  <h5>8295893034</h5>
                  <a href="https://www.whatsapp.com" target="_blank">Send a message</a>
               </article>
               </div>

               <form ref={form} onSubmit={sendEmail} action="">
                  <input type="text" name="name" placeholder="Your full Name" required/>
                  <input type="text" name="email" placeholder="Your Email"  required/>
                  <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                  <button type="submit" className="btn btn-primary">Send Message</button>
               </form>

              </div>
        </section>
    )
}



export default Contacts;