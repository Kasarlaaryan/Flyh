import {
  ServiceItem,
  ProcessStage,
  ProductCategory,
  FaqItem,
  JourneyMilestone,
} from '../types';

export const COMPANY_INFO = {
  name: 'FlyHigh Imports & Exports',
  shortName: 'FLYHIGH',
  tagline: 'FACTORY TO DOORSTEP.',
  subTagline: 'Global Sourcing. Simplified.',
  mission:
    'We connect businesses with trusted sourcing opportunities in China and coordinate the journey from factory to final destination.',
  phone: '+91 98765 43210',
  email: 'sourcing@flyhighimports.com',
  whatsApp: '+919876543210',
  whatsAppDisplay: '+91 98765 43210',
  address: 'Pillar No 1629, Sreshta Primus, 3rd Floor, Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033',
  chinaHubAddress: 'Room 1408, Tianhe North Trade Center, Tianhe District, Guangzhou, China',
};

export const TRUST_STRIP_ITEMS = [
  { id: 'sourcing', label: 'Product Sourcing', desc: 'Verified factory matching' },
  { id: 'supplier', label: 'Supplier Coordination', desc: 'Direct manufacturing liaison' },
  { id: 'quality', label: 'Quality Inspection', desc: 'AQL 2.5 on-site testing' },
  { id: 'logistics', label: 'International Logistics', desc: 'Air & sea container freight' },
  { id: 'delivery', label: 'Doorstep Delivery', desc: 'Customs cleared & dispatched' },
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'sourcing',
    number: '01',
    title: 'Product Sourcing',
    description: 'Identify suitable products and sourcing opportunities from China.',
    details: [
      'Comprehensive supplier verification and credential audits across Tier-1 and Tier-2 manufacturers.',
      'Comparative pricing analysis directly benchmarked against factory-gate rates in Guangzhou, Shenzhen, and Yiwu.',
      'Specification compliance review to ensure industrial standards, certifications, and technical tolerances match.',
    ],
    deliverables: ['Factory Credential Dossier', 'Quotation Matrix (FOB/CIF)', 'Product Sample Viability Report'],
    typicalTimeline: '3–7 Business Days',
  },
  {
    id: 'coordination',
    number: '02',
    title: 'Supplier Coordination',
    description: 'Coordinate with manufacturers and suppliers according to your requirements.',
    details: [
      'Bilingual negotiation handling contract terms, production lead times, and packaging specifications.',
      'Active manufacturing timeline monitoring and raw material procurement tracking.',
      'Escrow milestone management to protect buyer funds until agreed production stages are completed.',
    ],
    deliverables: ['Production Schedule Gantt', 'Bilingual Sourcing Agreement', 'Weekly Milestone Updates'],
    typicalTimeline: 'Ongoing Production Cycle',
  },
  {
    id: 'quality',
    number: '03',
    title: 'Quality Inspection',
    description: 'Coordinate product inspection before shipment where required.',
    details: [
      'On-site pre-production, during-production (DUPRO), and pre-shipment inspections (PSI).',
      'Defect categorization based on ISO 2859-1 (AQL 1.5 / 2.5 / 4.0) sampling protocols.',
      'Drop testing, functional operation tests, barcode readability, and retail packaging compliance audits.',
    ],
    deliverables: ['Standard 30+ Page Photo & Video Audit', 'AQL Inspection Certificate', 'Pass/Fail Quality Sign-Off'],
    typicalTimeline: '24–48 Hours Post-Inspection',
  },
  {
    id: 'consolidation',
    number: '04',
    title: 'Consolidation',
    description: 'Coordinate products from multiple suppliers where applicable.',
    details: [
      'Warehousing and centralized intake at modern transit facilities in Ningbo, Shenzhen, or Guangzhou.',
      'Consolidation of multi-vendor cargo into single Full Container Loads (FCL) or Less-than-Container Loads (LCL).',
      'Inventory relabeling, master carton standardization, and unified palletization.',
    ],
    deliverables: ['Consolidated Packing List', 'Unified Commercial Invoice', 'Container Load Optimization Plan'],
    typicalTimeline: '5–10 Days Buffer Window',
  },
  {
    id: 'logistics',
    number: '05',
    title: 'International Logistics',
    description: 'Coordinate suitable shipping and transportation solutions.',
    details: [
      'Multi-modal freight forwarding: Ocean FCL/LCL, express air freight, and chartered cargo routing.',
      'Space allocation agreements with top container shipping alliances during high-demand seasons.',
      'Export customs filing, container seals, bill of lading (B/L), and sea waybill issuance.',
    ],
    deliverables: ['Master / House Bill of Lading', 'Marine Cargo Insurance Policy', 'Container Vessel Live Tracking'],
    typicalTimeline: 'Air: 4–8 Days · Ocean: 18–32 Days',
  },
  {
    id: 'delivery',
    number: '06',
    title: 'Doorstep Delivery',
    description: 'Coordinate the shipment journey toward your final destination.',
    details: [
      'Destination port customs clearance coordination including import duty classification and GST/VAT filing.',
      'Bonded inland transport, intermodal rail, and regional container haulage directly to your warehouse.',
      'Proof-of-delivery documentation, demurrage prevention, and final unloading coordination.',
    ],
    deliverables: ['Customs Out-of-Charge Certificate', 'Proof of Delivery (POD)', 'All-Inclusive Final Landed Ledger'],
    typicalTimeline: '1–4 Days from Port Clearance',
  },
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    id: 'step-1',
    stepNumber: '01',
    name: 'REQUIREMENT',
    summary: 'You tell us what you need.',
    keyAction: 'Provide your technical drawing, sample photos, target specifications, or product links.',
    duration: 'Day 1–2',
    checkpoint: 'Requirement Scope Document & Target Landed Cost Estimation',
  },
  {
    id: 'step-2',
    stepNumber: '02',
    name: 'SOURCE',
    summary: 'We identify suitable sourcing options.',
    keyAction: 'Our ground network screens verified suppliers, compares capacity, and collects real factory quotations.',
    duration: 'Day 3–7',
    checkpoint: 'Comprehensive Supplier Comparison Matrix & Sample Dispatch',
  },
  {
    id: 'step-3',
    stepNumber: '03',
    name: 'VERIFY',
    summary: 'Product and supplier requirements are reviewed.',
    keyAction: 'Sample sign-off, production kickoff, and on-site AQL quality inspection before the goods leave the factory.',
    duration: 'Production Cycle',
    checkpoint: 'Pre-Shipment Quality Inspection (PSI) Certificate & Video Audit',
  },
  {
    id: 'step-4',
    stepNumber: '04',
    name: 'SHIP',
    summary: 'Goods are prepared and shipped.',
    keyAction: 'Consolidation, secure pallet packaging, export clearance, and loading onto ocean vessel or air cargo.',
    duration: 'Transit Window',
    checkpoint: 'Official Bill of Lading, Commercial Invoice, Packing List',
  },
  {
    id: 'step-5',
    stepNumber: '05',
    name: 'DELIVER',
    summary: 'Your shipment reaches its destination.',
    keyAction: 'Import customs clearance at destination port and dedicated last-mile logistics to your specified facility.',
    duration: 'Final Mile',
    checkpoint: 'Signed Proof of Delivery (POD) & Warehouse Offload Receipt',
  },
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Consumer gadgets, PCB assemblies, power supplies, smart wearables, and industrial components.',
    image: '/src/assets/images/category_electronics_b2b_1790924041331.jpg',
    hub: 'Shenzhen / Dongguan Hub',
    typicalMoq: '500 – 1,000 units',
    leadTime: '15 – 25 Days',
    featuredItems: ['Smart Sensors & Wearables', 'Custom PCB Assemblies', 'USB-C Charging Solutions', 'Industrial IoT Modules'],
  },
  {
    id: 'machinery',
    name: 'Machinery & Equipment',
    description: 'CNC tools, packaging machinery, food processing lines, precision molds, and automation units.',
    image: '/src/assets/images/category_machinery_equipment_1790924053664.jpg',
    hub: 'Jiangsu / Shandong Hub',
    typicalMoq: '1 – 10 sets',
    leadTime: '30 – 45 Days',
    featuredItems: ['Automatic Packaging Systems', 'Hydraulic Press Units', 'Precision Injection Molds', 'Industrial Filling Lines'],
  },
  {
    id: 'home-kitchen',
    name: 'Home & Kitchen',
    description: 'Cookware, stainless steel tools, small appliances, silicone goods, and premium tabletop ware.',
    image: '/src/assets/images/category_packaging_materials_1790924065177.jpg',
    hub: 'Yongkang / Chaozhou Hub',
    typicalMoq: '1,000 – 3,000 units',
    leadTime: '20 – 30 Days',
    featuredItems: ['Cast Iron & Non-Stick Cookware', 'Stainless Storage Systems', 'BPA-Free Food Prep Items', 'Custom Tabletop Sets'],
  },
  {
    id: 'packaging',
    name: 'Packaging',
    description: 'Custom corrugated boxes, rigid gift packaging, cosmetic dispensers, and eco-friendly mailers.',
    image: '/src/assets/images/category_packaging_materials_1790924065177.jpg',
    hub: 'Wenzhou / Guangzhou Hub',
    typicalMoq: '2,000 – 5,000 units',
    leadTime: '12 – 18 Days',
    featuredItems: ['Luxury Rigid Magnetic Boxes', 'Biodegradable Mailer Pouches', 'Glass & Aluminum Dropper Bottles', 'FSC-Certified Shipping Cartons'],
  },
  {
    id: 'fashion',
    name: 'Fashion & Accessories',
    description: 'Technical apparel, luggage, belts, performance footwear, metal hardware, and lifestyle bags.',
    image: '/src/assets/images/category_electronics_b2b_1790924041331.jpg',
    hub: 'Hangzhou / Guangzhou Hub',
    typicalMoq: '300 – 1,000 pcs',
    leadTime: '20 – 35 Days',
    featuredItems: ['Water-Resistant Cordura Bags', 'Zinc Alloy Metal Hardware', 'Custom Athleisure Lines', 'Eyewear & Accessories'],
  },
  {
    id: 'industrial',
    name: 'Industrial Products',
    description: 'Fasteners, valves, PPE safety gear, warehouse racking systems, and raw polymer resins.',
    image: '/src/assets/images/category_machinery_equipment_1790924053664.jpg',
    hub: 'Ningbo / Foshan Hub',
    typicalMoq: 'Variable by metric ton / pallets',
    leadTime: '15 – 30 Days',
    featuredItems: ['Industrial Stainless Steel Valves', 'Grade 8.8 Fasteners & Bolts', 'Certified PPE Face & Hand Shields', 'Galvanized Racking Beams'],
  },
  {
    id: 'beauty',
    name: 'Beauty & Lifestyle',
    description: 'Cosmetic brushes, electronic skin treatment devices, beauty cases, and spa equipment.',
    image: '/src/assets/images/category_packaging_materials_1790924065177.jpg',
    hub: 'Yiwu / Shenzhen Hub',
    typicalMoq: '1,000 – 2,500 units',
    leadTime: '18 – 28 Days',
    featuredItems: ['Microcurrent Facial Wands', 'Vegan Synthetic Brush Sets', 'Professional Acrylic Organizers', 'Custom Branded Compacts'],
  },
  {
    id: 'custom',
    name: 'Custom Requirements',
    description: 'OEM/ODM contracts, customized product engineering, proprietary molds, and multi-part assemblies.',
    image: '/src/assets/images/hero_china_manufacturing_1790924028893.jpg',
    hub: 'Multi-Region Coordination',
    typicalMoq: 'Tailored to project economics',
    leadTime: 'Project-Specific',
    featuredItems: ['Patent-Protected Molds', 'Custom Alloy Formulations', 'Multi-Component Assemblies', 'Private Label Collections'],
  },
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    step: '01',
    title: 'CHINA FACTORY',
    subtitle: 'Tooling, Production & Verification',
    description:
      'Raw material verification, production line monitoring, and compliance check directly on the factory floor.',
    documentation: 'Bilingual Purchase Agreement · Raw Material Spec Certificate',
    verificationAudit: 'Factory Business License & On-Site Capability Audit',
    typicalDuration: '10–25 Days',
  },
  {
    step: '02',
    title: 'QUALITY & PACKAGING',
    subtitle: 'Pre-Shipment Inspection & Palletization',
    description:
      'Rigorous AQL 2.5 standard inspection, barcode verification, export carton drop tests, and moisture barrier sealing.',
    documentation: 'AQL Inspection Certificate · Photo & Video Defect Audit Dossier',
    verificationAudit: 'Physical Dimension, Functional, and Safety Lab Testing',
    typicalDuration: '2–3 Days',
  },
  {
    step: '03',
    title: 'INTERNATIONAL SHIPPING',
    subtitle: 'Port Export & Ocean / Air Freight',
    description:
      'Container loading supervision at Guangzhou, Ningbo, or Shanghai port. Ocean vessel transit with secure carrier allocation.',
    documentation: 'Original Master Bill of Lading (MBL) / Air Waybill (AWB) · Cargo Insurance',
    verificationAudit: 'Container Seal Serial Check & Weight Verification (VGM)',
    typicalDuration: 'Air: 3–7 Days · Ocean: 18–30 Days',
  },
  {
    step: '04',
    title: 'CUSTOMS & CLEARANCE',
    subtitle: 'Tariff Classification & Compliance',
    description:
      'Accurate HS Code classification, duty tariff filing, customs declaration, and regulatory compliance clearance.',
    documentation: 'Customs Declaration Form · Bill of Entry · Out-of-Charge Order',
    verificationAudit: 'Port Authority Regulatory & Valuation Assessment',
    typicalDuration: '24–48 Hours',
  },
  {
    step: '05',
    title: 'FINAL DELIVERY',
    subtitle: 'Inland Haulage to Your Doorstep',
    description:
      'Direct warehouse transfer via bonded transport and local container trailers, arriving safely at your receiving dock.',
    documentation: 'Signed Proof of Delivery (POD) · Itemized Landed Cost Statement',
    verificationAudit: 'Cargo Receiving Sign-Off & Seal Intact Verification',
    typicalDuration: '1–3 Days',
  },
];

