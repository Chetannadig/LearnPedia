import React from "react";
import './PricingTable.css';
import { FaCheckCircle } from "react-icons/fa"; // Importing check circle icon

const PricingTable = () => {
  // Array of pricing plans
  const pricingPlans = [
    {
      plan: "Fresher",
      price: "$100/Course",
      features: ["15 Weeks duration", "Hands-on Experience", "Live and Recorded sessions", "24/7 Support"],
    },
    {
      plan: "Intermediate",
      price: "$350/Course",
      features: ["8 Weeks", "Advanced Concepts", "Live sessions only", "24/7 Support"],
    },
    {
      plan: "Senior",
      price: "$600/Course",
      features: ["10 weeks", "Technical and Managerial skills ", "Live and Recorded sessions", "24/7 Support"],
    },
  ];

  return (
    <section className="pricing-table" id="plans">
      <h2>Pricing Plans</h2>
      <div className="plans-container">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="plan-card">
            <h3>{plan.plan}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <FaCheckCircle className="bullet-icon" /> {/* Icon for bullet points */}
                  {feature}
                </li>
              ))}
            </ul>
            <button className="enroll-button">Enroll</button> {/* Enroll button */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingTable; // Exporting the component