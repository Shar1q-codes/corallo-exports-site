/**
 * Products Section Component
 * Showcase of Corallo's product categories
 */

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../Button";
import FadeInView from "../FadeInView";
import styles from "../../styles/ProductsSection.module.css";

export default function ProductsSection() {
  const products = [
    {
      emoji: "⛽",
      title: "Petrochemicals",
      description: "EN590 diesel fuel and premium petroleum products meeting international standards.",
      specs: "ISO 8217, EN590, ASTM D975"
    },
    {
      emoji: "🏭",
      title: "Aluminum & Metals",
      description: "High-grade aluminum scrap, ingots, and processed metals for manufacturing.",
      specs: "ASTM B209, EN 573, JIS H4000"
    },
    {
      emoji: "🧵",
      title: "Textiles",
      description: "Premium fabrics and textile materials for global fashion and industrial use.",
      specs: "OEKO-TEX, GOTS, ISO 12947"
    },
    {
      emoji: "🛄",
      title: "Leather Products",
      description: "Fine leather materials and finished goods for luxury brands worldwide.",
      specs: "ISO 2589, ASTM D2813, EN ISO 17075"
    }
  ];

  return (
    <section className={styles.section} data-section="products">
      <div className={styles.container}>
        <FadeInView className={styles.header}>
          <h2>Premium Product Portfolio</h2>
          <p>
            We specialize in sourcing and trading high-quality materials across 
            multiple industries, ensuring compliance with international standards.
          </p>
        </FadeInView>

        <div className={styles.grid}>
          {products.map((product, index) => (
            <FadeInView
              key={index}
              delay={0.1 * index}
              className={styles.productCard}
            >
              <div className={styles.productIcon}>
                <span>{product.emoji}</span>
              </div>
              <div className={styles.productContent}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <div className={styles.specs}>
                  <span className={styles.specsLabel}>Standards:</span>
                  <span className={styles.specsValue}>{product.specs}</span>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>

        <FadeInView delay={0.5} className={styles.cta}>
          <Button
            as={Link}
            to="/products"
            variant="primary"
            size="large"
            icon={<ArrowRight size={20} />}
          >
            View All Products
          </Button>
        </FadeInView>
      </div>
    </section>
  );
}