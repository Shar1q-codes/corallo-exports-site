// ===============================
// 📦 Component: ServicesPreview
// 🏠 Location: components/homepage/
// 🎯 Purpose: Homepage services snapshot
// ===============================

import "../../styles/components/homepage/ServicesPreview.css";
import {
  Globe2,
  ShieldCheck,
  FileText,
  Truck,
  Banknote,
  Users,
} from "lucide-react";

export default function ServicesPreview() {
  const services = [
    {
      icon: <Globe2 size={32} strokeWidth={1.75} />,
      title: "Verified Sourcing",
      description:
        "Connect with global, compliant suppliers for petrochemicals, metals, and textiles.",
    },
    {
      icon: <ShieldCheck size={32} strokeWidth={1.75} />,
      title: "Quality Assurance",
      description:
        "Ensure international standards like EN590, ISO, and material specs are met.",
    },
    {
      icon: <FileText size={32} strokeWidth={1.75} />,
      title: "Documentation Help",
      description:
        "Full support with trade contracts, export-import paperwork, and compliance.",
    },
    {
      icon: <Truck size={32} strokeWidth={1.75} />,
      title: "Logistics Coordination",
      description:
        "We liaise with trusted freight and shipping partners for smooth delivery.",
    },
    {
      icon: <Banknote size={32} strokeWidth={1.75} />,
      title: "Secure Payment Flow",
      description:
        "Safe transactions via Letters of Credit, escrow accounts, or verified gateways.",
    },
    {
      icon: <Users size={32} strokeWidth={1.75} />,
      title: "Market Matchmaking",
      description:
        "We match demand and supply, creating high-value connections between buyers and sellers.",
    },
  ];

  return (
    <section
      className="services-preview"
      aria-label="Corallo Services Overview"
    >
      <div className="services-container">
        <h2 className="section-title">What We Offer</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="icon-wrapper">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
