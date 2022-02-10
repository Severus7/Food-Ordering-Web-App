import React from "react";
import ContactImage from "../assets/fooda.jpeg";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ContactImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" action="" method="POST">
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" placeholder="Enter your name" />

          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email address"
          />

          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            name="message"
            rows="7"
            placeholder="Enter your message"
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
