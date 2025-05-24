import React from "react";
import AboutHero from "../components/about/AboutHero";
import CompanyOverview from "../components/about/CompanyOverview";
import CoreValues from "../components/about/CoreValues";

export default function About() {
  return (
    <section className="about-section">
      <AboutHero />
      <div className="about-container">
        <CompanyOverview />
        <CoreValues />
      </div>
    </section>
  );
}
