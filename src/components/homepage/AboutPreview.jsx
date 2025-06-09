// ===============================
// 📦 Component: AboutPreview
// 🏠 Location: components/homepage/
// 🎯 Purpose: Homepage About section preview with premium enhancements
// ===============================

import "../../styles/components/homepage/AboutPreview.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Globe, Shield, Users } from "lucide-react";
import aboutPreviewImg from "../../assets/home/about-preview.png";

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
            src={aboutPreviewImg}
            alt="Business handshake at port"
            loading="lazy"
          />
          <div className="image-overlay">
            <div className="overlay-content">
              <h3>15+ Years</h3>
              <p>of Excellence in Global Trade</p>
            </div>
          </div>
        </motion.div>

        {/* 🔹 Right Text Block */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Connecting Markets. Empowering Trade.
          </motion.h2>

          <motion.p 
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Corallo Export and Import Pvt Ltd is a trusted intermediary
            facilitating high-value global trade in petrochemicals, metals,
            textiles, and leather. We ensure compliant, smooth transactions
            powered by integrity and efficiency.
          </motion.p>

          <motion.div 
            className="about-features"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="feature-item">
              <Globe className="feature-icon" size={24} />
              <div className="feature-text">
                <h4>Global Network</h4>
                <p>500+ verified partners worldwide</p>
              </div>
            </div>
            
            <div className="feature-item">
              <Shield className="feature-icon" size={24} />
              <div className="feature-text">
                <h4>Secure Transactions</h4>
                <p>100% compliance & transparency</p>
              </div>
            </div>
            
            <div className="feature-item">
              <Award className="feature-icon" size={24} />
              <div className="feature-text">
                <h4>Quality Assurance</h4>
                <p>ISO certified processes</p>
              </div>
            </div>
            
            <div className="feature-item">
              <Users className="feature-icon" size={24} />
              <div className="feature-text">
                <h4>Expert Team</h4>
                <p>15+ years industry experience</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-stats"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Global Partners</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Countries</span>
            </div>
            <div className="stat">
              <span className="stat-number">99%</span>
              <span className="stat-label">Success Rate</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <Link
              to="/about"
              className="about-cta"
              aria-label="Learn more about Corallo Export and Import"
            >
              Learn More About Us
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}