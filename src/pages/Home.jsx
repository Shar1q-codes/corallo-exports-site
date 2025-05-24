// ===============================
// 📄 Page: Home
// 🎯 Purpose: Landing page for Corallo Exports & Imports
// ===============================

// 🧩 Homepage Sections
import HeroSection from "../components/homepage/HeroSection";
import AboutPreview from "../components/homepage/AboutPreview";
import ServicesPreview from "../components/homepage/ServicesPreview";
import ProductHighlights from "../components/homepage/ProductHighlights";
import WhyChooseUs from "../components/homepage/WhyChooseUs";
import CTAStrip from "../components/homepage/CTAStrip";
import FAQsPreview from "../components/homepage/FAQsPreview";
import ContactStrip from "../components/homepage/ContactStrip";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <ProductHighlights />
      <WhyChooseUs />
      <CTAStrip />
      <FAQsPreview />
      <ContactStrip />
    </>
  );
}
