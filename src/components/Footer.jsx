/**
 * Footer Component
 * Premium footer with industrial luxury styling
 */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUp, Mail, Phone, MapPin, Clock } from "lucide-react";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/services", label: "Services" },
        { to: "/products", label: "Products" },
        { to: "/faqs", label: "FAQs" },
        { to: "/contact", label: "Contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { to: "/services", label: "Trade Brokerage" },
        { to: "/services", label: "Quality Assurance" },
        { to: "/services", label: "Logistics Support" },
        { to: "/services", label: "Market Intelligence" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: "info@coralloexports.com",
      href: "mailto:info@coralloexports.com",
    },
    {
      icon: <Phone size={18} />,
      label: "Phone",
      value: "+91 (123) 456-7890",
      href: "tel:+911234567890",
    },
    {
      icon: <MapPin size={18} />,
      label: "Location",
      value: "Mumbai, India",
    },
    {
      icon: <Clock size={18} />,
      label: "Hours",
      value: "Mon - Fri: 9:00 AM - 6:00 PM IST",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Section */}
          <motion.div
            className={styles.brand}
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
            <div className={styles.certifications}>
              <div className={styles.cert}>
                <span>🏆</span>
                <span>ISO Certified</span>
              </div>
              <div className={styles.cert}>
                <span>🔒</span>
                <span>Secure Trading</span>
              </div>
              <div className={styles.cert}>
                <span>🌍</span>
                <span>Global Network</span>
              </div>
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              className={styles.section}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
            >
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div
            className={styles.contact}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4>Contact Info</h4>
            <ul>
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <div className={styles.contactItem}>
                    <span className={styles.icon}>{item.icon}</span>
                    <div>
                      <span className={styles.label}>{item.label}</span>
                      {item.href ? (
                        <a href={item.href}>{item.value}</a>
                      ) : (
                        <span>{item.value}</span>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className={styles.bottom}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>
            © {currentYear} Corallo Exports & Imports Pvt Ltd. All rights
            reserved.
          </p>
          <button
            className={styles.scrollTop}
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </motion.div>
      </div>
    </footer>
  );
}