import React from "react";
import { FaCode, FaPalette, FaRocket } from "react-icons/fa"; // Importing icons
import './ServiceCards.css'; // Importing the CSS for styling

const ServiceCards = () => {
  // Array of services
  const services = [
    {
      icon: <FaCode size={50} />, // Icon for Web Development
      title: "Web Development",
      description: "Build Dynamic, Scalable, and Future-Ready Websites.",
    },
    {
      icon: <FaPalette size={50} />, // Icon for UI/UX Design
      title: "UI/UX Design",
      description: "Crafting Seamless Experiences, One Pixel at a Time.",
    },
    {
      icon: <FaRocket size={50} />, // Icon for Digital Marketing
      title: "Digital Marketing",
      description: "Data-Driven Strategies for Maximum Impact.",
    },
  ];

  return (
    <section className="service-cards" id="services">
      <h2>Services</h2>
      <div className="cards-container">
        {services.map((service, index) => (
          <div key={index} className="card">
            <div className="icon">{service.icon}</div> {/* Service icon */}
            <h3 className="service-title">{service.title}</h3> {/* Service title */}
            <p className="description">{service.description}</p> {/* Service description */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards; // Exporting the component