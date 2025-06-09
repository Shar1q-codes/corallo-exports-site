/**
 * FAQs Page Component
 * Comprehensive frequently asked questions
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Search, MessageCircle, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import FadeInView from "../components/FadeInView";
import styles from "../styles/pages/FAQs.module.css";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const faqCategories = [
    {
      category: "Business Model",
      questions: [
        {
          question: "Are you manufacturers or resellers?",
          answer: "We are trade brokers and intermediaries. We connect global buyers with verified suppliers across various industries including petrochemicals, metals, textiles, and leather. We operate on a commission-based model, ensuring transparency and alignment with our clients' interests."
        },
        {
          question: "What's your commission model?",
          answer: "Our commission structure is transparent and competitive, varying based on product type, volume, and complexity of the transaction. We discuss and agree on all fees upfront before any transaction begins, ensuring no hidden costs or surprises."
        },
        {
          question: "How do you ensure supplier reliability?",
          answer: "We maintain a rigorous vetting process for all suppliers in our network. This includes verification of business licenses, quality certifications, financial stability, and past performance records. We also conduct regular audits and maintain long-term relationships with trusted partners."
        }
      ]
    },
    {
      category: "Operations & Geography",
      questions: [
        {
          question: "What countries do you operate in?",
          answer: "We operate globally with strong presence across Asia, Middle East, Africa, and Europe. Our network includes suppliers and buyers in over 50 countries, with particular expertise in emerging markets and established trade corridors."
        },
        {
          question: "Do you handle international shipping?",
          answer: "Yes, we coordinate with trusted freight forwarders and shipping companies to handle international logistics. We assist with documentation, customs clearance, and ensure compliance with international trade regulations."
        },
        {
          question: "What are your typical delivery timeframes?",
          answer: "Delivery timeframes vary based on product type, origin, destination, and shipping method. Typically, we provide estimated delivery schedules during the quotation process, ranging from 2-8 weeks for most international shipments."
        }
      ]
    },
    {
      category: "Quality & Compliance",
      questions: [
        {
          question: "Do you conduct quality checks?",
          answer: "Absolutely. We work exclusively with verified suppliers who meet international quality standards. We can arrange third-party inspections, provide certificates of analysis, and ensure products meet specified requirements before shipment."
        },
        {
          question: "What certifications do your products have?",
          answer: "Our products come with relevant international certifications such as ISO standards, EN590 for diesel, ASTM specifications for metals, and other industry-specific certifications. We ensure all documentation is provided with each shipment."
        },
        {
          question: "How do you handle quality disputes?",
          answer: "We have established procedures for quality disputes including third-party testing, arbitration processes, and insurance coverage. Our goal is to resolve any issues quickly and fairly while maintaining long-term relationships."
        }
      ]
    },
    {
      category: "Payments & Finance",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We facilitate secure payments through various methods including Letters of Credit (LC), bank transfers, escrow services, and other internationally recognized payment instruments. Payment terms are negotiated based on transaction size and client relationship."
        },
        {
          question: "Do you offer financing options?",
          answer: "We can connect clients with trade finance solutions through our banking partners. This includes letters of credit, trade financing, and other financial instruments to facilitate international trade transactions."
        },
        {
          question: "How do you ensure payment security?",
          answer: "We use established banking channels, letters of credit, and escrow services to ensure secure transactions. All payments are processed through verified financial institutions with proper documentation and compliance procedures."
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const toggleAccordion = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

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
            <h1>Frequently Asked Questions</h1>
            <p>
              Find answers to common questions about our services, operations, 
              and global trade processes.
            </p>
            
            <div className={styles.searchContainer}>
              <Search className={styles.searchIcon} size={20} />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
            </div>
          </FadeInView>
        </div>
      </section>

      {/* FAQs Content */}
      <section className={styles.content}>
        <div className={styles.container}>
          <FadeInView className={styles.intro}>
            <h2>Everything You Need to Know</h2>
            <p>
              We've compiled answers to the most common questions about our trade 
              brokerage services. If you can't find what you're looking for, 
              don't hesitate to contact us directly.
            </p>
          </FadeInView>

          {filteredFAQs.length === 0 ? (
            <div className={styles.noResults}>
              <MessageCircle size={48} />
              <h3>No results found</h3>
              <p>Try adjusting your search terms or browse all categories below.</p>
            </div>
          ) : (
            filteredFAQs.map((category, categoryIndex) => (
              <FadeInView 
                key={categoryIndex}
                delay={0.1 * categoryIndex}
                className={styles.category}
              >
                <h3 className={styles.categoryTitle}>{category.category}</h3>
                <div className={styles.accordion}>
                  {category.questions.map((faq, questionIndex) => {
                    const isOpen = openIndex === `${categoryIndex}-${questionIndex}`;
                    return (
                      <div
                        key={questionIndex}
                        className={`${styles.accordionItem} ${isOpen ? styles.active : ''}`}
                      >
                        <button
                          className={styles.accordionHeader}
                          onClick={() => toggleAccordion(categoryIndex, questionIndex)}
                          aria-expanded={isOpen}
                        >
                          <span className={styles.question}>{faq.question}</span>
                          <ChevronDown 
                            className={`${styles.icon} ${isOpen ? styles.rotated : ''}`} 
                            size={20} 
                          />
                        </button>
                        <div
                          className={styles.accordionContent}
                          style={{
                            maxHeight: isOpen ? "500px" : "0",
                            opacity: isOpen ? 1 : 0
                          }}
                        >
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </FadeInView>
            ))
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <FadeInView className={styles.ctaContent}>
            <h2>Still Have Questions?</h2>
            <p>
              Our team is here to help with any specific inquiries about your 
              trade requirements. Get in touch for personalized assistance.
            </p>
            
            <div className={styles.ctaActions}>
              <Button
                as={Link}
                to="/contact"
                variant="primary"
                size="large"
                icon={<Mail size={20} />}
              >
                Contact Our Experts
              </Button>
              
              <a 
                href="tel:+911234567890"
                className={styles.phoneAction}
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </FadeInView>
        </div>
      </section>
    </motion.div>
  );
}