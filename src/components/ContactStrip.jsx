// ===============================
// 📦 Component: ContactStrip
// 🎯 Purpose: Mid-page CTA for direct communication
// ===============================

import "../styles/ContactStrip.css";
import { Mail, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactStrip() {
  return (
    <section className="contact-strip" aria-label="Quick Contact Options">
      <div className="container contact-inner">
        <h2>Need a trusted trade partner? Let's talk.</h2>

        <div className="contact-actions">
          <a
            href="https://wa.me/919998887777"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            <PhoneCall size={18} /> WhatsApp
          </a>

          <a href="mailto:info@coralloexports.com" className="contact-btn">
            <Mail size={18} /> Email Us
          </a>

          <Link to="/contact" className="contact-btn outline">
            Contact Page →
          </Link>
        </div>
      </div>
    </section>
  );
}
