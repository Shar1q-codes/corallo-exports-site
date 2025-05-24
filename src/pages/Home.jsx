import HeroSection from "../components/HeroSection";
import AboutPreview from "../components/AboutPreview";
import ServicesPreview from "../components/ServicesPreview";
import ProductHighlights from "../components/ProductHighlights";
import WhyChooseUs from "../components/WhyChooseUs";
import CTAStrip from "../components/CTAStrip";
import FAQsPreview from "../components/FAQsPreview";
import ContactStrip from "../components/ContactStrip";
import Footer from "../components/Footer";

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
      <Footer />
    </>
  );
}
