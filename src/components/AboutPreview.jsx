// ===============================
// 📦 Component: AboutPreview
// 🎯 Purpose: Homepage About section preview
// ===============================

import "../styles/AboutPreview.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutPreview() {
  return (
    <section
      className="about-preview"
      aria-label="About Corallo Exports and Imports Overview"
    >
      <div className="about-container">
        {/* 🔹 Left Image Block */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/assets/about-preview.png"
            alt="Business handshake at port"
            loading="lazy"
          />
        </motion.div>

        {/* 🔹 Right Text Block */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Connecting Markets. Empowering Trade.
          </h2>

          <p className="about-text">
            Corallo Export and Import Pvt Ltd is a trusted intermediary
            facilitating high-value global trade in petrochemicals, metals,
            textiles, and leather. We ensure compliant, smooth transactions
            powered by integrity and efficiency.
          </p>

          <ul className="about-values" aria-label="Core Values List">
            <li>🌐 Global Network of Partners</li>
            <li>📄 Transparent Operations</li>
            <li>📦 End-to-End Trade Solutions</li>
            <li>✅ Quality & Compliance Assurance</li>
          </ul>

          <Link
            to="/about"
            className="about-cta"
            aria-label="Learn more about Corallo Export and Import"
          >
            Learn More →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
