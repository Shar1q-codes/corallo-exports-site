/**
 * Services Page
 * Detailed overview of Corallo's service offerings
 */

import { motion } from "framer-motion";
import { 
  Globe2, 
  ShieldCheck, 
  FileText, 
  Truck, 
  Banknote, 
  Users,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import FadeInView from "../components/FadeInView";
import styles from "../styles/Services.module.css";

export default function Services() {
  const services = [
    {
      icon: <Globe2 size={40} />,
      title: "Global Sourcing & Procurement",
      description: "Connect with verified suppliers worldwide for premium products across multiple industries.",
      features: [
        "Supplier verification and due diligence",
        "Product quality assessment",
        "Competitive pricing negotiation",
        "Market intelligence and trends"
      ]
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Quality Assurance",
      description: "Rigorous quality control ensuring international standards and certifications.",
      features: [
        "ISO compliance verification",
        "Third-party inspection services",
        "Certificate of analysis provision",
        "Quality dispute resolution"
      ]
    },
    {
      icon: <FileText size={40} />,
      title: "Documentation & Compliance",
      description: "Complete trade documentation and compliance support for seamless transactions.",
      features: [
        "Export-import documentation",
        "Customs clearance assistance",
        "Regulatory compliance guidance",
        "Contract drafting and review"
      ]
    },
    {
      icon: <Truck size={40} />,
      title: "Logistics Coordination",
      description: "End-to-end logistics coordination with trusted shipping partners globally.",
      features: [
        "Freight forwarding arrangements",
        "Shipping route optimization",
        "Cargo insurance coordination",
        "Real-time shipment tracking"
      ]
    },
    {
      icon: <Banknote size={40} />,
      title: "Secure Payment Processing",
      description: "Safe transaction processing through Letters of Credit and verified gateways.",
      features: [
        "Letter of Credit facilitation",
        "Escrow service coordination",
        "Payment term negotiation",
        "Financial risk assessment"
      ]
    },
    {
      icon: <Users size={40} />,
      title: "Expert Consultation",
      description: "Dedicated team providing market intelligence and trade consultation.",
      features: [
        "Market analysis and insights",
        "Trade strategy development",
        "Risk assessment and mitigation",
        "Ongoing relationship management"
      ]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We understand your requirements and assess your trade needs."
    },
    {
      step: "02",
      title: "Partner Matching",
      description: "We identify and connect you with verified suppliers or buyers."
    },
    {
      step: "03",
      title: "Quality Verification",
      description: "We ensure products meet your specifications and standards."
    },
    {
      step: "04",
      title: "Transaction Support",
      description: "We facilitate secure payments and documentation."
    },
    {
      step: "05",
      title: "Logistics Coordination",
      description: "We manage shipping and delivery to your destination."
    },
    {
      step: "06",
      title: "Ongoing Support",
      description: "We provide continued support and relationship management."
    }
  ];

  return (
    <motion.main
      className={styles.page}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <FadeInView className={styles.heroContent}>
            <h1>Our Services</h1>
            <p>
              Comprehensive trade solutions designed to streamline your global 
              business operations and maximize your success in international markets.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Global Partners</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Countries</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.statNumber}>99%</span>
                <span className={styles.statLabel}>Success Rate</span>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      <div className={styles.container}>
        {/* Services Grid */}
        <section className={styles.section}>
          <FadeInView className={styles.sectionHeader}>
            <h2>Comprehensive Trade Solutions</h2>
            <p>
              From sourcing to delivery, we provide end-to-end support for your 
              global trade operations with expertise spanning multiple industries.
            </p>
          </FadeInView>
          
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <FadeInView
                key={index}
                delay={0.1 * index}
                className={styles.serviceCard}
              >
                <div className={styles.serviceIcon}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className={styles.featureList}>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <CheckCircle size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </FadeInView>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className={styles.section}>
          <FadeInView className={styles.sectionHeader}>
            <h2>Our Process</h2>
            <p>
              A streamlined approach to international trade that ensures 
              efficiency, transparency, and success at every step.
            </p>
          </FadeInView>
          
          <div className={styles.processGrid}>
            {process.map((step, index) => (
              <FadeInView
                key={index}
                delay={0.1 * index}
                className={styles.processStep}
              >
                <div className={styles.stepNumber}>{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </FadeInView>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <FadeInView className={styles.ctaContent}>
            <h2>Ready to Streamline Your Global Trade?</h2>
            <p>
              Let our experts handle the complexities while you focus on 
              growing your business. Contact us today to get started.
            </p>
            <Button
              as={Link}
              to="/contact"
              variant="primary"
              size="large"
              icon={<ArrowRight size={20} />}
            >
              Get Started Today
            </Button>
          </FadeInView>
        </section>
      </div>
    </motion.main>
  );
}