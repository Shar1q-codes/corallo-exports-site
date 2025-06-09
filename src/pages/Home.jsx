/**
 * Home Page
 * Landing page showcasing Corallo's services and expertise
 */

import { motion } from "framer-motion";
import HeroSection from "../components/homepage/HeroSection";
import AboutPreview from "../components/homepage/AboutPreview";
import ServicesPreview from "../components/homepage/ServicesPreview";
import ProductHighlights from "../components/homepage/ProductHighlights";
import WhyChooseUs from "../components/homepage/WhyChooseUs";
import FAQsPreview from "../components/homepage/FAQsPreview";
import ContactStrip from "../components/homepage/ContactStrip";
import CTAStrip from "../components/homepage/CTAStrip";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <ProductHighlights />
      <WhyChooseUs />
      <FAQsPreview />
      <ContactStrip />
      <CTAStrip />
    </motion.main>
  );
}