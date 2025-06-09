import React from "react";
import { motion } from "framer-motion";
import "../../styles/components/about/AboutHero.css";
import bannerImg from "../../assets/about/about-hero-handshake.png";

export default function AboutHero() {
  return (
    <div className="about-hero">
      <img
        src={bannerImg}
        alt="Business handshake at shipping port"
        loading="lazy"
      />
      <div className="about-hero-overlay" />
      <motion.div 
        className="about-hero-text"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          About Corallo Export and Import Pvt Ltd
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Empowering Global Trade with Integrity & Innovation
        </motion.p>
        
        <motion.div 
          className="hero-highlights"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="highlight">
            <span className="highlight-icon">🌍</span>
            <span>Global Network</span>
          </div>
          <div className="highlight">
            <span className="highlight-icon">🤝</span>
            <span>Trusted Partners</span>
          </div>
          <div className="highlight">
            <span className="highlight-icon">⚡</span>
            <span>Expert Solutions</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}