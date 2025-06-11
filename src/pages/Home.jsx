import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Globe, Users, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import CTAButton from "../components/CTAButton";
import FadeInView from "../components/FadeInView";
import styles from "../styles/Home.module.css";

export default function Home() {
  const features = [
    {
      icon: <Globe size={48} />,
      title: "Global Network",
      description: "Extensive network of verified suppliers and buyers across multiple continents for seamless international trade."
    },
    {
      icon: <Shield size={48} />,
      title: "Verified Partners",
      description: "All our trading partners undergo rigorous verification processes to ensure reliability and quality standards."
    },
    {
      icon: <Users size={48} />,
      title: "Expert Team",
      description: "Experienced trade professionals dedicated to facilitating successful deals and long-term partnerships."
    }
  ];

  const stats = [
    { number: "500+", label: "Global Partners" },
    { number: "50+", label: "Countries" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Success Rate" }
  ];

  return (
    <motion.div
      className={styles.home}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1>Empowering Global Trade in Petrochemicals, Metals, and Textiles</h1>
            <p className={styles.heroSubtitle}>
              Efficient Trade Brokerage | Verified Suppliers | Transparent Deal-Making
            </p>
            <p className={styles.heroDescription}>
              Corallo is your trusted commission-based trade broker specializing in petrochemicals, 
              aluminium, iron, textiles, and leather. We connect global buyers and sellers through 
              transparent, efficient, and reliable trade solutions.
            </p>
            
            {/* Stats Grid */}
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className={styles.statCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className={styles.heroActions}>
              <Link to="/products" className={styles.startTradingButton}>
                <span>Start Trading</span>
                <ArrowRight size={20} />
              </Link>
              <CTAButton as={Link} to="/about" variant="outline" size="large">
                Learn More
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-primary">
        <div className="container">
          <FadeInView>
            <div className={styles.sectionHeader}>
              <h2>Why Choose Corallo</h2>
              <p>We provide comprehensive trade brokerage services with a focus on transparency, reliability, and global reach.</p>
            </div>
          </FadeInView>
          
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <FadeInView key={index} delay={0.2 * index}>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className={styles.aboutPreview}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <FadeInView>
              <div className={styles.aboutContent}>
                <h2>Your Trusted Trade Partner</h2>
                <p className={styles.aboutDescription}>
                  With over 15 years of experience in international trade, Corallo has established 
                  itself as a reliable bridge between global buyers and sellers. We specialize in 
                  commission-based brokerage services that prioritize transparency and long-term partnerships.
                </p>
                <p>
                  Our extensive network spans across 50+ countries, connecting businesses with 
                  verified suppliers and buyers in petrochemicals, metals, textiles, and leather industries. 
                  We don't manufacture or hold inventory – we facilitate successful trade relationships.
                </p>
                
                <div className={styles.aboutHighlights}>
                  <div className={styles.highlight}>
                    <CheckCircle size={20} />
                    <span>Commission-based model</span>
                  </div>
                  <div className={styles.highlight}>
                    <CheckCircle size={20} />
                    <span>Verified global network</span>
                  </div>
                  <div className={styles.highlight}>
                    <CheckCircle size={20} />
                    <span>Transparent processes</span>
                  </div>
                </div>

                <CTAButton as={Link} to="/about" variant="secondary" size="medium">
                  Learn More About Us
                </CTAButton>
              </div>
            </FadeInView>
            
            <FadeInView delay={0.2}>
              <div className={styles.aboutImage}>
                <img 
                  src="/src/assets/home/about-preview.png" 
                  alt="Global trade network and partnerships" 
                />
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className={styles.servicesPreview}>
        <div className="container">
          <FadeInView>
            <div className={styles.sectionHeader}>
              <h2>Our Trade Services</h2>
              <p>Comprehensive brokerage solutions for international trade</p>
            </div>
          </FadeInView>

          <div className={styles.servicesGrid}>
            <FadeInView delay={0.1}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <CheckCircle size={32} />
                </div>
                <h3>Verified Sourcing</h3>
                <p>Connect with pre-verified suppliers and manufacturers worldwide</p>
              </div>
            </FadeInView>
            
            <FadeInView delay={0.2}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <TrendingUp size={32} />
                </div>
                <h3>Market Intelligence</h3>
                <p>Real-time market updates and pricing trends for informed decisions</p>
              </div>
            </FadeInView>
            
            <FadeInView delay={0.3}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <Globe size={32} />
                </div>
                <h3>Global Logistics</h3>
                <p>End-to-end logistics support and documentation assistance</p>
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
              <h2>Ready to Expand Your Business?</h2>
              <p className={styles.ctaText}>
                Let us help you navigate the complexities of international trade with our 
                expert brokerage services and global network of verified partners.
              </p>
              <Link to="/contact" className={styles.contactUsButton}>
                <span>Contact Us Today</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>
    </motion.div>
  );
}