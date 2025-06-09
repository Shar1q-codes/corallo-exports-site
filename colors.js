// ===============================
// 🎨 Corallo Color System - Industrial Luxury
// ===============================

export const colors = {
  primary: '#b87333',      // Rust
  secondary: '#7e4a35',    // Dark Copper
  accent: '#c97f4f',       // Light Copper
  background: '#f9f6f2',   // Neutral Ivory
  text: '#2c2c2c',         // Charcoal Black
  muted: '#d6c1b4',        // Soft Taupe
  border: '#dfd3c3',       // Stone Beige
  hover: '#d6814e'         // Bright Copper
};

// ===============================
// 🎯 Color Utilities
// ===============================

export const getColorWithOpacity = (color, opacity) => {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export const gradients = {
  primary: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.hover} 100%)`,
  secondary: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.primary} 100%)`,
  accent: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.hover} 100%)`,
  subtle: `linear-gradient(135deg, ${colors.background} 0%, ${colors.muted} 100%)`
};

export default colors;