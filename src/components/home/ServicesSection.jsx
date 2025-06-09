/**
 * Services Section Component
 * Overview of Corallo's core services
 */

import { motion } from "framer-motion";
import { ArrowRight, Search, Shield, FileText, Truck, CreditCard, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../Button";
import FadeInView from "../FadeInView";
import styles from "../../styles/ServicesSection.module.css";

export default function ServicesSection() {
  const services = [
    {
      icon: <Search size={32} />,
      title: "Sourcing & Procurement",
      description: "Connect with verified global suppliers for premium products across multiple industries."
    },
    {
      icon: <Shield size={32} />,
      title: "Quality Assurance",
      description: "Ensure international standards compliance with ISO certifications and third-party testing."
    },
    {
      icon: <FileText size={32} />,
      title: "Contract Management",
      description: "Secure trade contracts with transparent terms and comprehensive legal compliance."
    },
    {
      icon: <Truck size={32} />,
      title: "Logistics Coordination",
      description: "Seamless global shipping through trusted freight partners and real-time tracking."
    },
    {
      icon: <CreditCard size={32} />,
      title: "Payment Facilitation",
      description: "Secure transactions via Letters of Credit, escrow services, and verified gateways."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Market Intelligence",
      description: "Strategic insights on market trends, pricing analysis, and growth opportunities."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeInView className={styles.header}>
          <h2>Comprehensive Trade Solutions</h2>
          <p>
            From initial sourcing to final delivery, we provide end-to-end support 
            for your global trade operations with the highest standards of quality and efficiency.
          </p>
        </FadeInView>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <FadeInView
              key={index}
              delay={0.1 * index}
              className={styles.serviceCard}
            >
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </FadeInView>
          ))}
        </div>

        <FadeInView delay={0.8} className={styles.cta}>
          <Button
            as={Link}
            to="/services"
            variant="primary"
            size="large"
            icon={<ArrowRight size={20} />}
          >
            Explore All Services
          </Button>
        </FadeInView>
      </div>
    </section>
  );
}