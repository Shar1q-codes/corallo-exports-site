// ===============================
// 📦 Component: IndustryExpertise
// 🎯 Purpose: Display industry specializations in split blocks
// ===============================

import React from "react";
import "../../styles/components/about/IndustryExpertise.css";

export default function IndustryExpertise() {
  const industries = [
    {
      title: "Petrochemicals",
      description:
        "Specializing in EN590 diesel fuel (10ppm), collaborating with refineries and distributors across the Middle East, Europe, and Asia.",
    },
    {
      title: "Metals",
      description:
        "Facilitating high-volume trades in aluminum scrap, ingots, and iron ore.",
    },
    {
      title: "Textiles & Leather",
      description:
        "Providing high-quality materials sourced from trusted manufacturers globally.",
    },
  ];

  return (
    <section className="about-block industry-expertise">
      <h2>Industry Expertise</h2>
      <div className="industry-blocks">
        {industries.map((industry, index) => (
          <div key={index} className="industry-block">
            <div className="industry-content">
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
