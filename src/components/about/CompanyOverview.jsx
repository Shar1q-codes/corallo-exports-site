// ===============================
// 📦 Component: CompanyOverview
// 🎯 Purpose: Display Corallo’s business identity with text + visual split
// ===============================

import React from "react";
import "../../styles/components/about/CompanyOverview.css";
import tradeMap from "../../assets/about/world-trade-map.png";

export default function CompanyOverview() {
  return (
    <section className="about-block overview-split">
      {/* Left: Overview Text */}
      <div className="overview-text">
        <h2>Who We Are</h2>
        <p>
          Corallo Export and Import Pvt Ltd is a leading brokerage firm based in
          India, specializing in global trade across petrochemicals, metals,
          textiles, and leather. We act as trusted intermediaries, connecting
          buyers and suppliers with integrity, transparency, and efficiency.
        </p>
      </div>

      {/* Right: Visual - World Map */}
      <div className="overview-image">
        <img
          src={tradeMap}
          alt="World trade map showing Corallo’s global network"
          loading="lazy"
        />
      </div>
    </section>
  );
}
