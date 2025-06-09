/**
 * Services Section Component
 * Showcase of Corallo's core service offerings
 */

import { motion } from "framer-motion";
import { Globe2, ShieldCheck, FileText, Truck, Banknote, Users } from "lucide-react";
import FadeInView from "../FadeInView";
import styles from "../../styles/ServicesSection.module.css";

export default function ServicesSection() {
  const services = [
    {
      icon: <Globe2 size={32} />,
      title: "Global Sourcing",
      description: "Connect with verified suppliers worldwide for premium products across multiple industries."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Quality Assurance",
      description: "Rigorous quality control ensuring international standards and certifications."
    },
    {
      icon: <FileText size={32} />,
      title: "Documentation",
      description: "Complete trade documentation and compliance support for seamless transactions."
    },
    {
      icon: <Truck size={32} />,
      title: "Logistics",
      description: "End-to-end logistics coordination with trusted shipping partners globally."
    },
    {
      icon: <Banknote size={32} />,
      title: "Secure Payments",
      description: "Safe transaction processing through Letters of Credit and verified gateways."
    },
    {
      icon: <Users size={32} />,
      title: "Expert Support",
      description: "Dedicated team providing market intelligence and trade consultation."
    }
  ];

  return (
    <section className={styles.section} data-section="services">
      <div className={styles.container}>
        <FadeInView className={styles.header}>
          <h2>Comprehensive Trade Solutions</h2>
          <p>
            From sourcing to delivery, we provide end-to-end support for your 
            global trade operations with expertise spanning multiple industries.
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
      </div>
    </section>
  );
}