import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import styles from "../styles/PetrochemicalsProductsModal.module.css";

export default function PetrochemicalsProductsModal({ isOpen, onClose }) {
  const products = [
    "EN590 Diesel Fuel",
    "Aviation Kerosine Fuel",
    "D2 Gas Oil GOST 305-82",
    "Diesel D6 Virgin Low Power Fuel Oil",
    "Jet Fuel",
    "Mazut M 100 GOST - 10585-99",
    "Liquified Natural Gas",
    "Liquified Petroleum Gas",
    "REBCO GOST 9965 - 76",
    "REBCO GOST 51858 - 2002",
    "ESPO Blend Crude Oil",
    "Light Crude Oil",
    "Aviation Gas Oil",
    "Petroleum Coke",
    "Urea (Granular / Prilled)",
    "Di-Ammonium Phosphate",
    "Bitumen 60/70"
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      >
        <motion.div
          className={styles.modal}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.header}>
            <h2>Petrochemical Products</h2>
            <button
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className={styles.content}>
            <p className={styles.description}>
              Our extensive range of petrochemical products sourced from verified global suppliers:
            </p>
            
            <div className={styles.productsList}>
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  className={styles.productItem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <span className={styles.productName}>{product}</span>
                </motion.div>
              ))}
            </div>
            
            <div className={styles.footer}>
              <p className={styles.note}>
                All products are available through our verified supplier network. 
                Contact us for specific requirements, quantities, and pricing.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}