import React,{useRef} from "react";
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_fmmt63p', 'template_4i6wr6a', form.current, 'VsCc4x6AfeMfctpW3')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email sent!')
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <section className="contactPage">
      <div id='contact'>
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder="Your Name"  name="your_name"/>
            <input type="text" className="email" placeholder="Your Email" name="your_email"/>
            <textarea className="msg" name="message" rows="5" placeholder="Your Message"/>
            <button type="submit" value="send" className="submitBtn">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
