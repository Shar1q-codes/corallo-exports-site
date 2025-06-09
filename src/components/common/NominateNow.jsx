import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, CheckCircle } from "lucide-react";
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
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          setSubmitSuccess(true);
          setFormData({ name: "", email: "", phone: "", company: "", message: "" });
          setTimeout(() => {
            setIsModalOpen(false);
            setSubmitSuccess(false);
          }, 3000);
        } else {
          throw new Error("Submission failed");
        }
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
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Send size={20} />
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
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="close-button"
                onClick={closeModal}
                aria-label="Close modal"
                disabled={isSubmitting}
              >
                <X size={24} />
              </button>

              <AnimatePresence mode="wait">
                {submitSuccess ? (
                  <motion.div 
                    className="success-message"
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="success-icon">
                      <CheckCircle size={64} />
                    </div>
                    <h2>Thank You!</h2>
                    <p>Your nomination has been submitted successfully. We'll review it and get back to you soon.</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    onSubmit={handleSubmit} 
                    className="nomination-form"
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="form-header">
                      <h2>Nominate a Business</h2>
                      <p>Recommend a business for our global trade network</p>
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
                          disabled={isSubmitting}
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
                          disabled={isSubmitting}
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
                          disabled={isSubmitting}
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
                          disabled={isSubmitting}
                          placeholder="Company to nominate"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Nomination Details *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        rows="4"
                        placeholder="Tell us about the business you're nominating, their specialties, and why they'd be a good fit for our network..."
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
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Submit Nomination
                        </>
                      )}
                    </button>
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