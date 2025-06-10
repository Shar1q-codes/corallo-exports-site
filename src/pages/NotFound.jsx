import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import Button from "../components/Button";
import styles from "../styles/NotFound.module.css";

export default function NotFound() {
  return (
    <motion.div
      className={styles.notFound}
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
            <div className={styles.errorCode}>404</div>
            <h1>Page Not Found</h1>
            <p className={styles.subtitle}>
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className={styles.actions}>
              <Button 
                as={Link} 
                to="/" 
                variant="primary" 
                icon={<Home size={20} />}
              >
                Go Home
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.history.back()}
                icon={<ArrowLeft size={20} />}
              >
                Go Back
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}