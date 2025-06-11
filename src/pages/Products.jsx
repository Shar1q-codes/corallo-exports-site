import { motion } from "framer-motion";
import { Droplets, Zap, Shirt, Package, ArrowRight } from "lucide-react";
import FadeInView from "../components/FadeInView";
import CTAButton from "../components/CTAButton";
import styles from "../styles/Products.module.css";

export default function Products() {
  const products = [
    {
      icon: <Droplets size={48} />,
      title: "Petrochemicals",
      description: "Wide range of petrochemical products including polymers, chemicals, and refined petroleum products sourced from verified global suppliers.",
      specifications: "Various grades and specifications",
      applications: "Manufacturing, Industrial, Chemical processing"
    },
    {
      icon: <Zap size={48} />,
      title: "Aluminium Scrap & Ingots",
      description: "High-quality aluminium scrap and ingots from certified suppliers, meeting international standards for purity and composition.",
      specifications: "99.7% purity and above",
      applications: "Automotive, Aerospace, Construction"
    },
    {
      icon: <Package size={48} />,
      title: "Iron & Iron Ore",
      description: "Premium iron ore and iron products sourced from reliable mining operations and steel manufacturers worldwide.",
      specifications: "Fe content 60-67%",
      applications: "Steel production, Construction, Manufacturing"
    },
    {
      icon: <Shirt size={48} />,
      title: "Textiles",
      description: "Diverse range of textile products including fabrics, yarns, and finished garments from established textile manufacturers.",
      specifications: "Various fiber compositions",
      applications: "Fashion, Home textiles, Industrial textiles"
    },
    {
      icon: <Package size={48} />,
      title: "Leather",
      description: "High-quality leather products and raw materials from certified tanneries, meeting international quality and environmental standards.",
      specifications: "Full grain and top grain",
      applications: "Fashion, Automotive, Furniture"
    }
  ];

  const qualityFeatures = [
    "Verified supplier network",
    "Quality certifications",
    "International standards compliance",
    "Regular quality audits",
    "Traceability documentation",
    "Environmental compliance"
  ];

  return (
    <motion.div
      className={styles.products}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Our Products</h1>
            <p className={styles.subtitle}>
              Quality products sourced from trusted global partners
            </p>
            <p className={styles.heroDescription}>
              We specialize in facilitating trade for high-quality petrochemicals, metals, textiles, 
              and leather products through our extensive network of verified suppliers and manufacturers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className={styles.productsSection}>
        <div className="container">
          <FadeInView>
            <div className={styles.sectionHeader}>
              <h2>Product Categories</h2>
              <p>Comprehensive range of products across multiple industries</p>
            </div>
          </FadeInView>

          <div className={styles.productsGrid}>
            {products.map((product, index) => (
              <FadeInView key={index} delay={0.1 * index}>
                <div className={styles.productCard}>
                  <div className={styles.productIcon}>{product.icon}</div>
                  <div className={styles.productContent}>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    
                    <div className={styles.productSpecs}>
                      <div className={styles.specItem}>
                        <span className={styles.specLabel}>Specifications:</span>
                        <span className={styles.specValue}>{product.specifications}</span>
                      </div>
                      <div className={styles.specItem}>
                        <span className={styles.specLabel}>Applications:</span>
                        <span className={styles.specValue}>{product.applications}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className={styles.qualitySection}>
        <div className="container">
          <div className={styles.qualityGrid}>
            <FadeInView>
              <div className={styles.qualityContent}>
                <h2>Quality Assurance</h2>
                <p>
                  We maintain the highest quality standards through rigorous supplier verification 
                  and continuous monitoring processes. Our commitment to quality ensures that every 
                  product meets international standards and customer expectations.
                </p>
                
                <div className={styles.qualityFeatures}>
                  {qualityFeatures.map((feature, index) => (
                    <div key={index} className={styles.qualityFeature}>
                      <ArrowRight size={16} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInView>
            
            <FadeInView delay={0.2}>
              <div className={styles.qualityImage}>
                <img 
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Quality assurance process" 
                />
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className={styles.industriesSection}>
        <div className="container">
          <FadeInView>
            <div className={styles.sectionHeader}>
              <h2>Industries We Serve</h2>
              <p>Our products serve diverse industries across the global marketplace</p>
            </div>
          </FadeInView>

          <div className={styles.industriesGrid}>
            <FadeInView delay={0.1}>
              <div className={styles.industryCard}>
                <h3>Manufacturing</h3>
                <p>Raw materials and components for various manufacturing processes</p>
              </div>
            </FadeInView>
            
            <FadeInView delay={0.2}>
              <div className={styles.industryCard}>
                <h3>Automotive</h3>
                <p>High-grade metals and materials for automotive industry applications</p>
              </div>
            </FadeInView>
            
            <FadeInView delay={0.3}>
              <div className={styles.industryCard}>
                <h3>Construction</h3>
                <p>Quality materials for construction and infrastructure projects</p>
              </div>
            </FadeInView>
            
            <FadeInView delay={0.4}>
              <div className={styles.industryCard}>
                <h3>Fashion & Textiles</h3>
                <p>Premium fabrics and leather for fashion and textile industries</p>
              </div>
            </FadeInView>
            
            <FadeInView delay={0.5}>
              <div className={styles.industryCard}>
                <h3>Chemical Processing</h3>
                <p>Petrochemicals and raw materials for chemical processing</p>
              </div>
            </FadeInView>
            
            <FadeInView delay={0.6}>
              <div className={styles.industryCard}>
                <h3>Energy</h3>
                <p>Materials and components for energy sector applications</p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container text-center">
          <FadeInView>
            <div className={styles.ctaContent}>
              <h2>Need Specific Products?</h2>
              <p>
                Contact us to discuss your specific product requirements. Our team will help you 
                find the right suppliers and ensure quality products for your business needs.
              </p>
              <CTAButton variant="primary" size="large">
                Request Quote
              </CTAButton>
            </div>
          </FadeInView>
        </div>
      </section>
    </motion.div>
  );
}