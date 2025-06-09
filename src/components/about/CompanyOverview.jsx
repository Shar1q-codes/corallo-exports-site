// ===============================
// 📦 Component: CompanyOverview
// 🎯 Purpose: Display Corallo's business identity with text + visual split
// ===============================

import React from "react";
import { motion } from "framer-motion";
import "../../styles/components/about/CompanyOverview.css";
import tradeMap from "../../assets/about/world-trade-map.png";

export default function CompanyOverview() {
  return (
    <section className="about-block overview-split">
      {/* Left: Overview Text */}
      <motion.div 
        className="overview-text"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Who We Are</h2>
        <p>
          Corallo Export and Import Pvt Ltd is a leading brokerage firm based in
          India, specializing in global trade across petrochemicals, metals,
          textiles, and leather. We act as trusted intermediaries, connecting
          buyers and suppliers with integrity, transparency, and efficiency.
        </p>
        <div className="company-stats">
          <div className="stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">Global Partners</span>
          </div>
          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Countries Served</span>
          </div>
          <div className="stat">
            <span className="stat-number">15+</span>
            <span className="stat-label">Years Experience</span>
          </div>
        </div>
      </motion.div>

      {/* Right: Visual - World Map */}
      <motion.div 
        className="overview-image"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img
          src={tradeMap}
          alt="World trade map showing Corallo's global network"
          loading="lazy"
        />
        <div className="image-overlay">
          <div className="overlay-text">
            <h3>Global Reach</h3>
            <p>Connecting markets across continents</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}