// ===============================
// 📦 Component: WhyChooseUs
// 🎯 Purpose: Display company's unique value propositions
// ===============================

import React from "react";
import "../../styles/components/about/WhyChooseUs.css";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Global Network",
      description:
        "Extensive connections with leading suppliers and buyers worldwide.",
    },
    {
      title: "Transparent Operations",
      description: "Ensuring clarity and trust at every stage.",
    },
    {
      title: "Compliance Expertise",
      description:
        "Adherence to international trade laws, standards, and certifications.",
    },
    {
      title: "Value-Added Services",
      description:
        "Quality checks, logistics optimization, and comprehensive trade support.",
    },
  ];

  return (
    <section className="about-block why-choose-us">
      <h2>Why Choose Us</h2>
      <div className="reasons-grid">
        {reasons.map((reason, index) => (
          <div key={index} className="reason-card">
            <div className="reason-icon">✓</div>
            <div className="reason-content">
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
