import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";
import "../styles/pages/NotFound.css";

export default function NotFound() {
  return (
    <div className="not-found-page">
      <motion.div 
        className="not-found-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="error-illustration"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="error-number">404</div>
          <div className="error-icon">
            <Search size={64} />
          </div>
        </motion.div>

        <motion.div 
          className="error-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h1>Page Not Found</h1>
          <p>
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back to exploring our global trade solutions.
          </p>
        </motion.div>

        <motion.div 
          className="error-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link to="/" className="home-button primary">
            <Home size={20} />
            Return to Homepage
          </Link>
          
          <button 
            onClick={() => window.history.back()} 
            className="back-button secondary"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </motion.div>

        <motion.div 
          className="helpful-links"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3>Popular Pages</h3>
          <div className="links-grid">
            <Link to="/about" className="helpful-link">
              <span className="link-icon">ℹ️</span>
              About Us
            </Link>
            <Link to="/services" className="helpful-link">
              <span className="link-icon">⚙️</span>
              Our Services
            </Link>
            <Link to="/products" className="helpful-link">
              <span className="link-icon">📦</span>
              Products
            </Link>
            <Link to="/contact" className="helpful-link">
              <span className="link-icon">📞</span>
              Contact
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}