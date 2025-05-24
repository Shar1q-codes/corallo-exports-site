// ===============================
// 📦 Component: Navigation
// 🏠 Location: components/common/
// 🎯 Purpose: Site-wide top navigation bar
// ===============================

import { Link, useLocation } from "react-router-dom";
import "../../styles/components/common/Navigation.css";

export default function Navigation() {
  const { pathname } = useLocation();

  return (
    <nav className="nav-bar">
      <div className="container nav-inner">
        <h2 className="nav-brand">Corallo Exports</h2>
        <ul className="nav-links">
          <li>
            <Link to="/" className={pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={pathname === "/about" ? "active" : ""}>
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={pathname === "/services" ? "active" : ""}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className={pathname === "/products" ? "active" : ""}
            >
              Products
            </Link>
          </li>
          <li>
            <Link to="/faqs" className={pathname === "/faqs" ? "active" : ""}>
              FAQs
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
