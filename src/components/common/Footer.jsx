// ===============================
// 📦 Component: Footer
// 🏠 Location: components/common/
// 🎯 Purpose: Global footer for all pages with premium enhancements
// ===============================

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import "../../styles/components/common/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  const handleFooterNavClick = () => {
    // Scroll to top when footer links are clicked
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Brand */}
        <motion.div 
          className="footer-brand"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Corallo Exports & Imports</h3>
          <p>
            Your trusted global trade partner, connecting businesses worldwide
            with quality products and reliable services.
          </p>
          <p className="footer-tagline">Built for the Long Haul</p>
          
          <div className="footer-certifications">
            <div className="cert-item">
              <span className="cert-icon">🏆</span>
              <span>ISO Certified</span>
            </div>
            <div className="cert-item">
              <span className="cert-icon">🔒</span>
              <span>Secure Trading</span>
            </div>
            <div className="cert-item">
              <span className="cert-icon">🌍</span>
              <span>Global Network</span>
            </div>
          </div>
        </motion.div>

        {/* Navigation Links */}
        <motion.div 
          className="footer-links"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/" onClick={handleFooterNavClick}>
                <i className="fas fa-home"></i>Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleFooterNavClick}>
                <i className="fas fa-info-circle"></i>About Us
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={handleFooterNavClick}>
                <i className="fas fa-cogs"></i>Services
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={handleFooterNavClick}>
                <i className="fas fa-box"></i>Products
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleFooterNavClick}>
                <i className="fas fa-envelope"></i>Contact
              </Link>
            </li>
            <li>
              <Link to="/faqs" onClick={handleFooterNavClick}>
                <i className="fas fa-question-circle"></i>FAQs
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          className="footer-contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4>Contact Us</h4>
          <ul className="contact-list">
            <li>
              <i className="fas fa-envelope"></i>
              <a href="mailto:info@coralloexim.com">info@coralloexim.com</a>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <a href="tel:+91XXXXXXXXXX">+91-XXXXXXXXXX</a>
            </li>
            <li>
              <i className="fas fa-globe"></i>
              <a
                href="https://www.coralloexim.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.coralloexim.com
              </a>
            </li>
            <li>
              <i className="fas fa-clock"></i>
              <span>Mon - Fri: 9:00 AM - 6:00 PM IST</span>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Mumbai, India</span>
            </li>
          </ul>
          
          <div className="footer-social">
            <h5>Follow Us</h5>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="footer-bottom-content">
          <p>© {year} Corallo Exports & Imports Pvt Ltd. All rights reserved.</p>
          <button 
            className="scroll-to-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </motion.div>
    </footer>
  );
}