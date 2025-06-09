/**
 * CTA Section Component
 * Final call-to-action before footer
 */

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../Button";
import FadeInView from "../FadeInView";
import styles from "../../styles/CTASection.module.css";

export default function CTASection() {
  return (
    <section className={styles.section} data-section="cta">
      <div className={styles.container}>
        <FadeInView className={styles.content}>
          <h2>Ready to Power Your Next Global Trade Deal?</h2>
          <p>
            Join hundreds of satisfied clients who trust Corallo for their 
            international trade requirements. Let's discuss how we can help 
            your business grow.
          </p>

          <div className={styles.actions}>
            <Button
              as={Link}
              to="/contact"
              variant="primary"
              size="large"
              icon={<ArrowRight size={20} />}
            >
              Get Started Today
            </Button>

            <div className={styles.quickActions}>
              <a 
                href="mailto:info@coralloexports.com"
                className={styles.quickAction}
              >
                <Mail size={18} />
                Email Us
              </a>
              <a 
                href="tel:+911234567890"
                className={styles.quickAction}
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>Support</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>48h</span>
              <span className={styles.statLabel}>Response Time</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Satisfaction</span>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}