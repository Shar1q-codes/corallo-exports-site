import React from "react";
import AboutHero from "../components/about/AboutHero";
import CompanyOverview from "../components/about/CompanyOverview";
import CoreValues from "../components/about/CoreValues";
import MissionStatement from "../components/about/MissionStatement";
import ServicesOffered from "../components/about/ServicesOffered";
import IndustryExpertise from "../components/about/IndustryExpertise";
import WhyChooseUs from "../components/about/WhyChooseUs";
import Testimonials from "../components/about/Testimonials";
import ContactBlock from "../components/about/ContactBlock";
import "../styles/pages/About.css";

export default function About() {
  return (
    <section className="about-section">
      <AboutHero />
      <div className="about-container">
        <CompanyOverview />
        <MissionStatement />
        <CoreValues />
        <ServicesOffered />
        <IndustryExpertise />
        <WhyChooseUs />
        <Testimonials />
        <ContactBlock />
      </div>
    </section>
  );
}
