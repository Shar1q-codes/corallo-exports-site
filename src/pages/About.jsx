/**
 * About Page
 * Comprehensive company information and values
 */

import { motion } from "framer-motion";
import { Globe, Shield, Award, Users, Target, Heart } from "lucide-react";
import FadeInView from "../components/FadeInView";
import styles from "../styles/About.module.css";

export default function About() {
  const values = [
    {
      icon: <Target size={24} />,
      title: "Integrity",
      description: "Honest, transparent dealings in every transaction"
    },
    {
      icon: <Heart size={24} />,
      title: "Excellence",
      description: "Commitment to the highest standards of quality"
    },
    {
      icon: <Users size={24} />,
      title: "Partnership",
      description: "Building long-term relationships with clients"
    },
    {
      icon: <Globe size={24} />,
      title: "Innovation",
      description: "Embracing new technologies and methods"
    }
  ];

  const stats = [
    { number: "500+", label: "Global Partners" },
    { number: "50+", label: "Countries Served" },
    { number: "15+", label: "Years Experience" },
    { number: "99%", label: "Success Rate" }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      description: "15+ years in international trade with expertise in petrochemicals and metals."
    },
    {
      name: "Priya Sharma",
      position: "Head of Operations",
      description: "Expert in logistics coordination and quality assurance across global markets."
    },
    {
      name: "David Chen",
      position: "Business Development",
      description: "Specializes in building strategic partnerships and market expansion."
    }
  ];

  return (
    <motion.main
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
            <h1>About Corallo</h1>
            <p>
              Empowering global trade through integrity, expertise, and innovation. 
              We connect businesses worldwide with premium products and reliable services.
            </p>
            <div className={styles.heroStats}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.heroStat}>
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>

      <div className={styles.container}>
        {/* Company Overview */}
        <section className={styles.section}>
          <div className={styles.grid}>
            <FadeInView direction="left" className={styles.textContent}>
              <h2>Who We Are</h2>
              <p>
                Corallo Export and Import Pvt Ltd is a leading brokerage firm based in 
                India, specializing in global trade across petrochemicals, metals, 
                textiles, and leather. We act as trusted intermediaries, connecting 
                buyers and suppliers with integrity, transparency, and efficiency.
              </p>
              <p>
                Our mission is to empower global trade by connecting businesses with 
                trusted partners, ensuring quality, compliance, and cost-efficiency 
                in every transaction.
              </p>
            </FadeInView>
            
            <FadeInView direction="right" className={styles.imageContent}>
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Global trade and business partnerships"
                loading="lazy"
              />
            </FadeInView>
          </div>
        </section>

        {/* Core Values */}
        <section className={styles.section}>
          <FadeInView className={styles.sectionHeader}>
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </FadeInView>
          
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <FadeInView
                key={index}
                delay={0.1 * index}
                className={styles.valueCard}
              >
                <div className={styles.valueIcon}>
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </FadeInView>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className={styles.section}>
          <FadeInView className={styles.sectionHeader}>
            <h2>Our Leadership Team</h2>
            <p>Experienced professionals driving our success</p>
          </FadeInView>
          
          <div className={styles.teamGrid}>
            {team.map((member, index) => (
              <FadeInView
                key={index}
                delay={0.1 * index}
                className={styles.teamCard}
              >
                <div className={styles.teamAvatar}>
                  <Users size={32} />
                </div>
                <h3>{member.name}</h3>
                <h4>{member.position}</h4>
                <p>{member.description}</p>
              </FadeInView>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={styles.section}>
          <FadeInView className={styles.sectionHeader}>
            <h2>Why Choose Corallo?</h2>
            <p>What sets us apart in the global trade industry</p>
          </FadeInView>
          
          <div className={styles.featuresGrid}>
            <FadeInView className={styles.feature}>
              <Globe className={styles.featureIcon} size={32} />
              <h3>Global Network</h3>
              <p>Extensive connections with leading suppliers and buyers worldwide</p>
            </FadeInView>
            
            <FadeInView delay={0.1} className={styles.feature}>
              <Shield className={styles.featureIcon} size={32} />
              <h3>Transparent Operations</h3>
              <p>Clear communication and honest dealings at every stage</p>
            </FadeInView>
            
            <FadeInView delay={0.2} className={styles.feature}>
              <Award className={styles.featureIcon} size={32} />
              <h3>Compliance Expertise</h3>
              <p>Adherence to international trade laws and certifications</p>
            </FadeInView>
          </div>
        </section>
      </div>
    </motion.main>
  );
}