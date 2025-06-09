import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Globe, Clock, MapPin, Send } from "lucide-react";
import "../styles/pages/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (
      !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(
        formData.phone
      )
    ) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // TODO: Replace with actual API endpoint
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitSuccess(true);
          setFormData({ 
            name: "", 
            email: "", 
            phone: "", 
            company: "",
            subject: "",
            message: "" 
          });
        } else {
          throw new Error("Failed to submit");
        }
      } catch (error) {
        setErrors({ submit: "Failed to send message. Please try again." });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "info@coralloexim.com",
      link: "mailto:info@coralloexim.com"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+91-XXXXXXXXXX",
      link: "tel:+91XXXXXXXXXX"
    },
    {
      icon: <Globe size={24} />,
      title: "Website",
      value: "www.coralloexim.com",
      link: "https://www.coralloexim.com"
    },
    {
      icon: <Clock size={24} />,
      title: "Business Hours",
      value: "Mon - Fri: 9:00 AM - 6:00 PM IST",
      link: null
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Mumbai, India",
      link: null
    }
  ];

  return (
    <div className="contact-page">
      <motion.div 
        className="contact-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>Ready to explore global trade opportunities? Let's connect and discuss how we can support your business growth.</p>
          
          <div className="hero-highlights">
            <div className="highlight">
              <span className="highlight-icon">🌍</span>
              <span>Global Network</span>
            </div>
            <div className="highlight">
              <span className="highlight-icon">⚡</span>
              <span>Quick Response</span>
            </div>
            <div className="highlight">
              <span className="highlight-icon">🤝</span>
              <span>Expert Guidance</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="contact-container">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Get in Touch</h2>
          <p>We're here to help with all your global trade requirements. Reach out through any of the channels below.</p>
          
          <div className="info-grid">
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index} 
                className="info-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="info-icon">{info.icon}</div>
                <div className="info-details">
                  <h3>{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} target={info.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                      {info.value}
                    </a>
                  ) : (
                    <p>{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="quick-actions">
            <h3>Quick Actions</h3>
            <div className="action-buttons">
              <a href="https://wa.me/919998887777" target="_blank" rel="noopener noreferrer" className="action-btn whatsapp">
                <span>💬</span>
                WhatsApp
              </a>
              <a href="mailto:info@coralloexim.com" className="action-btn email">
                <Mail size={18} />
                Email Us
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="contact-form-container"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {submitSuccess ? (
            <motion.div 
              className="success-message"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="success-icon">
                <Send size={48} />
              </div>
              <h2>Message Sent Successfully! 🎉</h2>
              <p>
                Thank you for reaching out. We've received your message and will get back to you within 24 hours.
              </p>
              <button 
                onClick={() => setSubmitSuccess(false)}
                className="send-another"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-header">
                <h2>Send us a Message</h2>
                <p>Fill out the form below and we'll respond promptly to your inquiry.</p>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "error" : ""}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <span className="error-message">{errors.name}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "error" : ""}
                    placeholder="your.email@company.com"
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? "error" : ""}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && (
                    <span className="error-message">{errors.phone}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={errors.subject ? "error" : ""}
                  placeholder="Brief description of your inquiry"
                />
                {errors.subject && (
                  <span className="error-message">{errors.subject}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className={errors.message ? "error" : ""}
                  placeholder="Please provide details about your requirements, including product specifications, quantities, and timeline..."
                ></textarea>
                {errors.message && (
                  <span className="error-message">{errors.message}</span>
                )}
              </div>

              {errors.submit && (
                <div className="submit-error">{errors.submit}</div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={isSubmitting ? "submitting" : ""}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}