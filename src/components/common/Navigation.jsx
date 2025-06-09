// ===============================
// 📦 Component: Navigation
// 🏠 Location: components/common/
// 🎯 Purpose: Site-wide top navigation bar
// ===============================

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "../../styles/components/common/Navigation.css";

export default function Navigation() {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav-bar">
      <div className="nav-inner">
        <Link to="/" className="nav-brand" onClick={closeMenu}>
          Corallo Exports
        </Link>
        
        <button 
          className="nav-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={pathname === "/" ? "active" : ""} 
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={pathname === "/about" ? "active" : ""} 
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={pathname === "/services" ? "active" : ""}
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className={pathname === "/products" ? "active" : ""}
              onClick={closeMenu}
            >
              Products
            </Link>
          </li>
          <li>
            <Link 
              to="/faqs" 
              className={pathname === "/faqs" ? "active" : ""} 
              onClick={closeMenu}
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={pathname === "/contact" ? "active" : ""}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}