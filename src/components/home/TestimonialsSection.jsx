/**
 * Testimonials Section Component
 * Client testimonials and success stories
 */

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import FadeInView from "../FadeInView";
import styles from "../../styles/TestimonialsSection.module.css";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Corallo's expertise in petrochemical trading has been invaluable. Their commitment to quality and transparency sets them apart in the industry.",
      author: "Ahmed Rahman",
      position: "Procurement Director",
      company: "Gulf Energy Solutions",
      rating: 5
    },
    {
      quote: "We've been working with Corallo for our metal trading needs, and their service has been exceptional. Their global network makes complex trades seamless.",
      author: "Sarah Chen",
      position: "CEO",
      company: "Asian Metals Trading Co.",
      rating: 5
    },
    {
      quote: "The team at Corallo understands international trade like no other. They've helped us expand into new markets with confidence and success.",
      author: "Marcus Weber",
      position: "Trade Manager",
      company: "European Industrial Group",
      rating: 5
    }
  ];

  return (
    <section className={styles.section} data-section="testimonials">
      <div className={styles.container}>
        <FadeInView className={styles.header}>
          <h2>What Our Clients Say</h2>
          <p>
            Trusted by leading companies worldwide for reliable, 
            transparent, and efficient trade solutions.
          </p>
        </FadeInView>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <FadeInView
              key={index}
              delay={0.1 * index}
              className={styles.testimonialCard}
            >
              <div className={styles.quoteIcon}>
                <Quote size={24} />
              </div>
              
              <div className={styles.rating}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <blockquote className={styles.quote}>
                {testimonial.quote}
              </blockquote>

              <div className={styles.author}>
                <div className={styles.authorInfo}>
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.position}</p>
                  <span>{testimonial.company}</span>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}