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
          <h2>Ready to Expand Your Global Trade?</h2>
          <p>
            Join hundreds of successful businesses who trust Corallo for their 
            international trade needs. Let's discuss how we can help you grow.
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
            
            <div className={styles.quickContact}>
              <a href="mailto:info@coralloexports.com" className={styles.contactLink}>
                <Mail size={18} />
                <span>info@coralloexports.com</span>
              </a>
              <a href="tel:+911234567890" className={styles.contactLink}>
                <Phone size={18} />
                <span>+91 (123) 456-7890</span>
              </a>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}