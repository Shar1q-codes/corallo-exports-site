// ===============================
// 📦 Component: Footer
// 🏠 Location: components/common/
// 🎯 Purpose: Global footer for all pages
// ===============================

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

  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Brand */}
        <div className="footer-brand">
          <h3>Corallo Exports & Imports</h3>
          <p>
            Your trusted global trade partner, connecting businesses worldwide
            with quality products and reliable services.
          </p>
          <p className="footer-tagline">Built for the Long Haul</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
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
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
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
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Corallo Exports & Imports Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}