// ===============================
// 📦 Component: ProductHighlights
// 🎯 Purpose: Homepage product list section
// ===============================

import "../styles/ProductHighlights.css";

export default function ProductHighlights() {
  const products = [
    {
      emoji: "🛢️",
      title: "Petrochemicals",
      description:
        "EN590 diesel fuel and other high-grade petroleum products sourced globally.",
    },
    {
      emoji: "🧲",
      title: "Metals",
      description:
        "Aluminum scrap, re-melted ingots, and bulk iron ore for manufacturing sectors.",
    },
    {
      emoji: "🧵",
      title: "Textiles",
      description:
        "Raw fabrics, garments, and industrial textiles for global export.",
    },
    {
      emoji: "👞",
      title: "Leather",
      description:
        "From raw hides to premium finished leather goods for wholesalers and brands.",
    },
    {
      emoji: "📦",
      title: "Custom Trade Deals",
      description:
        "We help broker special trade requests for commodities on-demand.",
    },
  ];

  return (
    <section
      className="product-highlights"
      aria-label="Corallo Product Categories Overview"
    >
      <div className="product-container">
        <h2 className="section-title">What We Trade</h2>

        <ul className="product-list">
          {products.map((product, index) => (
            <li className="product-item" key={index}>
              <span className="emoji" aria-hidden="true">
                {product.emoji}
              </span>
              <div className="product-text">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