export const WHY_FLYHIGH_POINTS = [
  {
    id: 'coordination',
    title: 'End-to-End Coordination',
    description: 'Multiple stages managed through one sourcing partner.',
    detail:
      'Instead of coordinating separately with individual manufacturers, freight forwarders, inspection agents, and customs brokers, FlyHigh handles the complete chain under unified accountability.',
  },
  {
    id: 'china-focused',
    title: 'China-Focused',
    description: 'Focused on connecting customers with sourcing opportunities in China.',
    detail:
      'Our ground network maintains presence in key manufacturing hubs including Guangdong, Zhejiang, and Jiangsu, bridging language and cultural nuances directly at the source.',
  },
  {
    id: 'communication',
    title: 'Clear Communication',
    description: 'Stay informed throughout the sourcing and shipping process.',
    detail:
      'You receive unambiguous milestone notifications, photographic proof of work at every gate, and direct single-point contact via WhatsApp and email.',
  },
  {
    id: 'flexible',
    title: 'Flexible Requirements',
    description: 'Solutions can be structured around different products, quantities and business needs.',
    detail:
      'Whether you are consolidating small multi-supplier LCL trial shipments or executing full 40ft high-cube container programs, terms adapt to your operational reality.',
  },
  {
    id: 'business-first',
    title: 'Business First',
    description: 'Designed to support retailers, wholesalers, startups and established businesses.',
    detail:
      'We focus on the metrics that drive enterprise value: reliable landed cost, predictable delivery windows, and defect rates contained strictly within acceptable tolerances.',
  },
];

