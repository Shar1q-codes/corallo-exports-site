import React, { useState } from "react";
import "../styles/pages/FAQs.css";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Are you manufacturers or resellers?",
      answer: "We are trade brokers.",
    },
    {
      question: "What countries do you operate in?",
      answer: "Asia, Middle East, Africa, Europe.",
    },
    {
      question: "What's your commission model?",
      answer: "Transparent, based on product and volume.",
    },
    {
      question: "Can you help with logistics?",
      answer: "Yes, we connect you to trusted providers.",
    },
    {
      question: "Do you conduct quality checks?",
      answer: "We only work with verified suppliers.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqs-page">
      <div className="faqs-hero">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our services</p>
      </div>

      <div className="faqs-container">
        <div className="accordion">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`accordion-item ${
                openIndex === index ? "active" : ""
              }`}
            >
              <button
                className="accordion-header"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
                aria-controls={`content-${index}`}
              >
                <span className="question">{faq.question}</span>
                <span className="icon">{openIndex === index ? "−" : "+"}</span>
              </button>
              <div
                id={`content-${index}`}
                className="accordion-content"
                role="region"
                aria-labelledby={`header-${index}`}
                hidden={openIndex !== index}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
