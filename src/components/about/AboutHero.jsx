import React from "react";
import "../../styles/components/about/AboutHero.css";
import bannerImg from "../../assets/about/about-hero-handshake.png";

export default function AboutHero() {
  return (
    <div className="about-hero">
      <img
        src={bannerImg}
        alt="Business handshake at shipping port"
        loading="lazy"
      />
      <div className="about-hero-text">
        <h1>About Corallo Export and Import Pvt Ltd</h1>
        <p>Empowering Global Trade with Integrity & Innovation</p>
      </div>
    </div>
  );
}
