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
      icon: "⛽",
      title: "Petrochemicals",
      description: "EN590 diesel fuel, jet fuel, and high-grade petroleum products meeting international standards.",
      specs: "ISO 8217, EN590, ASTM D975"
    },
    {
      icon: "🏭",
      title: "Aluminum & Metals",
      description: "Premium aluminum scrap, re-melted ingots, and bulk iron ore for manufacturing sectors.",
      specs: "ASTM B209, EN 573, JIS H4000"
    },
    {
      icon: "🧵",
      title: "Textiles",
      description: "Fine fabrics, industrial textiles, and garment materials for global fashion industry.",
      specs: "OEKO-TEX, GOTS, ISO 12947"
    },
    {
      icon: "🛄",
      title: "Leather Products",
      description: "Premium leather materials from raw hides to finished goods for luxury brands.",
      specs: "ISO 2589, ASTM D2813, EN ISO 17075"
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeInView className={styles.header}>
          <h2>Premium Product Portfolio</h2>
          <p>
            We specialize in sourcing and trading high-quality materials across 
            multiple industries, each carefully curated to meet international standards.
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
                <span>{product.icon}</span>
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

        <FadeInView delay={0.6} className={styles.cta}>
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