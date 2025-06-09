/**
 * Home Page Component
 * Landing page showcasing Corallo's services and expertise
 */

import { motion } from "framer-motion";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import ProductsSection from "../components/home/ProductsSection";
import WhyChooseSection from "../components/home/WhyChooseSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CTASection />
    </motion.main>
  );
}