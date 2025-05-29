// ===============================
// 📦 Component: ContactBlock
// 🎯 Purpose: Display static contact information
// ===============================

import React from "react";
import "../../styles/components/about/ContactBlock.css";

export default function ContactBlock() {
  const contactInfo = [
    {
      type: "Email",
      value: "info@coralloexports.com",
      icon: "✉",
    },
    {
      type: "Phone",
      value: "+91 (123) 456-7890",
      icon: "📞",
    },
    {
      type: "Website",
      value: "www.coralloexports.com",
      icon: "🌐",
    },
  ];

  return (
    <section className="about-block contact-block">
      <h2>Get in Touch</h2>
      <div className="contact-grid">
        {contactInfo.map((info, index) => (
          <div key={index} className="contact-item">
            <span className="contact-icon">{info.icon}</span>
            <div className="contact-details">
              <h3>{info.type}</h3>
              <p>{info.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
