/**
 * Why Choose Section Component
 * Highlighting Corallo's unique value propositions
 */

import { motion } from "framer-motion";
import { Globe, Handshake, Shield, Layers } from "lucide-react";
import FadeInView from "../FadeInView";
import styles from "../../styles/WhyChooseSection.module.css";

export default function WhyChooseSection() {
  const reasons = [
    {
      icon: <Globe size={32} />,
      title: "Global Network",
      description: "Extensive connections with verified suppliers and buyers across Asia, Africa, Europe, and the Middle East."
    },
    {
      icon: <Handshake size={32} />,
      title: "Transparent Operations",
      description: "Our commission-based model is simple, honest, and agreed upon before any transaction begins."
    },
    {
      icon: <Shield size={32} />,
      title: "Compliance Expertise",
      description: "Strict adherence to international trade regulations, quality certifications, and environmental standards."
    },
    {
      icon: <Layers size={32} />,
      title: "End-to-End Solutions",
      description: "From sourcing and quality checks to documentation and delivery — we handle everything."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeInView className={styles.header}>
          <h2>Why Choose Corallo?</h2>
          <p>
            We combine global reach with local expertise to deliver exceptional 
            results for our partners worldwide.
          </p>
        </FadeInView>

        <div className={styles.grid}>
          {reasons.map((reason, index) => (
            <FadeInView
              key={index}
              delay={0.1 * index}
              className={styles.reasonCard}
            >
              <div className={styles.iconWrapper}>
                {reason.icon}
              </div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}