export const BUSINESS_SOLUTIONS = [
  {
    id: 'startup',
    label: 'A Startup',
    headline: 'Launching your first product.',
    description:
      'Overcome minimum order hurdles, avoid common rookie import mistakes, and receive guidance on tooling, packaging, and safe factory sampling.',
    benefits: ['Low-risk sample coordination', 'Clear landed cost breakdown before deposit', 'Quality inspection on first batch'],
  },
  {
    id: 'retailer',
    label: 'A Retailer',
    headline: 'Looking for new products.',
    description:
      'Discover fast-moving catalog lines directly from specialized industrial clusters, complete with private labeling and barcode-ready retail cartons.',
    benefits: ['Curated seasonal catalog sourcing', 'Custom retail packaging coordination', 'Doorstep replenishment scheduling'],
  },
  {
    id: 'wholesaler',
    label: 'A Wholesaler',
    headline: 'Sourcing products in volume.',
    description:
      'Maximize margin advantages through full container load (FCL) negotiations directly with tier-1 manufacturers with strict delivery lead-times.',
    benefits: ['Tier-1 factory price benchmarking', 'Container consolidation across multiple lines', 'Priority port berthing arrangements'],
  },
  {
    id: 'established',
    label: 'An Established Business',
    headline: 'Expanding your supplier network.',
    description:
      'Diversify single-vendor risk, conduct competitive price re-negotiations, and establish backup production facilities with audited compliance standards.',
    benefits: ['Backup supplier qualification', 'Escrow milestone payment security', 'Dedicated ground account management'],
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    question: 'Can FlyHigh source products directly from China?',
    answer:
      'Yes. We can help identify suitable sourcing opportunities based on your product requirements. Our on-ground sourcing team visits factories across Guangdong, Zhejiang, Jiangsu, and other specialized production clusters to audit capacity, negotiate competitive pricing, and ensure compliance.',
  },
  {
    question: 'Do I need to have a supplier?',
    answer:
      'No. You can provide the product requirement, image, specifications or product link. If you already have a preferred vendor in mind, we can step in purely to handle supplier coordination, on-site quality inspection, container consolidation, and international freight.',
  },
  {
    question: 'Can you handle bulk orders?',
    answer:
      'We can assist with bulk sourcing requirements depending on the product and supplier. From multi-container contract manufacturing to palletized trial batches, we tailor production schedules and logistics plans around your commercial volume.',
  },
  {
    question: 'Can you arrange shipping?',
    answer:
      'We coordinate applicable logistics and shipping solutions based on the shipment requirements. Depending on urgency and budget, we coordinate Express Air Cargo (4–7 days), Standard Air Freight, or Ocean Freight (FCL full container / LCL shared container) with end-to-end tracking.',
  },
  {
    question: 'Do you provide doorstep delivery?',
    answer:
      'Our service is designed around a Factory to Doorstep approach, subject to destination, product, shipping and customs requirements. We coordinate all export declarations in China, international freight, destination customs clearance, and local bonded transport directly to your warehouse or facility dock.',
  },
  {
    question: 'How are quality inspections conducted?',
    answer:
      'Our quality inspectors visit the factory premises before packaging and shipment. We test against approved golden samples using internationally recognized AQL 2.5 standards, verifying electrical safety, measurements, function, appearance, packaging strength, and barcoding. You receive a detailed photographic report before approving final payment.',
  },
];
