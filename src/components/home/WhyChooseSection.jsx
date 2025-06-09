/**
 * Why Choose Section Component
 * Highlighting Corallo's competitive advantages
 */

import { motion } from "framer-motion";
import { Globe, Handshake, ShieldCheck, Award } from "lucide-react";
import FadeInView from "../FadeInView";
import styles from "../../styles/WhyChooseSection.module.css";

export default function WhyChooseSection() {
  const advantages = [
    {
      icon: <Globe size={32} />,
      title: "Global Network",
      description: "Extensive partnerships with verified suppliers and buyers across 50+ countries.",
      stat: "500+ Partners"
    },
    {
      icon: <Handshake size={32} />,
      title: "Transparent Deals",
      description: "Clear commission structure and honest communication throughout every transaction.",
      stat: "100% Transparency"
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Compliance Expertise",
      description: "Strict adherence to international trade laws and quality certifications.",
      stat: "ISO Certified"
    },
    {
      icon: <Award size={32} />,
      title: "Proven Track Record",
      description: "15+ years of successful trade facilitation with 99% client satisfaction.",
      stat: "99% Success Rate"
    }
  ];

  return (
    <section className={styles.section} data-section="why-choose">
      <div className={styles.container}>
        <FadeInView className={styles.header}>
          <h2>Why Choose Corallo?</h2>
          <p>
            We combine industry expertise with global reach to deliver exceptional 
            results for our clients in international trade.
          </p>
        </FadeInView>

        <div className={styles.grid}>
          {advantages.map((advantage, index) => (
            <FadeInView
              key={index}
              delay={0.1 * index}
              className={styles.advantageCard}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  {advantage.icon}
                </div>
                <div className={styles.stat}>
                  {advantage.stat}
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3>{advantage.title}</h3>
                <p>{advantage.description}</p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}