import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, CheckCircle, Sparkles } from "lucide-react";
import "./NominateNow.css";

export default function NominateNow() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
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
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (
      !/^[+]?[0-9]{10,12}$/.test(formData.phone.replace(/[\s-]/g, ""))
    ) {
      newErrors.phone = "Phone number is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", phone: "", company: "", message: "" });
        setTimeout(() => {
          setIsModalOpen(false);
          setSubmitSuccess(false);
        }, 3000);
      } catch (error) {
        setErrors({ submit: "Failed to submit. Please try again." });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const closeModal = () => {
    if (!isSubmitting) {
      setIsModalOpen(false);
      setSubmitSuccess(false);
      setErrors({});
    }
  };

  return (
    <>
      <motion.button
        className="nominate-button"
        onClick={() => setIsModalOpen(true)}
        aria-label="Open nomination form"
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 2,
          type: "spring",
          stiffness: 100
        }}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatDelay: 5 
          }}
        >
          <Sparkles size={20} />
        </motion.div>
        <span>Nominate Now</span>
      </motion.button>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="modal-overlay"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="modal-content" 
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ 
                duration: 0.4,
                type: "spring",
                stiffness: 100
              }}
            >
              <motion.button
                className="close-button"
                onClick={closeModal}
                aria-label="Close modal"
                disabled={isSubmitting}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>

              <AnimatePresence mode="wait">
                {submitSuccess ? (
                  <motion.div 
                    className="success-message"
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div 
                      className="success-icon"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        delay: 0.2, 
                        type: "spring", 
                        stiffness: 200 
                      }}
                    >
                      <CheckCircle size={64} />
                    </motion.div>
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      Thank You!
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      Your nomination has been submitted successfully. We'll review it and get back to you within 24 hours.
                    </motion.p>
                  </motion.div>
                ) : (
                  <motion.form 
                    onSubmit={handleSubmit} 
                    className="nomination-form"
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="form-header">
                      <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        Nominate a Business Partner
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        Recommend a trusted business for our exclusive global trade network
                      </motion.p>
                    </div>

                    <div className="form-row">
                      <motion.div 
                        className="form-group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <label htmlFor="name">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <span className="error-message">{errors.name}</span>
                        )}
                      </motion.div>

                      <motion.div 
                        className="form-group"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <label htmlFor="email">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          placeholder="your.email@company.com"
                        />
                        {errors.email && (
                          <span className="error-message">{errors.email}</span>
                        )}
                      </motion.div>
                    </div>

                    <div className="form-row">
                      <motion.div 
                        className="form-group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <label htmlFor="phone">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          placeholder="+91 98765 43210"
                        />
                        {errors.phone && (
                          <span className="error-message">{errors.phone}</span>
                        )}
                      </motion.div>

                      <motion.div 
                        className="form-group"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <label htmlFor="company">Company to Nominate</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          placeholder="Company name"
                        />
                      </motion.div>
                    </div>

                    <motion.div 
                      className="form-group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <label htmlFor="message">Nomination Details *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        rows="4"
                        placeholder="Tell us about the business you're nominating, their specialties, and why they'd be a valuable addition to our network..."
                      ></textarea>
                      {errors.message && (
                        <span className="error-message">{errors.message}</span>
                      )}
                    </motion.div>

                    {errors.submit && (
                      <motion.div 
                        className="submit-error"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                      >
                        {errors.submit}
                      </motion.div>
                    )}

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className={isSubmitting ? "submitting" : ""}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="spinner"
                            animate={{ rotate: 360 }}
                            transition={{ 
                              duration: 1, 
                              repeat: Infinity, 
                              ease: "linear" 
                            }}
                          />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Submit Nomination
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}