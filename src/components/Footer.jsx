// ===============================
// 📦 Component: Footer
// 🎯 Purpose: Global footer for all pages
// ===============================

import "../styles/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Brand */}
        <div className="footer-brand">
          <h3>Corallo Exports & Imports</h3>
          <p>Your trusted global trade partner.</p>
          <p className="footer-tagline">Built for the Long Haul.</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: info@coralloexports.com</p>
          <p>Phone: +91 99988 87777</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Corallo Exports & Imports Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}
