import { taxonomy, type TaxonomyCategory } from "./taxonomy";
import imgArdl183 from "../images/ardl183.jpeg";
import imgTagGlobe from "../images/fluorenherbicide.jpeg";
import imgMoraleda from "../images/moraleda-beans.jpeg";
import imgNpk19 from "../images/NPK19.jpg";
import imgSprayer from "../images/sprayer.jpeg";
import imgUrea from "../images/Urea Fertilizer.jpg";
import imgZinc from "../images/zinc_chelated.jpeg";

export type Category = TaxonomyCategory;

export const categories: Category[] = taxonomy;

export const crops = [
  {
    slug: "beans",
    name: "Beans & Pulses",
    season: "Kharif & Rabi",
    image: "https://images.unsplash.com/photo-1595855759920-86582396756a?w=800&q=80",
  },
  {
    slug: "paddy",
    name: "Paddy (Rice)",
    season: "Kharif",
    image: "https://images.unsplash.com/photo-1536657464919-892534f60d6e?w=800&q=80",
  },
  {
    slug: "vegetables",
    name: "Vegetables",
    season: "All Seasons",
    image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=800&q=80",
  },
  {
    slug: "cotton",
    name: "Cotton",
    season: "Kharif",
    image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=800&q=80",
  },
];

export type Product = {
  slug: string;
  sku: string;
  name: string;
  brand: string;
  category: string;
  crop: string[];
  short: string;
  description: string;
  mrp: number;
  price: number;
  packSize: string;
  rating: number;
  reviews: number;
  stock: "in" | "low" | "out";
  badges: string[];
  benefits: string[];
  usage: string;
  specs: Record<string, string>;
  image: string;
  images: string[];
};

