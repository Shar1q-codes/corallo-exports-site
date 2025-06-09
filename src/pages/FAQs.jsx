import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Search, MessageCircle } from "lucide-react";
import "../styles/pages/FAQs.css";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
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
    },
    {
      category: "Products & Services",
      questions: [
        {
          question: "What products do you specialize in?",
          answer: "We specialize in petrochemicals (EN590 diesel, jet fuel), metals (aluminum scrap, ingots, iron ore), textiles, leather products, and agricultural commodities. Our expertise spans across multiple industries with focus on high-value bulk commodities."
        },
        {
          question: "Can you source custom products?",
          answer: "Yes, we can source virtually any product through our global network. If you have specific requirements not in our standard portfolio, we can leverage our supplier relationships to find suitable sources that meet your specifications."
        },
        {
          question: "Do you provide market intelligence?",
          answer: "We provide market insights, price trends, and supply chain intelligence to our clients. This includes regular market updates, price forecasts, and analysis of global trade patterns affecting your industry."
        }
      ]
    }
  ];

  const filteredFAQs = faqs.map(category => ({
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
    <div className="faqs-page">
      <motion.div 
        className="faqs-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about our services and operations</p>
          
          <div className="search-container">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </motion.div>

      <div className="faqs-container">
        <motion.div 
          className="faqs-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Everything You Need to Know</h2>
          <p>We've compiled answers to the most common questions about our trade brokerage services. If you can't find what you're looking for, don't hesitate to contact us directly.</p>
        </motion.div>

        {filteredFAQs.length === 0 ? (
          <div className="no-results">
            <MessageCircle size={48} />
            <h3>No results found</h3>
            <p>Try adjusting your search terms or browse all categories below.</p>
          </div>
        ) : (
          filteredFAQs.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              className="faq-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="accordion">
                {category.questions.map((faq, questionIndex) => {
                  const isOpen = openIndex === `${categoryIndex}-${questionIndex}`;
                  return (
                    <div
                      key={questionIndex}
                      className={`accordion-item ${isOpen ? "active" : ""}`}
                    >
                      <button
                        className="accordion-header"
                        onClick={() => toggleAccordion(categoryIndex, questionIndex)}
                        aria-expanded={isOpen}
                        aria-controls={`content-${categoryIndex}-${questionIndex}`}
                      >
                        <span className="question">{faq.question}</span>
                        <ChevronDown 
                          className={`icon ${isOpen ? "rotated" : ""}`} 
                          size={20} 
                        />
                      </button>
                      <div
                        id={`content-${categoryIndex}-${questionIndex}`}
                        className="accordion-content"
                        role="region"
                        aria-labelledby={`header-${categoryIndex}-${questionIndex}`}
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
            </motion.div>
          ))
        )}

        <motion.div 
          className="faqs-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Still have questions?</h2>
          <p>Our team is here to help with any specific inquiries about your trade requirements.</p>
          <a href="/contact" className="cta-button">Contact Our Experts</a>
        </motion.div>
      </div>
    </div>
  );
}