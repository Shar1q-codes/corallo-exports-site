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
      quote: "The team at Corallo understands our textile requirements perfectly. They consistently deliver quality materials on time and within budget.",
      author: "Marco Rossi",
      position: "Supply Chain Manager",
      company: "European Fashion Group",
      rating: 5
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeInView className={styles.header}>
          <h2>Trusted by Industry Leaders</h2>
          <p>
            Our clients span the globe, from emerging markets to established 
            industrial powerhouses. Here's what they say about working with us.
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
                "{testimonial.quote}"
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