/**
 * Hero Section Component
 * Main landing section with compelling value proposition
 */

import { motion } from "framer-motion";
import { ArrowRight, Play, Award, Globe, Shield } from "lucide-react";
import Button from "../Button";
import FadeInView from "../FadeInView";
import styles from "../../styles/HeroSection.module.css";

export default function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('[data-section="about"]');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const stats = [
    { number: "500+", label: "Global Partners" },
    { number: "50+", label: "Countries" },
    { number: "99%", label: "Success Rate" },
  ];

  const trustIndicators = [
    { icon: <Award size={20} />, label: "ISO Certified" },
    { icon: <Shield size={20} />, label: "Secure Trading" },
    { icon: <Globe size={20} />, label: "Global Network" },
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Empowering Global Trade
          </motion.h1>
          
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Premium brokerage services connecting businesses worldwide through 
            petrochemicals, metals, textiles, and leather trade
          </motion.p>

          <motion.div
            className={styles.stats}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <div key={index} className={styles.stat}>
                <span className={styles.number}>{stat.number}</span>
                <span className={styles.label}>{stat.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button
              variant="primary"
              size="large"
              onClick={scrollToAbout}
              icon={<ArrowRight size={20} />}
            >
              Get Started
            </Button>
            
            <Button
              variant="outline"
              size="large"
              icon={<Play size={18} />}
            >
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            className={styles.trust}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {trustIndicators.map((item, index) => (
              <div key={index} className={styles.trustItem}>
                <span className={styles.trustIcon}>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}