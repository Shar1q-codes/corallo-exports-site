import React, { useState } from "react";
import "./NominateNow.css";

export default function NominateNow() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
          setFormData({ name: "", email: "", phone: "", message: "" });
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

  return (
    <>
      <button
        className="nominate-button"
        onClick={() => setIsModalOpen(true)}
        aria-label="Open nomination form"
      >
        <i className="fas fa-paper-plane"></i>
        <span>Nominate Now</span>
      </button>

      {isModalOpen && (
        <div
          className="modal-overlay"
          onClick={() => !isSubmitting && setIsModalOpen(false)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-button"
              onClick={() => !isSubmitting && setIsModalOpen(false)}
              aria-label="Close modal"
            >
              ×
            </button>

            {submitSuccess ? (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                <h2>Thank You!</h2>
                <p>Your nomination has been submitted successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="nomination-form">
                <h2>Nominate a Business</h2>
                <p>Recommend a business for our trade network</p>

                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <span className="error-message">{errors.name}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  {errors.phone && (
                    <span className="error-message">{errors.phone}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    rows="4"
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
                  {isSubmitting ? "Submitting..." : "Submit Nomination"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
