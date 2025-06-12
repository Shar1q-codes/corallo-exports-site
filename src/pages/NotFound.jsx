import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search, Mail } from "lucide-react";
import CTAButton from "../components/CTAButton";
import SEOHead from "../components/SEOHead";
import styles from "../styles/NotFound.module.css";

export default function NotFound() {
  const quickLinks = [
    { to: "/", label: "Home", icon: <Home size={20} /> },
    { to: "/about", label: "About Us", icon: <Search size={20} /> },
    { to: "/services", label: "Services", icon: <Search size={20} /> },
    { to: "/products", label: "Products", icon: <Search size={20} /> },
    { to: "/contact", label: "Contact", icon: <Mail size={20} /> }
  ];

  return (
    <>
      <SEOHead
        title="Page Not Found - 404 Error | Corallo Export Import"
        description="The page you're looking for doesn't exist. Navigate back to Corallo's main pages for international trade brokerage services and global commerce solutions."
        canonicalUrl="/404"
        noIndex={true}
      />
      
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
                Looks like you've wandered off the trade route. The page you're looking for 
                doesn't exist or has been moved to a new location.
              </p>
              
              <div className={styles.description}>
                <p>
                  Don't worry! You can navigate back to our main pages or contact our team 
                  if you need assistance finding specific information about our trade services.
                </p>
              </div>
              
              <div className={styles.actions}>
                <CTAButton 
                  as={Link} 
                  to="/" 
                  variant="primary" 
                  size="large"
                  icon={<Home size={20} />}
                >
                  Go Home
                </CTAButton>
                <CTAButton 
                  variant="outline" 
                  size="large"
                  onClick={() => window.history.back()}
                  icon={<ArrowLeft size={20} />}
                >
                  Go Back
                </CTAButton>
              </div>
              
              <div className={styles.quickLinks}>
                <h3>Quick Navigation</h3>
                <div className={styles.linksGrid}>
                  {quickLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={styles.quickLink}
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className={styles.helpSection}>
                <h3>Need Help?</h3>
                <p>
                  If you were looking for specific trade information or services, 
                  our team is here to assist you.
                </p>
                <CTAButton 
                  as={Link} 
                  to="/contact" 
                  variant="secondary" 
                  size="medium"
                  icon={<Mail size={20} />}
                >
                  Contact Support
                </CTAButton>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
}