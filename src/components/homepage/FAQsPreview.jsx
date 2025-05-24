// ===============================
// 📦 Component: FAQsPreview
// 🏠 Location: components/homepage/
// 🎯 Purpose: Preview key questions + link to FAQ page
// ===============================

import "../../styles/components/homepage/FAQsPreview.css";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "Are you manufacturers or resellers?",
    answer:
      "We are trade brokers. We connect global buyers and suppliers and operate on a commission basis.",
  },
  {
    question: "What countries do you operate in?",
    answer:
      "We broker deals worldwide, with a strong presence across Asia, Africa, the Middle East, and Europe.",
  },
  {
    question: "Do you help with documentation and logistics?",
    answer:
      "Yes. We assist with documentation, contracts, freight handling, and third-party quality checks.",
  },
];

export default function FAQsPreview() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faqs-preview" aria-label="Frequently Asked Questions">
      <div className="container">
        <h2 className="section-title">Common Questions</h2>

        <ul className="faq-list">
          {faqs.map((faq, index) => (
            <li
              key={index}
              className={`faq-item ${active === index ? "active" : ""}`}
              onClick={() => toggle(index)}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                <ChevronDown
                  className={`icon ${active === index ? "rotated" : ""}`}
                  size={20}
                />
              </div>
              {active === index && <p className="faq-answer">{faq.answer}</p>}
            </li>
          ))}
        </ul>

        <div className="faq-cta">
          <Link to="/faqs" className="faq-link">
            See all FAQs →
          </Link>
        </div>
      </div>
    </section>
  );
}
