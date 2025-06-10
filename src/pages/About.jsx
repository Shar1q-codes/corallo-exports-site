import { motion } from "framer-motion";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <motion.div
      className={styles.about}
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
            <h1>About Corallo</h1>
            <p className={styles.subtitle}>
              Your trusted partner in global trade and commerce
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}