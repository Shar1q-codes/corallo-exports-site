import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import FadeInView from "../components/FadeInView";
import CTAButton from "../components/CTAButton";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      details: "info@coralloexim.com",
      description: "Send us an email for detailed inquiries"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      details: "+91 (123) 456-7890",
      description: "Call us during business hours"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      details: "Mumbai, India",
      description: "Our headquarters and main office"
    },
    {
      icon: <Clock size={24} />,
      title: "Business Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM IST",
      description: "We're available during these hours"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log("Form submitted");
  };

  return (
    <motion.div
      className={styles.contact}
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
            <h1>Contact Us</h1>
            <p className={styles.subtitle}>
              Let's talk trade. Reach out to source or sell through verified global partners.
            </p>
            <p className={styles.heroDescription}>
              Ready to expand your business through international trade? Our team of experts 
              is here to help you connect with the right partners and navigate the complexities 
              of global commerce.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className={styles.contactInfoSection}>
        <div className="container">
          <FadeInView>
            <div className={styles.sectionHeader}>
              <h2>Get in Touch</h2>
              <p>Multiple ways to reach our team of trade professionals</p>
            </div>
          </FadeInView>

          <div className={styles.contactGrid}>
            {contactInfo.map((info, index) => (
              <FadeInView key={index} delay={0.1 * index}>
                <div className={styles.contactCard}>
                  <div className={styles.contactIcon}>{info.icon}</div>
                  <h3>{info.title}</h3>
                  <p className={styles.contactDetails}>{info.details}</p>
                  <p className={styles.contactDescription}>{info.description}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className={styles.formSection}>
        <div className="container">
          <div className={styles.formGrid}>
            <FadeInView>
              <div className={styles.formContent}>
                <h2>Send us a Message</h2>
                <p>
                  Fill out the form below and our team will get back to you within 24 hours. 
                  Please provide as much detail as possible about your trade requirements.
                </p>
                
                <div className={styles.formBenefits}>
                  <div className={styles.benefit}>
                    <Send size={20} />
                    <span>Quick response within 24 hours</span>
                  </div>
                  <div className={styles.benefit}>
                    <Mail size={20} />
                    <span>Direct connection to trade experts</span>
                  </div>
                  <div className={styles.benefit}>
                    <Phone size={20} />
                    <span>Follow-up call if needed</span>
                  </div>
                </div>
              </div>
            </FadeInView>
            
            <FadeInView delay={0.2}>
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Enter your company name"
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="tradeType">Trade Interest</label>
                  <select id="tradeType" name="tradeType">
                    <option value="">Select your trade interest</option>
                    <option value="buying">Looking to Buy</option>
                    <option value="selling">Looking to Sell</option>
                    <option value="both">Both Buying and Selling</option>
                    <option value="consultation">Trade Consultation</option>
                  </select>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="products">Product Categories</label>
                  <select id="products" name="products">
                    <option value="">Select product category</option>
                    <option value="petrochemicals">Petrochemicals</option>
                    <option value="aluminium">Aluminium Scrap & Ingots</option>
                    <option value="iron">Iron & Iron Ore</option>
                    <option value="textiles">Textiles</option>
                    <option value="leather">Leather</option>
                    <option value="multiple">Multiple Categories</option>
                  </select>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Please describe your trade requirements, quantities, specifications, and any other relevant details..."
                  ></textarea>
                </div>
                
                <CTAButton type="submit" variant="primary" size="large" className={styles.submitButton}>
                  Send Message
                </CTAButton>
              </form>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className={styles.additionalInfo}>
        <div className="container">
          <FadeInView>
            <div className={styles.infoContent}>
              <h2>Why Contact Corallo?</h2>
              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>Expert Consultation</h3>
                  <p>Get professional advice on international trade opportunities and market trends</p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Global Network Access</h3>
                  <p>Connect with our verified network of suppliers and buyers across 50+ countries</p>
                </div>
                <div className={styles.infoCard}>
                  <h3>Transparent Process</h3>
                  <p>Clear communication and transparent commission-based pricing structure</p>
                </div>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>
    </motion.div>
  );
}