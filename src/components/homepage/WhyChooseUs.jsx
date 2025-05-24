// ===============================
// 📦 Component: WhyChooseUs
// 🏠 Location: components/homepage/
// 🎯 Purpose: Trust-building section for homepage
// ===============================

import "../../styles/components/homepage/WhyChooseUs.css";
import { Globe, Handshake, ShieldCheck, Layers3 } from "lucide-react";

export default function WhyChooseUs() {
  const values = [
    {
      icon: <Globe size={32} strokeWidth={1.75} />,
      title: "Global Network",
      description:
        "We connect suppliers and buyers across Asia, Africa, Europe, and the Middle East through verified channels.",
    },
    {
      icon: <Handshake size={32} strokeWidth={1.75} />,
      title: "Transparent Deals",
      description:
        "Our commission-based model is simple, honest, and agreed upon before any transaction begins.",
    },
    {
      icon: <ShieldCheck size={32} strokeWidth={1.75} />,
      title: "Compliance Expertise",
      description:
        "We operate with strict adherence to trade regulations, quality certifications, and environmental standards.",
    },
    {
      icon: <Layers3 size={32} strokeWidth={1.75} />,
      title: "End-to-End Solutions",
      description:
        "From sourcing and quality checks to documentation and delivery — we handle it all, start to finish.",
    },
  ];

  return (
    <section className="why-choose-us" aria-label="Why Choose Corallo">
      <div className="container">
        <h2 className="section-title">Why Choose Corallo?</h2>

        <div className="why-grid">
          {values.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
