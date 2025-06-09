/**
 * Products Page Component
 * Comprehensive showcase of Corallo's product portfolio
 */

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Award, Globe, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import FadeInView from "../components/FadeInView";
import styles from "../styles/pages/Products.module.css";

export default function Products() {
  const categories = [
    {
      title: "Petrochemicals",
      description: "High-quality fuel and petrochemical products meeting international standards",
      icon: "⛽",
      details: [
        "EN590 Diesel Fuel (10ppm)",
        "Jet Fuel A1",
        "Gasoline RON 95/98",
        "Heavy Fuel Oil",
        "Lubricating Oils"
      ],
      specifications: "ISO 8217, EN590, ASTM D975",
      image: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      title: "Aluminum & Metals",
      description: "Premium quality aluminum materials for manufacturing sectors",
      icon: "🏭",
      details: [
        "Aluminum Scrap 6063",
        "Aluminum Wire Scrap",
        "Re-melted Aluminum Ingots",
        "Primary Aluminum Ingots",
        "Iron Ore Fines (Fe 62-65%)"
      ],
      specifications: "ASTM B209, EN 573, JIS H4000",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      title: "Textiles",
      description: "Fine fabrics and textile materials for global fashion industry",
      icon: "🧵",
      details: [
        "Cotton Fabrics",
        "Polyester Blends",
        "Silk Materials",
        "Denim & Workwear",
        "Technical Textiles"
      ],
      specifications: "OEKO-TEX, GOTS, ISO 12947",
      image: "https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      title: "Leather Products",
      description: "Premium leather materials and products for luxury brands",
      icon: "🛄",
      details: [
        "Finished Leather Hides",
        "Wet Blue Leather",
        "Vegetable Tanned Leather",
        "Exotic Leather",
        "Leather Accessories"
      ],
      specifications: "ISO 2589, ASTM D2813, EN ISO 17075",
      image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    }
  ];

  const highlights = [
    { icon: <Globe size={20} />, label: "Global Sourcing" },
    { icon: <CheckCircle size={20} />, label: "Quality Assured" },
    { icon: <Award size={20} />, label: "Certified Standards" },
    { icon: <Shield size={20} />, label: "Compliance Ready" }
  ];

  return (
    <motion.div 
      className={styles.page}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <FadeInView className={styles.heroContent}>
            <h1>Premium Product Portfolio</h1>
            <p>
              Comprehensive range of high-quality materials sourced from trusted 
              global suppliers, meeting the highest international standards.
            </p>
            
            <div className={styles.highlights}>
              {highlights.map((highlight, index) => (
                <div key={index} className={styles.highlight}>
                  {highlight.icon}
                  <span>{highlight.label}</span>
                </div>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Products Grid */}
      <section className={styles.products}>
        <div className={styles.container}>
          <FadeInView className={styles.intro}>
            <h2>Our Product Categories</h2>
            <p>
              Each product category is carefully curated to meet international 
              standards and customer specifications across multiple industries.
            </p>
          </FadeInView>

          <div className={styles.grid}>
            {categories.map((category, index) => (
              <FadeInView
                key={index}
                delay={0.1 * index}
                className={styles.productCard}
              >
                <div className={styles.cardImage}>
                  <img src={category.image} alt={category.title} loading="lazy" />
                  <div className={styles.cardOverlay}>
                    <span className={styles.cardIcon}>{category.icon}</span>
                  </div>
                </div>
                
                <div className={styles.cardContent}>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  
                  <div className={styles.details}>
                    <h4>Product Range:</h4>
                    <ul>
                      {category.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.specs}>
                    <h4>Standards:</h4>
                    <span className={styles.specsBadge}>{category.specifications}</span>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <FadeInView className={styles.ctaContent}>
            <h2>Need a Specific Product?</h2>
            <p>
              Our global network can source virtually any material to meet your 
              exact requirements. Contact our specialists for custom solutions.
            </p>
            <Button
              as={Link}
              to="/contact"
              variant="primary"
              size="large"
              icon={<ArrowRight size={20} />}
            >
              Contact Our Specialists
            </Button>
          </FadeInView>
        </div>
      </section>
    </motion.div>
  );
}