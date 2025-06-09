import React from "react";
import { motion } from "framer-motion";
import "../styles/pages/Products.css";

export default function Products() {
  const categories = [
    {
      title: "Petrochemicals",
      description: "High-quality fuel and petrochemical products meeting international standards",
      image: "⛽",
      details: [
        "EN590 Diesel Fuel (10ppm)",
        "Jet Fuel A1",
        "Gasoline RON 95/98",
        "Heavy Fuel Oil",
        "Lubricating Oils"
      ],
      specifications: "ISO 8217, EN590, ASTM D975"
    },
    {
      title: "Aluminum Scrap & Ingots",
      description: "Premium quality aluminum materials for manufacturing sectors",
      image: "🏭",
      details: [
        "Aluminum Scrap 6063",
        "Aluminum Wire Scrap",
        "Re-melted Aluminum Ingots",
        "Primary Aluminum Ingots",
        "Aluminum Sheets & Coils"
      ],
      specifications: "ASTM B209, EN 573, JIS H4000"
    },
    {
      title: "Iron & Iron Ore",
      description: "Raw and processed iron products for steel manufacturing",
      image: "⚒️",
      details: [
        "Iron Ore Fines (Fe 62-65%)",
        "Iron Ore Pellets",
        "Sponge Iron (DRI)",
        "Cast Iron Scrap",
        "Steel Billets"
      ],
      specifications: "ISO 3082, ASTM A48, JIS G5501"
    },
    {
      title: "Textiles",
      description: "Fine fabrics and textile materials for global fashion industry",
      image: "🧵",
      details: [
        "Cotton Fabrics",
        "Polyester Blends",
        "Silk Materials",
        "Denim & Workwear",
        "Technical Textiles"
      ],
      specifications: "OEKO-TEX, GOTS, ISO 12947"
    },
    {
      title: "Leather",
      description: "Premium leather materials and products for luxury brands",
      image: "🛄",
      details: [
        "Finished Leather Hides",
        "Wet Blue Leather",
        "Vegetable Tanned Leather",
        "Exotic Leather",
        "Leather Accessories"
      ],
      specifications: "ISO 2589, ASTM D2813, EN ISO 17075"
    },
    {
      title: "Agricultural Products",
      description: "Quality agricultural commodities and food products",
      image: "🌾",
      details: [
        "Wheat & Grains",
        "Rice Varieties",
        "Pulses & Legumes",
        "Spices & Seasonings",
        "Processed Foods"
      ],
      specifications: "FDA, HACCP, ISO 22000"
    },
  ];

  return (
    <div className="products-page">
      <motion.div 
        className="products-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <h1>Our Products</h1>
          <p>Premium materials sourced from trusted global suppliers</p>
          <div className="hero-highlights">
            <div className="highlight">
              <span className="highlight-icon">🌍</span>
              <span>Global Sourcing</span>
            </div>
            <div className="highlight">
              <span className="highlight-icon">✅</span>
              <span>Quality Assured</span>
            </div>
            <div className="highlight">
              <span className="highlight-icon">📋</span>
              <span>Certified Standards</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="products-container">
        <motion.div 
          className="products-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Comprehensive Product Portfolio</h2>
          <p>We specialize in sourcing and trading high-quality materials across multiple industries. Each product category is carefully curated to meet international standards and customer specifications.</p>
        </motion.div>

        <div className="products-grid">
          {categories.map((category, index) => (
            <motion.div 
              key={index} 
              className="product-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="product-image">
                <span className="product-icon">{category.image}</span>
              </div>
              <div className="product-content">
                <h3>{category.title}</h3>
                <p className="product-description">{category.description}</p>
                
                <div className="product-details">
                  <h4>Product Range:</h4>
                  <ul className="product-list">
                    {category.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>

                <div className="product-specs">
                  <h4>Standards:</h4>
                  <span className="specs-badge">{category.specifications}</span>
                </div>

                <button className="learn-more">Request Quote</button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="products-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Need a specific product not listed?</h2>
          <p>Our global network can source virtually any material to meet your requirements.</p>
          <a href="/contact" className="cta-button">Contact Our Specialists</a>
        </motion.div>
      </div>
    </div>
  );
}