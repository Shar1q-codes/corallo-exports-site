// ===============================
// 📦 App.jsx
// 🎯 Core app entry with route config & layout wrapper
// ===============================

import { Routes, Route } from "react-router-dom";

// 🌐 Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// 🧱 Layout
import Navigation from "./components/common/Navigation";
import Footer from "./components/common/Footer";
import NominateNow from "./components/common/NominateNow";

// 🎨 Global Styles
import "./styles/theme.css";

export default function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <NominateNow />
    </>
  );
}