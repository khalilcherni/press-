import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "../index.css";
const ContactForm = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendMail = () => {
    const params = { name: fullname, email, message };
    const serviceID = "service_7y7ld3g"; // Replace with your EmailJS service ID
    const templateID = "template_p5w2pcz"; // Replace with your EmailJS template ID
    const userID = "8OXmTdhTFKKhNB6mz"; // Replace with your EmailJS user ID

    emailjs.send(serviceID, templateID, params, userID)
      .then(res => {
        setFullname('');
        setEmail('');
        setMessage('');
        console.log(res);
        alert("Your message sent successfully!!");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <label htmlFor="Fullname">Full Name:</label>
      <input
        type="text"
        id="Fullname"
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
      />

      <label htmlFor="email_id">Email:</label>
      <input
        type="email"
        id="email_id"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button onClick={sendMail}>Send Message</button>
    </div>
  );
};

export default ContactForm;
