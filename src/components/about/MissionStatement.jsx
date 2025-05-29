// ===============================
// 📦 Component: MissionStatement
// 🎯 Purpose: Display company's mission in a styled box
// ===============================

import React from "react";
import "../../styles/components/about/MissionStatement.css";

export default function MissionStatement() {
  return (
    <section className="about-block mission-statement">
      <h2>Our Mission</h2>
      <div className="mission-box">
        <p>
          To empower global trade by connecting businesses with trusted
          partners, ensuring quality, compliance, and cost-efficiency in every
          transaction.
        </p>
      </div>
    </section>
  );
}
