import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Globe, Users } from "lucide-react";
import Button from "../components/Button";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <motion.div
      className={styles.home}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1>Global Trade Solutions</h1>
            <p className={styles.heroSubtitle}>
              Connecting businesses worldwide through reliable export and import services. 
              Your trusted partner in international trade.
            </p>
            <div className={styles.heroActions}>
              <Button variant="primary" size="large" icon={<ArrowRight size={20} />}>
                Get Started
              </Button>
              <Button variant="outline" size="large">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-secondary">
        <div className="container">
          <motion.div
            className={styles.featuresGrid}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={styles.featureCard}>
              <Globe size={48} className={styles.featureIcon} />
              <h3>Global Network</h3>
              <p>Extensive network of trusted partners across multiple continents</p>
            </div>
            <div className={styles.featureCard}>
              <CheckCircle size={48} className={styles.featureIcon} />
              <h3>Quality Assurance</h3>
              <p>Rigorous quality control processes ensuring premium standards</p>
            </div>
            <div className={styles.featureCard}>
              <Users size={48} className={styles.featureIcon} />
              <h3>Expert Team</h3>
              <p>Experienced professionals dedicated to your success</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Expand Your Business?</h2>
            <p className={styles.ctaText}>
              Let us help you navigate the complexities of international trade
            </p>
            <Button variant="primary" size="large" icon={<ArrowRight size={20} />}>
              Contact Us Today
            </Button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}