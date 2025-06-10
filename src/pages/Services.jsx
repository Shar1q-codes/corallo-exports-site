import { motion } from "framer-motion";
import styles from "../styles/Services.module.css";

export default function Services() {
  return (
    <motion.div
      className={styles.services}
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
            <h1>Our Services</h1>
            <p className={styles.subtitle}>
              Comprehensive trade solutions for your business needs
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}