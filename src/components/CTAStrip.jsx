// ===============================
// 📦 Component: CTAStrip
// 🎯 Purpose: Encourage user action before footer
// ===============================

import "../styles/CTAStrip.css";
import { Link } from "react-router-dom";

export default function CTAStrip() {
  return (
    <section className="cta-strip" aria-label="Global Trade Call to Action">
      <div className="container cta-inner">
        <h2>Ready to power your next global trade deal?</h2>
        <Link to="/contact" className="cta-button">
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
