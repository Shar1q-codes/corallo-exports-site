/**
 * About Section Component
 * Brief overview of Corallo's mission and values
 */

import { motion } from "framer-motion";
import { ArrowRight, Globe, Shield, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../Button";
import FadeInView from "../FadeInView";
import styles from "../../styles/AboutSection.module.css";

export default function AboutSection() {
  const features = [
    {
      icon: <Globe size={24} />,
      title: "Global Network",
      description: "500+ verified partners worldwide"
    },
    {
      icon: <Shield size={24} />,
      title: "Secure Transactions",
      description: "100% compliance & transparency"
    },
    {
      icon: <Award size={24} />,
      title: "Quality Assurance",
      description: "ISO certified processes"
    },
    {
      icon: <Users size={24} />,
      title: "Expert Team",
      description: "15+ years industry experience"
    }
  ];

  const stats = [
    { number: "500+", label: "Global Partners" },
    { number: "50+", label: "Countries" },
    { number: "99%", label: "Success Rate" }
  ];

  return (
    <section className={styles.section} data-section="about">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Image Side */}
          <FadeInView direction="left" className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Business handshake representing global partnerships"
                loading="lazy"
              />
              <div className={styles.imageOverlay}>
                <div className={styles.overlayContent}>
                  <h3>15+ Years</h3>
                  <p>of Excellence in Global Trade</p>
                </div>
              </div>
            </div>
          </FadeInView>

          {/* Content Side */}
          <FadeInView direction="right" className={styles.content}>
            <h2>Connecting Markets. Empowering Trade.</h2>
            
            <p className={styles.description}>
              Corallo Export and Import Pvt Ltd is a trusted intermediary
              facilitating high-value global trade in petrochemicals, metals,
              textiles, and leather. We ensure compliant, smooth transactions
              powered by integrity and efficiency.
            </p>

            <div className={styles.features}>
              {features.map((feature, index) => (
                <FadeInView
                  key={index}
                  delay={0.1 * index}
                  className={styles.feature}
                >
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <div className={styles.featureContent}>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </FadeInView>
              ))}
            </div>

            <FadeInView delay={0.5} className={styles.stats}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.stat}>
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </FadeInView>

            <FadeInView delay={0.6}>
              <Button
                as={Link}
                to="/about"
                variant="primary"
                icon={<ArrowRight size={20} />}
              >
                Learn More About Us
              </Button>
            </FadeInView>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}