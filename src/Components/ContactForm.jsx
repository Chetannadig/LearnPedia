import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa"; // Icon for the button
import "./ContactForm.css"; // Importing the CSS for styling

const ContactForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
    // Reset form data after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-form" id="contact">
      <h2>Contact Us:</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Chandelor Green"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="greenchandelor@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Contact us...."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="button-container">
          <button type="submit">
            <FaPaperPlane className="icon" /> {/* Icon inside the button */}
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm; // Exporting the component
