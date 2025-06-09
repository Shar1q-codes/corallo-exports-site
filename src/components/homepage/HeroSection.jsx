// ===============================
// 📦 Component: HeroSection
// 🏠 Location: components/homepage/
// 🎯 Purpose: Homepage hero banner with premium enhancements
// ===============================

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import "../../styles/components/homepage/HeroSection.css";
import heroBg from "../../assets/home/hero-background.png";

export default function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('.about-preview');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="hero"
      style={{ background: `url(${heroBg}) center/cover no-repeat` }}
      role="banner"
      aria-label="Corallo Global Trade Hero Section"
    >
      <div className="hero-overlay" aria-hidden="true" />
      
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Empowering Global Trade
        </motion.h1>
        
        <motion.p 
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          In Petrochemicals, Metals, Textiles & More
        </motion.p>
        
        <motion.p 
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Efficient Trade Brokerage · Verified Suppliers · Transparent Deal-Making
        </motion.p>

        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <div className="hero-stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">Global Partners</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Countries</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number">99%</span>
            <span className="stat-label">Success Rate</span>
          </div>
        </motion.div>

        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <button 
            className="hero-btn primary" 
            onClick={scrollToAbout}
            aria-label="Get in touch with Corallo"
          >
            Get Started
            <ArrowRight size={20} />
          </button>
          
          <button className="hero-btn secondary">
            <Play size={18} />
            Watch Demo
          </button>
        </motion.div>

        <motion.div 
          className="hero-trust-indicators"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="trust-item">
            <span className="trust-icon">🏆</span>
            <span>ISO Certified</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">🔒</span>
            <span>Secure Transactions</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">⚡</span>
            <span>24/7 Support</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}