import React, { useRef } from "react";
import "../styles/css/contact.min.css";
import image from "../assets/image2.jpg";
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // process.env.YOUR_PUBLIC_KEY
    // process.env.YOUR_SERVICE_ID
    // process.env.YOUR_TEMPLATE_ID
    emailjs.sendForm("service_xevny38", "template_0v6clx7" , form.current,"x8b-uiEYCAK-uKH4E" )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section className="contact">
      <div className="contact-content container">
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="email" placeholder="Email" name="user_email" />
          <input type="text" placeholder="Subject" name="subject" />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Your text here"
          ></textarea>
          <button type="submit"> send </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
