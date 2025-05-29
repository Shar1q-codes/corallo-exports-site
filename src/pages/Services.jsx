import React from "react";
import "../styles/pages/Services.css";

export default function Services() {
  const services = [
    {
      title: "Sourcing & Procurement",
      description: "Connecting buyers with verified suppliers.",
      icon: "🔍",
    },
    {
      title: "Quality Assurance",
      description: "Ensuring product compliance with global standards.",
      icon: "✓",
    },
    {
      title: "Contract Management",
      description: "Drafting and negotiating secure trade contracts.",
      icon: "📄",
    },
    {
      title: "Logistics Coordination",
      description: "Coordinating shipments via trusted partners.",
      icon: "🚢",
    },
    {
      title: "Payment Facilitation",
      description: "Handling secure payments via LC or escrow.",
      icon: "💳",
    },
  ];

  return (
    <div className="services-page">
      <div className="services-hero">
        <h1>Our Services</h1>
        <p>Comprehensive trade solutions for global business</p>
      </div>

      <div className="services-container">
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-block">
              <div className="service-content">
                <div className="service-icon">{service.icon}</div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
