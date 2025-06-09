import React from "react";
import { motion } from "framer-motion";
import "../styles/pages/Services.css";

export default function Services() {
  const services = [
    {
      title: "Sourcing & Procurement",
      description: "Connecting buyers with verified suppliers for premium products across global markets.",
      icon: "🔍",
      features: ["Global supplier network", "Quality verification", "Competitive pricing"]
    },
    {
      title: "Quality Assurance",
      description: "Ensuring product compliance with international standards and certifications.",
      icon: "✓",
      features: ["ISO compliance", "Third-party testing", "Documentation support"]
    },
    {
      title: "Contract Management",
      description: "Drafting and negotiating secure trade contracts with transparent terms.",
      icon: "📄",
      features: ["Legal compliance", "Risk mitigation", "Transparent terms"]
    },
    {
      title: "Logistics Coordination",
      description: "Coordinating seamless shipments via trusted freight and shipping partners.",
      icon: "🚢",
      features: ["Global shipping", "Customs clearance", "Real-time tracking"]
    },
    {
      title: "Payment Facilitation",
      description: "Handling secure payments via Letters of Credit, escrow, and verified gateways.",
      icon: "💳",
      features: ["Secure transactions", "Multiple payment methods", "Risk protection"]
    },
    {
      title: "Market Intelligence",
      description: "Providing insights on market trends, pricing, and opportunities.",
      icon: "📊",
      features: ["Market analysis", "Price forecasting", "Trend reports"]
    },
  ];

  return (
    <div className="services-page">
      <motion.div 
        className="services-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <h1>Our Services</h1>
          <p>Comprehensive trade solutions for global business success</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Global Partners</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Countries Served</span>
            </div>
            <div className="stat">
              <span className="stat-number">99%</span>
              <span className="stat-label">Success Rate</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="services-container">
        <motion.div 
          className="services-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>End-to-End Trade Solutions</h2>
          <p>From initial sourcing to final delivery, we provide comprehensive support for your global trade operations. Our experienced team ensures every transaction meets the highest standards of quality, compliance, and efficiency.</p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="service-block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="service-content">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Ready to streamline your global trade?</h2>
          <p>Let our experts handle the complexities while you focus on growing your business.</p>
          <a href="/contact" className="cta-button">Get Started Today</a>
        </motion.div>
      </div>
    </div>
  );
}