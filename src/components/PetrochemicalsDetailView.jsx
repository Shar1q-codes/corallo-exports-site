import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import styles from "../styles/PetrochemicalsDetailView.module.css";

export default function PetrochemicalsDetailView({ isOpen, onClose }) {
  const [activeSection, setActiveSection] = useState("products");

  const sections = [
    { id: "products", title: "Products" },
    { id: "hsCodes", title: "HS Codes" },
    { id: "applications", title: "Applications" },
    { id: "specifications", title: "Specifications" },
    { id: "packaging", title: "Packaging" },
    { id: "quality", title: "Quality Standards" },
    { id: "logistics", title: "Logistics" },
    { id: "markets", title: "Target Markets" }
  ];

  const sectionContent = {
    products: {
      title: "Petrochemical Products",
      content: (
        <div>
          <h3>Primary Products</h3>
          <ul>
            <li><strong>Polyethylene (PE)</strong>
              <ul>
                <li>Low-Density Polyethylene (LDPE)</li>
                <li>High-Density Polyethylene (HDPE)</li>
                <li>Linear Low-Density Polyethylene (LLDPE)</li>
              </ul>
            </li>
            <li><strong>Polypropylene (PP)</strong>
              <ul>
                <li>Homopolymer PP</li>
                <li>Copolymer PP</li>
                <li>Random Copolymer PP</li>
              </ul>
            </li>
            <li><strong>Polystyrene (PS)</strong>
              <ul>
                <li>General Purpose Polystyrene (GPPS)</li>
                <li>High Impact Polystyrene (HIPS)</li>
                <li>Expandable Polystyrene (EPS)</li>
              </ul>
            </li>
            <li><strong>Polyvinyl Chloride (PVC)</strong>
              <ul>
                <li>Suspension PVC</li>
                <li>Emulsion PVC</li>
                <li>Bulk PVC</li>
              </ul>
            </li>
            <li><strong>Polyethylene Terephthalate (PET)</strong>
              <ul>
                <li>Bottle Grade PET</li>
                <li>Fiber Grade PET</li>
                <li>Film Grade PET</li>
              </ul>
            </li>
          </ul>

          <h3>Chemical Intermediates</h3>
          <ul>
            <li>Ethylene</li>
            <li>Propylene</li>
            <li>Benzene</li>
            <li>Toluene</li>
            <li>Xylene</li>
            <li>Styrene Monomer</li>
            <li>Vinyl Chloride Monomer (VCM)</li>
            <li>Ethylene Glycol</li>
            <li>Propylene Glycol</li>
            <li>Terephthalic Acid (TPA)</li>
          </ul>

          <h3>Specialty Chemicals</h3>
          <ul>
            <li>Additives and Stabilizers</li>
            <li>Catalysts</li>
            <li>Solvents</li>
            <li>Plasticizers</li>
            <li>Antioxidants</li>
            <li>UV Stabilizers</li>
            <li>Flame Retardants</li>
          </ul>
        </div>
      )
    },
    hsCodes: {
      title: "HS Codes Classification",
      content: (
        <div>
          <h3>Primary Polymers</h3>
          <table className={styles.hsTable}>
            <thead>
              <tr>
                <th>Product</th>
                <th>HS Code</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Polyethylene (PE)</td>
                <td>3901.10 - 3901.90</td>
                <td>Linear or non-linear polyethylene</td>
              </tr>
              <tr>
                <td>Polypropylene (PP)</td>
                <td>3902.10 - 3902.90</td>
                <td>Polypropylene in primary forms</td>
              </tr>
              <tr>
                <td>Polystyrene (PS)</td>
                <td>3903.11 - 3903.90</td>
                <td>Polystyrene in primary forms</td>
              </tr>
              <tr>
                <td>PVC</td>
                <td>3904.10 - 3904.90</td>
                <td>Polyvinyl chloride in primary forms</td>
              </tr>
              <tr>
                <td>PET</td>
                <td>3907.60</td>
                <td>Polyethylene terephthalate</td>
              </tr>
            </tbody>
          </table>

          <h3>Chemical Intermediates</h3>
          <table className={styles.hsTable}>
            <thead>
              <tr>
                <th>Product</th>
                <th>HS Code</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ethylene</td>
                <td>2901.21</td>
                <td>Ethylene</td>
              </tr>
              <tr>
                <td>Propylene</td>
                <td>2901.22</td>
                <td>Propene (propylene)</td>
              </tr>
              <tr>
                <td>Benzene</td>
                <td>2902.20</td>
                <td>Benzene</td>
              </tr>
              <tr>
                <td>Toluene</td>
                <td>2902.30</td>
                <td>Toluene</td>
              </tr>
              <tr>
                <td>Xylene</td>
                <td>2902.41 - 2902.44</td>
                <td>Xylenes (ortho, meta, para)</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    applications: {
      title: "Industrial Applications",
      content: (
        <div>
          <h3>Packaging Industry</h3>
          <ul>
            <li><strong>Food Packaging:</strong> LDPE films, PP containers, PET bottles</li>
            <li><strong>Industrial Packaging:</strong> HDPE drums, PP bags, stretch films</li>
            <li><strong>Consumer Packaging:</strong> Blister packs, shrink wraps, labels</li>
          </ul>

          <h3>Automotive Industry</h3>
          <ul>
            <li><strong>Interior Components:</strong> PP dashboards, PVC seat covers</li>
            <li><strong>Exterior Parts:</strong> PE bumpers, PP body panels</li>
            <li><strong>Under-the-Hood:</strong> Heat-resistant polymers, fuel system components</li>
          </ul>

          <h3>Construction & Building</h3>
          <ul>
            <li><strong>Pipes & Fittings:</strong> PVC pipes, PE water pipes, PP drainage systems</li>
            <li><strong>Insulation:</strong> EPS foam boards, polyurethane insulation</li>
            <li><strong>Roofing & Waterproofing:</strong> Modified bitumen, synthetic membranes</li>
          </ul>

          <h3>Textiles & Apparel</h3>
          <ul>
            <li><strong>Synthetic Fibers:</strong> Polyester fibers, nylon, acrylic</li>
            <li><strong>Non-woven Fabrics:</strong> PP spunbond, meltblown fabrics</li>
            <li><strong>Technical Textiles:</strong> Geotextiles, medical textiles</li>
          </ul>

          <h3>Electronics & Electrical</h3>
          <ul>
            <li><strong>Housing & Enclosures:</strong> ABS, PC, modified PP</li>
            <li><strong>Insulation Materials:</strong> PVC cables, polyethylene wire coating</li>
            <li><strong>Circuit Boards:</strong> Epoxy resins, polyimide films</li>
          </ul>

          <h3>Medical & Healthcare</h3>
          <ul>
            <li><strong>Disposable Medical Devices:</strong> PP syringes, PE gloves</li>
            <li><strong>Pharmaceutical Packaging:</strong> PET bottles, PP vials</li>
            <li><strong>Medical Equipment:</strong> Biocompatible polymers</li>
          </ul>
        </div>
      )
    },
    specifications: {
      title: "Technical Specifications",
      content: (
        <div>
          <h3>Polyethylene (PE) Specifications</h3>
          <div className={styles.specCard}>
            <h4>LDPE (Low-Density Polyethylene)</h4>
            <ul>
              <li>Density: 0.910-0.925 g/cm³</li>
              <li>Melt Flow Index: 0.2-50 g/10min</li>
              <li>Tensile Strength: 8-25 MPa</li>
              <li>Elongation at Break: 100-650%</li>
              <li>Melting Point: 105-115°C</li>
            </ul>
          </div>

          <div className={styles.specCard}>
            <h4>HDPE (High-Density Polyethylene)</h4>
            <ul>
              <li>Density: 0.941-0.965 g/cm³</li>
              <li>Melt Flow Index: 0.1-100 g/10min</li>
              <li>Tensile Strength: 20-37 MPa</li>
              <li>Elongation at Break: 10-1200%</li>
              <li>Melting Point: 120-130°C</li>
            </ul>
          </div>

          <h3>Polypropylene (PP) Specifications</h3>
          <div className={styles.specCard}>
            <h4>Homopolymer PP</h4>
            <ul>
              <li>Density: 0.900-0.910 g/cm³</li>
              <li>Melt Flow Index: 0.5-100 g/10min</li>
              <li>Tensile Strength: 28-41 MPa</li>
              <li>Flexural Modulus: 1200-1700 MPa</li>
              <li>Melting Point: 160-166°C</li>
            </ul>
          </div>

          <h3>PVC Specifications</h3>
          <div className={styles.specCard}>
            <h4>Suspension PVC</h4>
            <ul>
              <li>K-Value: 57-70</li>
              <li>Bulk Density: 0.50-0.60 g/cm³</li>
              <li>Particle Size: 100-200 mesh</li>
              <li>Plasticizer Absorption: 18-25 DOP</li>
              <li>Volatile Content: ≤0.3%</li>
            </ul>
          </div>

          <h3>PET Specifications</h3>
          <div className={styles.specCard}>
            <h4>Bottle Grade PET</h4>
            <ul>
              <li>Intrinsic Viscosity: 0.80-0.85 dl/g</li>
              <li>Melting Point: 245-255°C</li>
              <li>Glass Transition: 78-81°C</li>
              <li>Density: 1.38-1.41 g/cm³</li>
              <li>Acetaldehyde Content: ≤1 ppm</li>
            </ul>
          </div>
        </div>
      )
    },
    packaging: {
      title: "Packaging & Storage",
      content: (
        <div>
          <h3>Standard Packaging Options</h3>
          
          <div className={styles.packagingSection}>
            <h4>Polymer Resins</h4>
            <ul>
              <li><strong>25kg Bags:</strong> Multi-wall paper bags with PE liner</li>
              <li><strong>500kg Big Bags:</strong> FIBC bags with discharge spout</li>
              <li><strong>1000kg Big Bags:</strong> Heavy-duty woven PP bags</li>
              <li><strong>Bulk Delivery:</strong> Pneumatic tankers for large volumes</li>
            </ul>
          </div>

          <div className={styles.packagingSection}>
            <h4>Liquid Chemicals</h4>
            <ul>
              <li><strong>200L Drums:</strong> Steel or HDPE drums with tight-head closure</li>
              <li><strong>1000L IBC:</strong> Intermediate bulk containers with pallet base</li>
              <li><strong>ISO Tanks:</strong> 20ft containers for bulk liquid transport</li>
              <li><strong>Flexitanks:</strong> 16-24,000L capacity for non-hazardous liquids</li>
            </ul>
          </div>

          <h3>Storage Requirements</h3>
          <div className={styles.storageCard}>
            <h4>Temperature Control</h4>
            <ul>
              <li>Polymer resins: Store at 15-25°C</li>
              <li>Liquid chemicals: Temperature-controlled storage as per MSDS</li>
              <li>Avoid direct sunlight and heat sources</li>
              <li>Maintain consistent temperature to prevent condensation</li>
            </ul>
          </div>

          <div className={styles.storageCard}>
            <h4>Humidity Control</h4>
            <ul>
              <li>Relative humidity: 30-60%</li>
              <li>Use moisture barriers for hygroscopic materials</li>
              <li>Proper ventilation to prevent moisture buildup</li>
              <li>Desiccants for sensitive products</li>
            </ul>
          </div>

          <div className={styles.storageCard}>
            <h4>Handling Precautions</h4>
            <ul>
              <li>First-in, first-out (FIFO) inventory rotation</li>
              <li>Proper lifting equipment for heavy bags</li>
              <li>Avoid puncturing or damaging packaging</li>
              <li>Segregate incompatible chemicals</li>
            </ul>
          </div>
        </div>
      )
    },
    quality: {
      title: "Quality Standards & Certifications",
      content: (
        <div>
          <h3>International Standards</h3>
          
          <div className={styles.standardCard}>
            <h4>ISO Certifications</h4>
            <ul>
              <li><strong>ISO 9001:2015</strong> - Quality Management Systems</li>
              <li><strong>ISO 14001:2015</strong> - Environmental Management</li>
              <li><strong>ISO 45001:2018</strong> - Occupational Health & Safety</li>
              <li><strong>ISO 50001:2018</strong> - Energy Management Systems</li>
            </ul>
          </div>

          <div className={styles.standardCard}>
            <h4>Product Standards</h4>
            <ul>
              <li><strong>ASTM Standards</strong> - American Society for Testing Materials</li>
              <li><strong>EN Standards</strong> - European Conformity standards</li>
              <li><strong>JIS Standards</strong> - Japanese Industrial Standards</li>
              <li><strong>GB Standards</strong> - Chinese National Standards</li>
            </ul>
          </div>

          <h3>Food Contact Compliance</h3>
          <div className={styles.complianceCard}>
            <h4>Regulatory Approvals</h4>
            <ul>
              <li><strong>FDA (USA):</strong> 21 CFR 177 - Food contact substances</li>
              <li><strong>EU Regulation:</strong> 10/2011 - Plastic materials in food contact</li>
              <li><strong>BfR (Germany):</strong> Recommendations for food contact materials</li>
              <li><strong>EFSA:</strong> European Food Safety Authority guidelines</li>
            </ul>
          </div>

          <h3>Testing & Analysis</h3>
          <div className={styles.testingSection}>
            <h4>Physical Properties Testing</h4>
            <ul>
              <li>Melt Flow Index (MFI/MFR)</li>
              <li>Density measurement</li>
              <li>Tensile strength and elongation</li>
              <li>Impact resistance</li>
              <li>Thermal properties (DSC, TGA)</li>
            </ul>
          </div>

          <div className={styles.testingSection}>
            <h4>Chemical Analysis</h4>
            <ul>
              <li>Purity and composition analysis</li>
              <li>Residual monomer content</li>
              <li>Additive identification</li>
              <li>Heavy metals testing</li>
              <li>Volatile organic compounds (VOC)</li>
            </ul>
          </div>

          <h3>Quality Assurance Process</h3>
          <ul>
            <li>Incoming raw material inspection</li>
            <li>In-process quality monitoring</li>
            <li>Final product testing and certification</li>
            <li>Statistical process control (SPC)</li>
            <li>Continuous improvement programs</li>
            <li>Customer feedback integration</li>
          </ul>
        </div>
      )
    },
    logistics: {
      title: "Logistics & Supply Chain",
      content: (
        <div>
          <h3>Transportation Methods</h3>
          
          <div className={styles.logisticsCard}>
            <h4>Sea Freight</h4>
            <ul>
              <li><strong>Container Shipping:</strong> 20ft/40ft containers for bagged products</li>
              <li><strong>Bulk Carriers:</strong> For large volume polymer pellets</li>
              <li><strong>Chemical Tankers:</strong> For liquid petrochemicals</li>
              <li><strong>Transit Time:</strong> 15-45 days depending on route</li>
              <li><strong>Cost Effective:</strong> Best for large volumes (>100 MT)</li>
            </ul>
          </div>

          <div className={styles.logisticsCard}>
            <h4>Road Transport</h4>
            <ul>
              <li><strong>Truck Delivery:</strong> Regional distribution within 1000km</li>
              <li><strong>Tanker Trucks:</strong> For liquid chemicals and monomers</li>
              <li><strong>Temperature Control:</strong> Refrigerated trucks when required</li>
              <li><strong>Transit Time:</strong> 1-5 days for regional delivery</li>
              <li><strong>Flexibility:</strong> Door-to-door delivery service</li>
            </ul>
          </div>

          <div className={styles.logisticsCard}>
            <h4>Rail Transport</h4>
            <ul>
              <li><strong>Rail Cars:</strong> Bulk transport for inland destinations</li>
              <li><strong>Intermodal:</strong> Combined rail-truck delivery</li>
              <li><strong>Cost Efficient:</strong> For medium to large volumes</li>
              <li><strong>Environmental:</strong> Lower carbon footprint option</li>
            </ul>
          </div>

          <h3>Documentation Requirements</h3>
          <div className={styles.docSection}>
            <h4>Export Documentation</h4>
            <ul>
              <li>Commercial Invoice</li>
              <li>Packing List</li>
              <li>Bill of Lading / Airway Bill</li>
              <li>Certificate of Origin</li>
              <li>Export License (if required)</li>
              <li>Insurance Certificate</li>
            </ul>
          </div>

          <div className={styles.docSection}>
            <h4>Product Certificates</h4>
            <ul>
              <li>Certificate of Analysis (COA)</li>
              <li>Material Safety Data Sheet (MSDS)</li>
              <li>Quality Certificate</li>
              <li>Food Contact Declaration (if applicable)</li>
              <li>REACH Registration (for EU)</li>
              <li>Halal/Kosher Certificates (if required)</li>
            </ul>
          </div>

          <h3>Supply Chain Management</h3>
          <ul>
            <li><strong>Inventory Management:</strong> Real-time stock monitoring</li>
            <li><strong>Demand Forecasting:</strong> Predictive analytics for planning</li>
            <li><strong>Supplier Network:</strong> Multiple sources for supply security</li>
            <li><strong>Risk Management:</strong> Contingency planning for disruptions</li>
            <li><strong>Digital Tracking:</strong> End-to-end shipment visibility</li>
            <li><strong>Customer Portal:</strong> Online order tracking and management</li>
          </ul>

          <h3>Delivery Terms</h3>
          <div className={styles.termsGrid}>
            <div className={styles.termCard}>
              <h4>EXW (Ex Works)</h4>
              <p>Buyer arranges pickup from seller's facility</p>
            </div>
            <div className={styles.termCard}>
              <h4>FOB (Free on Board)</h4>
              <p>Seller delivers to port, buyer handles shipping</p>
            </div>
            <div className={styles.termCard}>
              <h4>CIF (Cost, Insurance, Freight)</h4>
              <p>Seller handles shipping and insurance to destination port</p>
            </div>
            <div className={styles.termCard}>
              <h4>DDP (Delivered Duty Paid)</h4>
              <p>Seller handles all logistics including customs clearance</p>
            </div>
          </div>
        </div>
      )
    },
    markets: {
      title: "Target Markets & Regions",
      content: (
        <div>
          <h3>Primary Markets</h3>
          
          <div className={styles.marketCard}>
            <h4>Asia-Pacific Region</h4>
            <ul>
              <li><strong>China:</strong> Largest consumer market, strong manufacturing base</li>
              <li><strong>India:</strong> Growing demand in packaging and automotive sectors</li>
              <li><strong>Southeast Asia:</strong> Emerging markets with increasing industrialization</li>
              <li><strong>Japan & South Korea:</strong> High-tech applications and specialty grades</li>
              <li><strong>Australia:</strong> Mining and construction applications</li>
            </ul>
          </div>

          <div className={styles.marketCard}>
            <h4>Middle East & Africa</h4>
            <ul>
              <li><strong>UAE & Saudi Arabia:</strong> Regional distribution hubs</li>
              <li><strong>Egypt:</strong> Growing packaging and construction markets</li>
              <li><strong>South Africa:</strong> Industrial and mining applications</li>
              <li><strong>Nigeria:</strong> Emerging consumer goods market</li>
              <li><strong>Turkey:</strong> Bridge between Europe and Asia markets</li>
            </ul>
          </div>

          <div className={styles.marketCard}>
            <h4>Europe</h4>
            <ul>
              <li><strong>Germany:</strong> Automotive and industrial applications</li>
              <li><strong>Italy:</strong> Packaging and consumer goods</li>
              <li><strong>Poland:</strong> Growing manufacturing sector</li>
              <li><strong>UK:</strong> Specialty chemicals and high-performance polymers</li>
              <li><strong>Benelux:</strong> Logistics hub for European distribution</li>
            </ul>
          </div>

          <h3>Market Segments</h3>
          
          <div className={styles.segmentCard}>
            <h4>Packaging Industry (40%)</h4>
            <ul>
              <li>Food & beverage packaging</li>
              <li>Consumer goods packaging</li>
              <li>Industrial packaging solutions</li>
              <li>E-commerce packaging</li>
            </ul>
          </div>

          <div className={styles.segmentCard}>
            <h4>Automotive Sector (25%)</h4>
            <ul>
              <li>Interior components</li>
              <li>Exterior body parts</li>
              <li>Under-the-hood applications</li>
              <li>Electric vehicle components</li>
            </ul>
          </div>

          <div className={styles.segmentCard}>
            <h4>Construction & Building (20%)</h4>
            <ul>
              <li>Pipes and fittings</li>
              <li>Insulation materials</li>
              <li>Roofing and waterproofing</li>
              <li>Infrastructure projects</li>
            </ul>
          </div>

          <div className={styles.segmentCard}>
            <h4>Textiles & Fibers (10%)</h4>
            <ul>
              <li>Synthetic fiber production</li>
              <li>Non-woven fabrics</li>
              <li>Technical textiles</li>
              <li>Carpet and upholstery</li>
            </ul>
          </div>

          <div className={styles.segmentCard}>
            <h4>Other Applications (5%)</h4>
            <ul>
              <li>Electronics and electrical</li>
              <li>Medical and healthcare</li>
              <li>Agriculture and horticulture</li>
              <li>Sports and leisure</li>
            </ul>
          </div>

          <h3>Market Trends</h3>
          <ul>
            <li><strong>Sustainability Focus:</strong> Increasing demand for recycled and bio-based polymers</li>
            <li><strong>Circular Economy:</strong> Chemical recycling and waste-to-chemical technologies</li>
            <li><strong>Lightweight Materials:</strong> Automotive industry driving demand for lighter polymers</li>
            <li><strong>E-commerce Growth:</strong> Packaging solutions for online retail</li>
            <li><strong>Emerging Markets:</strong> Infrastructure development in developing countries</li>
            <li><strong>Regulatory Changes:</strong> Stricter environmental regulations affecting product specifications</li>
          </ul>
        </div>
      )
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className={styles.container}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <header className={styles.header}>
          <h2>Petrochemicals - Detailed Information</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <X size={24} />
          </button>
        </header>

        <div className={styles.content}>
          <nav className={styles.navigation}>
            <h3>Contents</h3>
            <ul>
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    className={`${styles.navItem} ${
                      activeSection === section.id ? styles.active : ""
                    }`}
                    onClick={() => setActiveSection(section.id)}
                  >
                    <span>{section.title}</span>
                    <ChevronRight size={16} />
                  </button>
                </li>
              ))}
            </ul>
            <button className={styles.backButton} onClick={onClose}>
              Back to Products
            </button>
          </nav>

          <main className={styles.mainContent}>
            <AnimatePresence mode="wait">
              <motion.section
                key={activeSection}
                className={styles.section}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <article>
                  <h2>{sectionContent[activeSection].title}</h2>
                  {sectionContent[activeSection].content}
                </article>
              </motion.section>
            </AnimatePresence>
          </main>
        </div>
      </motion.div>
    </motion.div>
  );
}