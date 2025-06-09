// ===============================
// 📦 Component: Navigation
// 🏠 Location: components/common/
// 🎯 Purpose: Site-wide top navigation bar
// ===============================

import { Link, useLocation } from "react-router-dom";
import "../../styles/components/common/Navigation.css";

export default function Navigation() {
  const { pathname } = useLocation();

  const handleNavClick = () => {
    // Additional scroll to top for immediate feedback
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="nav-bar">
      <div className="container nav-inner">
        <Link to="/" onClick={handleNavClick}>
          <h2 className="nav-brand">Corallo Exports</h2>
        </Link>
        <ul className="nav-links">
          <li>
            <Link 
              to="/" 
              className={pathname === "/" ? "active" : ""}
              onClick={handleNavClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={pathname === "/about" ? "active" : ""}
              onClick={handleNavClick}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={pathname === "/services" ? "active" : ""}
              onClick={handleNavClick}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className={pathname === "/products" ? "active" : ""}
              onClick={handleNavClick}
            >
              Products
            </Link>
          </li>
          <li>
            <Link 
              to="/faqs" 
              className={pathname === "/faqs" ? "active" : ""}
              onClick={handleNavClick}
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={pathname === "/contact" ? "active" : ""}
              onClick={handleNavClick}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}