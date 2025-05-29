// ===============================
// 📦 Component: ServicesOffered (Styled like IndustryExpertise)
// 🎯 Purpose: Display company services in clean split-block cards
// ===============================

import React from "react";
import "../../styles/components/about/ServicesOffered.css";

export default function ServicesOffered() {
  const services = [
    {
      title: "Sourcing & Procurement",
      description:
        "Connecting buyers with verified suppliers for premium products.",
    },
    {
      title: "Quality Assurance",
      description:
        "Ensuring product specifications meet global standards (ISO, EN590, etc.).",
    },
    {
      title: "Contract Management",
      description:
        "Drafting and negotiating trade contracts for secure, transparent transactions.",
    },
    {
      title: "Logistics Coordination",
      description:
        "Facilitating smooth delivery through trusted freight and shipping partners.",
    },
    {
      title: "Payment Facilitation",
      description:
        "Secure financial transactions using Letters of Credit (LC) or escrow services.",
    },
  ];

  return (
    <section className="about-block services-offered">
      <h2>Our Services</h2>
      <div className="service-blocks">
        {services.map((service, index) => (
          <div key={index} className="service-block">
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
