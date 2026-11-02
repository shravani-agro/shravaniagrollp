import { taxonomy, type TaxonomyCategory } from "./taxonomy";
import img0 from "../assets/Hybrid Cotton Seeds.jpg";
import img4 from "../assets/Bio Fertilizer.jpg";
import img11 from "../assets/Neem Oil Spray.jpg";
import img12 from "../assets/Knapsack Sprayer.jpg";
import img16 from "../assets/Drip Irrigation Kit.jpg";

export type Category = TaxonomyCategory;

export const categories: Category[] = taxonomy;

export const crops = [
  {
    slug: "cotton",
    name: "Cotton",
    season: "Kharif",
    image: "https://images.unsplash.com/photo-1595855759920-86582396756a?w=800&q=80",
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
    slug: "hybrid-cotton-seeds",
    sku: "SA-HYB-5732",
    name: "Hybrid Cotton Seeds",
    brand: "Mahyco",
    category: "seeds",
    crop: ["cotton"],
    short: "BG-II Bt hybrid cotton seeds with high boll retention and excellent fibre quality.",
    description: "Mahyco BG-II Bt hybrid cotton seeds are genetically improved Bollgard-II event (Cry1Ac + Cry2Ab) seeds offering dual-gene resistance against American, spotted, and pink bollworms. These seeds produce sturdy plants with high boll retention, uniform maturity, and superior fibre length (30-32mm). Ideal for Kharif season cultivation across central and southern India. Each 450g packet covers approximately 1 acre with a seed rate of 450-500g per acre. Treated with imidacloprid and carbendazim for protection against sucking pests and soil-borne diseases. Average yield: 12-15 quintals per acre.",
    mrp: 850,
    price: 720,
    packSize: "450g Packet",
    rating: 4.6,
    reviews: 1824,
    stock: "in",
    image: img0,
    images: [img0],
    badges: ["Best Seller", "BG-II"],
    benefits: ["Dual-gene bollworm resistance", "30-32mm fibre length", "12-15 qtl/acre yield", "Dual fungicide treated"],
    usage: "Sow at 450-500g per acre during Kharif (Jun-Jul). Row spacing: 120cm x 60cm. Perform thinning at 15 days. Apply recommended fertiliser dose of 150:75:75 NPK kg/ha.",
    specs: {"Type":"Seeds","Brand":"Mahyco","Pack Size":"450g","Coverage":"1 Acre","Event":"BG-II (Cry1Ac + Cry2Ab)","Yield":"12-15 qtl/acre","Fibre Length":"30-32mm"}
  },
  {
    slug: "bio-fertilizer",
    sku: "SA-BIO-7014",
    name: "Bio Fertilizer",
    brand: "IFFCO",
    category: "fertilizers",
    crop: ["cotton", "maize", "paddy", "wheat", "vegetables", "pulses"],
    short: "IFFCO consortium bio-fertiliser with Rhizobium, Azotobacter, and PSB for soil health.",
    description: "IFFCO bio-fertiliser (NPF 110) is a consortium of beneficial microorganisms including Rhizobium, Azotobacter, Azospirillum, and Phosphate Solubilising Bacteria (PSB) with a minimum viable count of 5x10⁷ CFU/g. It fixes atmospheric nitrogen (20-40 kg N/ha/year) and solubilises fixed phosphorus (15-20 kg P₂O₅/ha) into plant-available forms. Regular use reduces chemical fertiliser requirement by 25-30% while improving soil organic carbon and microbial activity. Suitable for all crops. Each 5kg pack treats 1 acre. Carrier-based formulation in lignite or clay base.",
    mrp: 600,
    price: 500,
    packSize: "5kg Bag",
    rating: 4.2,
    reviews: 645,
    stock: "in",
    image: img4,
    images: [img4],
    badges: ["Organic", "Consortium"],
    benefits: ["Nitrogen fixation 20-40 kg/ha", "Phosphate solubilisation", "25-30% chemical fertiliser reduction", "Improves soil microbial activity"],
    usage: "Mix 5kg per acre with 50kg well-decomposed FYM. Apply near root zone at sowing or through drip irrigation at 2kg/acre at 15-day intervals.",
    specs: {"Type":"Fertilizers","Brand":"IFFCO","Pack Size":"5kg","CFU":"5x10⁷/g","Coverage":"1 Acre","Organisms":"Rhizobium, Azotobacter, PSB"}
  },
  {
    slug: "neem-oil-spray",
    sku: "SA-NEE-4611",
    name: "Neem Oil Spray",
    brand: "Organic Agro",
    category: "crop-protection",
    crop: ["vegetables", "fruits", "ornamental", "cotton", "paddy"],
    short: "Cold-pressed neem oil (Azadirachtin 3000 PPM) organic insecticide and miticide.",
    description: "Organic Agro neem oil spray is made from cold-pressed neem seed kernel oil standardised to Azadirachtin content of 3000 PPM (0.3% min). It acts as an antifeedant, repellent, oviposition deterrent, and insect growth regulator disrupting ecdysone hormone for over 200 species of insects and mites. Effective against aphids, whiteflies, caterpillars (Spodoptera, Helicoverpa), leaf miners, thrips, and spider mites. Safe for beneficial insects including honeybees (Apis mellifera), ladybugs, and predatory wasps. Approved for organic farming by NPOP (India) and NOP (USA) standards.",
    mrp: 450,
    price: 380,
    packSize: "500ml Bottle",
    rating: 4.3,
    reviews: 1780,
    stock: "in",
    image: img11,
    images: [img11],
    badges: ["Organic", "NPOP Certified"],
    benefits: ["Azadirachtin 3000 PPM", "IGR + antifeedant action", "Honeybee safe", "NPOP & NOP certified"],
    usage: "Mix 5ml per litre with 0.5ml neutral soap as emulsifier. Spray in evening hours. Repeat every 10-14 days. Shake well before use. PHI: 1 day.",
    specs: {"Type":"Crop Protection","Brand":"Organic Agro","Pack Size":"500ml","Azadirachtin":"3000 PPM (0.3%)","Certification":"NPOP, NOP","PHI":"1 Day"}
  },
  {
    slug: "knapsack-sprayer",
    sku: "SA-KNA-5021",
    name: "Knapsack Sprayer",
    brand: "Neptune",
    category: "farm-machinery",
    crop: ["cotton", "paddy", "vegetables", "orchards"],
    short: "16-litre manual knapsack sprayer with brass pump, adjustable nozzle, and pressure regulator.",
    description: "Neptune 16-litre manual knapsack sprayer (model NK-16) is a heavy-duty sprayer designed for efficient pesticide, herbicide, and foliar fertiliser application. Features a corrosion-resistant brass pump cylinder with leather cup seal delivering 4-5 kg/cm² working pressure, adjustable brass cone nozzle for fine to coarse spray patterns, built-in pressure regulator, and 1.5m delivery hose. The translucent HDPE tank (UV-stabilised) allows liquid level monitoring. Ergonomic padded shoulder straps and waist belt reduce fatigue during extended use. Ideal for small to medium farms, orchards, and vineyards. Includes spare parts kit and maintenance tool.",
    mrp: 2200,
    price: 1850,
    packSize: "16L Capacity",
    rating: 4.3,
    reviews: 3450,
    stock: "in",
    image: img12,
    images: [img12],
    badges: ["Heavy Duty", "Brass Pump"],
    benefits: ["Brass pump with leather seal", "Adjustable cone nozzle", "Pressure regulator included", "UV-stabilised HDPE tank"],
    usage: "Fill max 3/4 tank. Pump 8-10 strokes to pressurise. Adjust nozzle for desired spray pattern. Clean tank and pump with fresh water after every use. Lubricate pump cup with grease monthly.",
    specs: {"Type":"Farm Machinery","Brand":"Neptune","Model":"NK-16","Capacity":"16L","Working Pressure":"4-5 kg/cm²","Material":"HDPE (UV stabilised)"}
  },
  {
    slug: "drip-irrigation-kit",
    sku: "SA-DRI-9299",
    name: "Drip Irrigation Kit",
    brand: "Jain Irrigation",
    category: "irrigation",
    crop: ["vegetables", "fruits", "cash crops", "sugarcane"],
    short: "Complete 1-acre drip irrigation kit with PC drippers, disc filter, and venturi injector.",
    description: "Jain Irrigation premium drip kit for 1 acre includes: 50mm HDPE mainline (50m), 16mm LLDPE lateral pipes (2400m), online pressure-compensating drippers (4 LPH @ 1 kg/cm², 10,000 drippers), 2-inch disc filter (120 mesh), venturi fertiliser injector (1 inch), control valves, end plugs, and all necessary PVC/PP fittings. Delivers water directly to the root zone, reducing water usage by 40-50% compared to flood irrigation. Coefficient of variation (CV) < 3% ensures uniform water distribution across undulating terrain. Includes detailed installation manual with CAD layout design. Ideal for vegetables, fruits, and cash crops.",
    mrp: 12000,
    price: 10500,
    packSize: "1 Acre Kit",
    rating: 4.5,
    reviews: 2780,
    stock: "in",
    image: img16,
    images: [img16],
    badges: ["1 Acre Kit", "Water Saving"],
    benefits: ["Complete 1-acre installation", "PC drippers 4 LPH CV<3%", "40-50% water saving", "Disc filter + venturi included"],
    usage: "Lay 50mm mainline, connect 16mm laterals at crop row spacing. Punch holes and insert drippers at plant spacing. Flush lines before fitting end caps. Clean disc filter weekly.",
    specs: {"Type":"Irrigation Systems","Brand":"Jain Irrigation","Pack Size":"1 Acre Kit","Mainline":"50mm HDPE 50m","Laterals":"16mm LLDPE 2400m","Drippers":"PC 4 LPH (10,000 pcs)","Filter":"2-inch Disc 120 Mesh"}
  }
];
