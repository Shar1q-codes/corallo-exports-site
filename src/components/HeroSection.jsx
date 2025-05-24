// ===============================
// 📦 Component: HeroSection
// ===============================

import "../styles/HeroSection.css";

export default function HeroSection() {
  return (
    <section
      className="hero"
      role="banner"
      aria-label="Corallo Global Trade Hero Section"
    >
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <h1>Empowering Global Trade</h1>
        <p className="hero-tagline">
          In Petrochemicals, Metals, Textiles & More
        </p>
        <p className="hero-sub">
          Efficient Trade Brokerage · Verified Suppliers · Transparent
          Deal-Making
        </p>
        <button className="hero-btn" aria-label="Get in touch with Corallo">
          Get in Touch
        </button>
      </div>
    </section>
  );
}
