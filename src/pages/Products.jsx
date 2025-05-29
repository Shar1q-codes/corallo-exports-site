import React from "react";
import "../styles/pages/Products.css";

export default function Products() {
  const categories = [
    {
      title: "Petrochemicals",
      description: "High-quality fuel and petrochemical products",
      image: "⛽", // Placeholder for actual image
    },
    {
      title: "Aluminum Scrap & Ingots",
      description: "Premium quality aluminum materials",
      image: "🏭", // Placeholder for actual image
    },
    {
      title: "Iron & Iron Ore",
      description: "Raw and processed iron products",
      image: "⚒️", // Placeholder for actual image
    },
    {
      title: "Textiles",
      description: "Fine fabrics and textile materials",
      image: "🧵", // Placeholder for actual image
    },
    {
      title: "Leather",
      description: "Premium leather materials and products",
      image: "🛄", // Placeholder for actual image
    },
  ];

  return (
    <div className="products-page">
      <div className="products-hero">
        <h1>Our Products</h1>
        <p>Premium materials sourced from trusted global suppliers</p>
      </div>

      <div className="products-container">
        <div className="products-grid">
          {categories.map((category, index) => (
            <div key={index} className="product-card">
              <div className="product-image">
                <span className="placeholder-icon">{category.image}</span>
              </div>
              <div className="product-content">
                <h2>{category.title}</h2>
                <p>{category.description}</p>
                <button className="learn-more">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
