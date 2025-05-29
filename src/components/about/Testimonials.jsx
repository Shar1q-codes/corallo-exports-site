// ===============================
// 📦 Component: Testimonials
// 🎯 Purpose: Display client testimonials in styled cards
// ===============================

import React from "react";
import "../../styles/components/about/Testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Corallo's expertise in petrochemical trading has been invaluable. Their commitment to quality and transparency sets them apart in the industry.",
      author: "Ahmed Rahman",
      position: "Procurement Director, Gulf Energy Solutions",
    },
    {
      quote:
        "We've been working with Corallo for our metal trading needs, and their service has been exceptional. Their global network and professional approach make complex trades seamless.",
      author: "Sarah Chen",
      position: "CEO, Asian Metals Trading Co.",
    },
  ];

  return (
    <section className="about-block testimonials">
      <h2>Client Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="quote-mark">❝</div>
            <blockquote>
              <p>{testimonial.quote}</p>
              <footer>
                <strong>{testimonial.author}</strong>
                <span>{testimonial.position}</span>
              </footer>
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
}
