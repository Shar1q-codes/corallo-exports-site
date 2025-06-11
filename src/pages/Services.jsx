import { motion } from "framer-motion";
import { CheckCircle, Globe, TrendingUp, FileText, Shield, Users } from "lucide-react";
import FadeInView from "../components/FadeInView";
import CTAButton from "../components/CTAButton";
import styles from "../styles/Services.module.css";

export default function Services() {
  const services = [
    {
      icon: <CheckCircle size={48} />,
      title: "Verified Sourcing",
      description: "Connect with pre-verified suppliers and manufacturers worldwide. Our rigorous vetting process ensures you work with reliable, quality-focused partners.",
      features: ["Supplier verification", "Quality assessments", "Financial background checks", "Compliance verification"]
    },
    {
      icon: <Globe size={48} />,
      title: "Market Matchmaking",
      description: "Leverage our extensive global network to find the perfect buyers or sellers for your specific requirements in petrochemicals, metals, and textiles.",
      features: ["Buyer-seller matching", "Market analysis", "Price negotiations", "Deal structuring"]
    },
    {
      icon: <FileText size={48} />,
      title: "Documentation and Logistics",
      description: "Complete support for international trade documentation, customs clearance, and logistics coordination to ensure smooth transactions.",
      features: ["Trade documentation", "Customs clearance", "Shipping coordination", "Insurance assistance"]
    },
    {
      icon: <TrendingUp size={48} />,
      title: "Market Updates and Trends",
      description: "Stay ahead with real-time market intelligence, pricing trends, and industry insights to make informed trading decisions.",
      features: ["Market reports", "Price tracking", "Industry analysis", "Trend forecasting"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We understand your specific trade requirements and objectives"
    },
    {
      step: "02",
      title: "Partner Matching",
      description: "We identify and connect you with verified trading partners"
    },
    {
      step: "03",
      title: "Deal Facilitation",
      description: "We assist in negotiations and deal structuring"
    },
    {
      step: "04",
      title: "Transaction Support",
      description: "We provide ongoing support until successful completion"
    }
  ];

  return (
    <motion.div
      className={styles.services}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Our Services</h1>
            <p className={styles.subtitle}>
              Comprehensive trade solutions for your business needs
            </p>
            <p className={styles.heroDescription}>
              Value-driven, compliant, commission-based trade brokerage services that connect 
              global buyers and sellers through transparent and efficient processes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.servicesSection}>
        <div className="container">
          <FadeInView>
            <div className={styles.sectionHeader}>
              <h2>Our Core Services</h2>
              <p>Comprehensive brokerage solutions designed to facilitate successful international trade</p>
            </div>
          </FadeInView>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <FadeInView key={index} delay={0.1 * index}>
                <div className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className={styles.featuresList}>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <CheckCircle size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className="container">
          <FadeInView>
            <div className={styles.sectionHeader}>
              <h2>Our Process</h2>
              <p>A streamlined approach to international trade brokerage</p>
            </div>
          </FadeInView>

          <div className={styles.processGrid}>
            {processSteps.map((step, index) => (
              <FadeInView key={index} delay={0.1 * index}>
                <div className={styles.processCard}>
                  <div className={styles.stepNumber}>{step.step}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className="container">
          <div className={styles.benefitsGrid}>
            <FadeInView>
              <div className={styles.benefitsContent}>
                <h2>Why Choose Our Services</h2>
                <p>
                  Our commission-based model ensures our success is directly tied to yours. 
                  We only succeed when you succeed, creating a true partnership approach to international trade.
                </p>
                
                <div className={styles.benefitsList}>
                  <div className={styles.benefit}>
                    <Shield size={24} />
                    <div>
                      <h4>Risk Mitigation</h4>
                      <p>Comprehensive due diligence and verification processes</p>
                    </div>
                  </div>
                  <div className={styles.benefit}>
                    <Users size={24} />
                    <div>
                      <h4>Expert Support</h4>
                      <p>Dedicated team of trade professionals</p>
                    </div>
                  </div>
                  <div className={styles.benefit}>
                    <Globe size={24} />
                    <div>
                      <h4>Global Network</h4>
                      <p>Extensive partnerships across 50+ countries</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInView>
            
            <FadeInView delay={0.2}>
              <div className={styles.benefitsImage}>
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Global trade services" 
                />
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container text-center">
          <FadeInView>
            <div className={styles.ctaContent}>
              <h2>Ready to Start Trading?</h2>
              <p>
                Let our experienced team help you navigate the complexities of international trade 
                and connect you with the right partners for your business success.
              </p>
              <CTAButton variant="primary" size="large">
                Get Started Today
              </CTAButton>
            </div>
          </FadeInView>
        </div>
      </section>
    </motion.div>
  );
}