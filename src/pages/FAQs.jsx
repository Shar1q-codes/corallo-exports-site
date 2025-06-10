import { motion } from "framer-motion";
import styles from "../styles/FAQs.module.css";

export default function FAQs() {
  return (
    <motion.div
      className={styles.faqs}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="section">
        <div className="container">
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Frequently Asked Questions</h1>
            <p className={styles.subtitle}>
              Find answers to common questions about our services
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}