export function formatINR(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function findProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export const products: Product[] = [
  {
    slug: "beans-ankur-ardl-183",
    sku: "SA-ANK-183",
    name: "Beans Ankur ARDL-183",
    brand: "Ankur Seeds",
    category: "seeds",
    crop: ["beans", "vegetables"],
    short: "High-yielding hybrid Dolichos bean with tender, round cylindrical green pods and early picking in 45-50 days.",
    description: "Ankur ARDL-183 is a premier hybrid Dolichos bean (Sem / Wal) developed by Ankur Seeds. It features vigorous viny growth with dense foliage and high flowering capacity. The pods are round, long cylindrical, measuring 7-8 cm in length, attractive bright green in color, and bear 10-12 tender pods per inflorescence. ARDL-183 is known for early maturity with first picking starting 45-50 days after sowing and an extended harvesting window. Suitable for both Kharif (July-August) and Rabi (September-November) seasons with high market acceptance and premium prices.",
    mrp: 1300,
    price: 750,
    packSize: "250g Packet",
    rating: 4.8,
    reviews: 328,
    stock: "in",
    image: imgArdl183,
    images: [imgArdl183],
    badges: ["Best Seller", "High Yield", "Early Picking"],
    benefits: [
      "First harvest in 45-50 days with extended continuous picking cycles",
      "Tender, bright green, cylindrical pods measuring 7-8 cm in length",
      "High yield potential with 10-12 uniform pods per inflorescence",
      "Vigorous vine growth with strong field tolerance to major diseases",
    ],
    usage: "Sow at 8-10 kg per acre during Kharif (July-August) or Rabi (September-November). Recommended spacing: 100-120 cm row-to-row, 45-60 cm plant-to-plant. Support with trellises or bamboo stakes for optimum pod development and high yield.",
    specs: {
      "Type": "Hybrid Vegetable Seeds",
      "Crop": "Dolichos Bean (Sem / Wal)",
      "Variety": "ARDL-183",
      "Brand": "Ankur Seeds",
      "Pack Size": "250g Packet",
      "Pod Length": "7 - 8 cm",
      "Pod Color": "Attractive Bright Green",
      "First Picking": "45 - 50 Days after sowing",
      "Pods Per Inflorescence": "10 - 12 Pods",
      "Sowing Season": "Kharif (Jul-Aug) & Rabi (Sep-Nov)",
    },
  },
  {
    slug: "tag-globe-herbicide",
    sku: "SA-TAG-235",
    name: "Tag Globe Selective Herbicide (Oxyfluorfen 23.5% EC)",
    brand: "Tropical Agro",
    category: "crop-protection",
    crop: ["paddy", "vegetables"],
    short: "Selective pre- and early post-emergence diphenyl-ether herbicide for broadleaf and grassy weed control.",
    description: "Tag Globe by Tropical Agro System is a selective diphenyl-ether herbicide containing Oxyfluorfen 23.5% EC (w/w). It provides pre-emergence and early post-emergence control of annual grasses, sedges, and broadleaf weeds in crops such as transplanted rice, onion, potato, tea, garlic, and groundnut. Tag Globe forms a chemical barrier on the soil surface that disrupts cell membranes of germinating weeds upon contact with sunlight, delivering long-lasting residual control while ensuring crop safety.",
    mrp: 550,
    price: 450,
    packSize: "250ml Bottle",
    rating: 4.7,
    reviews: 194,
    stock: "in",
    image: imgTagGlobe,
    images: [imgTagGlobe],
    badges: ["Selective Herbicide", "Residual Barrier"],
    benefits: [
      "Controls annual broadleaf weeds, grasses, and sedges (Echinochloa, Cyperus)",
      "Dual pre-emergence and early post-emergence selective action",
      "Forms a durable herbicide film on the topsoil preventing weed emergence",
      "Safe for transplanted rice, onion, potato, and tea when applied as directed",
    ],
    usage: "Apply 200-400 ml per acre in 150-200 litres of water. In transplanted rice, apply within 3-4 days after transplanting in 2-3 cm standing water. In onion and potato, spray uniformly on moist soil before weed emergence.",
    specs: {
      "Type": "Selective Herbicide",
      "Active Ingredient": "Oxyfluorfen 23.5% EC (w/w)",
      "Chemical Group": "Diphenyl-ether",
      "Brand": "Tropical Agro System",
      "Pack Size": "250ml",
      "Mode of Action": "Contact & Residual Soil Barrier",
      "Target Weeds": "Echinochloa, Cyperus, Eclipta alba, Digitaria",
      "Target Crops": "Transplanted Rice, Onion, Potato, Tea, Groundnut",
    },
  },
  {
    slug: "beans-monsanto-moraleda",
    sku: "SA-SEM-MOR",
    name: "Seminis Moraleda Pole Beans Seeds",
    brand: "Seminis (Bayer)",
    category: "seeds",
    crop: ["beans", "vegetables"],
    short: "Premium climbing pole bean with stringless, straight, dark green fleshy pods and extended harvest window.",
    description: "Seminis Moraleda is an indeterminate climbing pole bean variety from Bayer (formerly Monsanto Vegetable Seeds). Renowned for its vigorous plant architecture, abundant flowering, and high yield potential, Moraleda produces uniform, straight, dark-to-medium green pods measuring 13-20 cm. The pods are completely stringless, tender, and fleshy with superior cooking quality and excellent market appeal. First picking starts within 50-55 days after sowing with consistent picking cycles extending across 60-80 days.",
    mrp: 1470,
    price: 1100,
    packSize: "500g Pack",
    rating: 4.9,
    reviews: 418,
    stock: "in",
    image: imgMoraleda,
    images: [imgMoraleda],
    badges: ["Bayer Seminis", "Premium Quality", "Stringless"],
    benefits: [
      "13-20 cm uniform, straight, stringless dark green pods with fleshy texture",
      "Continuous flowering and extended harvesting window spanning 60-80 days",
      "First harvest in 50-55 days commanding premium prices in vegetable markets",
      "Strong vine vigor with good field tolerance to anthracnose and rust",
    ],
    usage: "Seed rate: 5-6 kg per acre. Spacing: 90-120 cm row-to-row and 30-45 cm plant-to-plant. Requires bamboo staking or trellis wire netting support. Maintain regular picking every 3-4 days for sustained fruit setting.",
    specs: {
      "Type": "Pole Bean Seeds",
      "Brand": "Seminis (Bayer / Monsanto)",
      "Variety": "Moraleda",
      "Pack Size": "500g Pack",
      "Pod Length": "13 - 20 cm",
      "Pod Appearance": "Straight, Dark Green, Stringless, Fleshy",
      "First Picking": "50 - 55 Days after sowing",
      "Harvest Duration": "60 - 80 Days continuous picking",
      "Plant Habit": "Indeterminate Climbing Vine",
    },
  },
  {
    slug: "npk-19-19-19-soluble-fertilizer",
    sku: "SA-NPK-191919",
    name: "NPK 19:19:19 100% Water Soluble Fertilizer",
    brand: "Baramati Agro Sciences",
    category: "fertilizers",
    crop: ["vegetables", "cotton", "paddy"],
    short: "100% water-soluble balanced NPK fertilizer with equal proportions of nitrogen, phosphorus, and potassium.",
    description: "NPK 19:19:19 by Baramati Agro Sciences is a completely water-soluble, premium-grade multi-nutrient fertilizer designed for all agricultural crops, horticulture, vegetables, and flowers. Containing a balanced 1:1:1 ratio of Nitrogen (19%), Available Phosphorus (19%), and Soluble Potash (19%), it promotes healthy root establishment, lush vegetative growth, chlorophyll synthesis, and heavy flower/fruit set. Suitable for foliar spray and micro-irrigation/drip fertigation with 100% dissolution and zero nozzle clogging.",
    mrp: 299,
    price: 219,
    packSize: "1kg Bag",
    rating: 4.6,
    reviews: 685,
    stock: "in",
    image: imgNpk19,
    images: [imgNpk19],
    badges: ["100% Soluble", "Balanced NPK", "Drip & Foliar"],
    benefits: [
      "Balanced 19:19:19 ratio provides equal support for root, shoot, and fruit growth",
      "100% water soluble with zero residue, preventing drip emitter and sprayer clogging",
      "Enhances vegetative vigor, branching, flowering intensity, and fruit sizing",
      "Compatible with most water-soluble micronutrients and crop protection sprays",
    ],
    usage: "Foliar Spray: Mix 4-5 g per litre of water (800g to 1kg per acre in 200L water). Drip Fertigation: 2-3 kg per acre at 7-10 day intervals during active vegetative and flowering phases.",
    specs: {
      "Type": "Water Soluble Fertilizer",
      "Brand": "Baramati Agro Sciences",
      "Grade": "NPK 19:19:19",
      "Pack Size": "1kg Bag",
      "Total Nitrogen (N)": "19.0% Min",
      "Available Phosphorus (P2O5)": "19.0% Min",
      "Soluble Potash (K2O)": "19.0% Min",
      "Moisture": "0.5% Max",
      "Solubility": "100% in water",
    },
  },
  {
    slug: "rama-multitech-high-pressure-sprayer",
    sku: "SA-RAM-KNA16",
    name: "RAMA MULTITECH High Pressure 2-in-1 Agriculture Sprayer",
    brand: "RAMA MULTITECH",
    category: "farm-machinery",
    crop: ["cotton", "paddy", "vegetables"],
    short: "Heavy-duty 16L 2-in-1 battery and manual knapsack sprayer with high-pressure diaphragm pump and padded backrest.",
    description: "The RAMA MULTITECH 16-Litre 2-in-1 Agriculture Sprayer combines battery-powered automatic spraying with a manual hand-pump backup for uninterrupted farm operations. Equipped with a high-pressure 12V diaphragm pump (delivering up to 100 PSI working pressure) and a heavy-duty 12V 12Ah rechargeable battery, it delivers 6 to 8 hours of continuous operation (up to 25-30 tanks per charge). Features an ergonomic massage backrest, padded shoulder straps, extendable stainless steel telescopic lance, pressure regulator, and complete set of interchangeable nozzles.",
    mrp: 4499,
    price: 3299,
    packSize: "16L Tank Capacity",
    rating: 4.7,
    reviews: 532,
    stock: "in",
    image: imgSprayer,
    images: [imgSprayer],
    badges: ["2-in-1 Dual Mode", "High Pressure", "Battery + Manual"],
    benefits: [
      "Dual-mode operation: electric battery motor + manual hand pump backup in field",
      "High-pressure diaphragm pump (up to 100 PSI) for tall crop canopy penetration",
      "6-8 hours continuous spraying (25-30 tanks) on a single battery charge",
      "Ergonomic studded backrest with padded straps significantly reduces operator fatigue",
    ],
    usage: "Charge battery fully for 6-8 hours before initial use. Fill tank through upper strainer filter. Use rocker switch for battery spray or pump manual lever if battery is drained. Flush tank and spray wand with clean water after spraying chemicals.",
    specs: {
      "Type": "Farm Machinery",
      "Brand": "RAMA MULTITECH",
      "Model": "RM 2-in-1 High Pressure",
      "Tank Capacity": "16 Litres",
      "Battery": "12V 12Ah Rechargeable Dry Battery",
      "Pump": "High Pressure Diaphragm Pump (80-100 PSI)",
      "Operating Time": "6 - 8 Hours per charge",
      "Lance": "Stainless Steel Telescopic Lance",
      "Tank Material": "UV-Stabilised Heavy-Duty HDPE",
    },
  },
  {
    slug: "iffco-neem-coated-urea",
    sku: "SA-IFF-UREA45",
    name: "IFFCO Neem Coated Urea Fertilizer (46% N)",
    brand: "IFFCO",
    category: "fertilizers",
    crop: ["paddy", "cotton", "vegetables"],
    short: "Government-approved 46% Nitrogen granular fertilizer coated with pure neem oil for sustained nutrient release.",
    description: "IFFCO Neem Coated Urea is India's most trusted nitrogenous fertilizer manufactured by Indian Farmers Fertiliser Cooperative Limited. Standardized to 46% Nitrogen (N), it is coated with pure neem seed oil (min 0.035% benzene soluble content) which acts as a natural nitrification inhibitor. The neem coating slows down the conversion of nitrogen in soil, reducing leaching losses into groundwater and gaseous volatilization. It delivers prolonged nitrogen availability, improves Nitrogen Use Efficiency (NUE) by 10-15%, and acts as a natural deterrent against soil nematodes and subterranean pests.",
    mrp: 295,
    price: 266.5,
    packSize: "45kg Bag",
    rating: 4.9,
    reviews: 1420,
    stock: "in",
    image: imgUrea,
    images: [imgUrea],
    badges: ["IFFCO Original", "46% Nitrogen", "Neem Coated"],
    benefits: [
      "Neem coating slows nitrification, preventing leaching and ammonia volatilization",
      "High 46% Nitrogen concentration fuels vegetative growth, branching, and tillering",
      "Increases Nitrogen Use Efficiency (NUE) by 10-15% over uncoated urea",
      "Natural neem compounds deter soil-borne nematodes and subterranean pests",
    ],
    usage: "Apply as basal dressing and split top-dressings according to crop nutritional requirements (e.g., 45-50 kg/acre in 2-3 splits for paddy and field crops). Apply when soil has adequate moisture.",
    specs: {
      "Type": "Nitrogenous Fertilizer",
      "Brand": "IFFCO",
      "Pack Size": "45kg Bag",
      "Total Nitrogen (N)": "46.0% Min",
      "Biuret": "1.5% Max",
      "Moisture": "1.0% Max",
      "Neem Coating": "Min 0.035% Benzene Soluble Content",
      "Form": "White Prilled Granules",
    },
  },
  {
    slug: "chemchel-chelated-zinc-edta",
    sku: "SA-CHE-ZN12",
    name: "Chemchel Chelated Zinc (Zn) 12% EDTA Fertilizer",
    brand: "Aditya Chemicals",
    category: "fertilizers",
    crop: ["paddy", "cotton", "vegetables"],
    short: "100% water-soluble Zinc EDTA (12% Zn) for rapid correction of zinc deficiency via foliar and drip application.",
    description: "Chemchel Chelated Zinc 12% by Aditya Chemicals is a high-purity micronutrient fertilizer formulated with Zinc bound to ethylenediaminetetraacetic acid (EDTA). Containing 12% elemental Zinc (Zn), the chelated ring protects zinc ions from chemical fixation in alkaline or high-phosphorus soils. It dissolves instantly in water, offering rapid absorption through plant foliage and root systems. Highly effective in preventing and curing Khaira disease in paddy, little leaf in cotton/citrus, and white bud in maize, thereby promoting auxin synthesis, chlorophyll production, and substantial yield increase.",
    mrp: 280,
    price: 185,
    packSize: "100g Pouch",
    rating: 4.8,
    reviews: 275,
    stock: "in",
    image: imgZinc,
    images: [imgZinc],
    badges: ["EDTA Chelated", "100% Water Soluble", "Foliar Grade"],
    benefits: [
      "EDTA chelate protects zinc from fixation in alkaline soils (pH 4-9)",
      "Rapidly absorbed through leaves without causing scorch or burning",
      "Cures Khaira disease in paddy and little leaf in cotton/citrus crops",
      "Boosts auxin hormone synthesis, enzyme activity, and chlorophyll content",
    ],
    usage: "Foliar Spray: Dissolve 0.5g to 1.0g per litre of water (100g to 200g per acre in 150-200L water). Drip / Fertigation: Apply 500g per acre. Apply at early vegetative stage or upon appearance of deficiency symptoms.",
    specs: {
      "Type": "Micronutrient Fertilizer",
      "Brand": "Aditya Chemicals (Chemchel)",
      "Pack Size": "100g Pouch",
      "Zinc Content (Zn)": "12.0% Min (Chelated EDTA)",
      "Form": "100% Water Soluble Powder",
      "pH Stability Range": "4.0 - 9.0",
      "Lead (Pb)": "0.003% Max",
      "Application": "Foliar Spray & Fertigation",
    },
  },
];
