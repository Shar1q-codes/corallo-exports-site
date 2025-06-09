// ===============================
// 📦 App.jsx - Industrial Luxury Architecture
// 🎯 Core app entry with route config & layout wrapper
// ===============================

import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// 🌐 Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// 🧱 Layout Components
import Navigation from "./components/common/Navigation";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop";

// 🎨 Global Styles
import "./styles/global.css";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}