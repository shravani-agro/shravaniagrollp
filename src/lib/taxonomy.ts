export type Subcategory = {
  slug: string;
  name: string;
  items: string[];
};

export type TaxonomyCategory = {
  slug: string;
  name: string;
  tagline: string;
  count: number;
  image: string;
  subcategories: Subcategory[];
};

export const taxonomy: TaxonomyCategory[] = [
  {
    slug: "seeds",
    name: "Seeds",
    tagline: "High-yield hybrid bean and vegetable seeds",
    count: 2,
    image: "https://images.unsplash.com/photo-1595855759920-86582396756a?w=800&q=80",
    subcategories: [
      {
        slug: "vegetable-seeds",
        name: "Vegetable & Bean Seeds",
        items: [
          "Beans Ankur ARDL-183 (Dolichos Bean)",
          "Seminis Moraleda Pole Beans (Bayer)",
        ],
      },
    ],
  },
  {
    slug: "crop-protection",
    name: "Crop Protection",
    tagline: "Selective herbicides and crop defense formulations",
    count: 1,
    image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&q=80",
    subcategories: [
      {
        slug: "herbicides",
        name: "Selective Herbicides",
        items: [
          "Tag Globe Selective Herbicide (Oxyfluorfen 23.5% EC)",
        ],
      },
    ],
  },
  {
    slug: "fertilizers",
    name: "Fertilizers & Nutrients",
    tagline: "Water-soluble, neem-coated and chelated micronutrients",
    count: 3,
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
    subcategories: [
      {
        slug: "water-soluble-fertilizers",
        name: "Water Soluble Fertilizers",
        items: [
          "NPK 19:19:19 100% Water Soluble Fertilizer",
        ],
      },
      {
        slug: "nitrogen-fertilizers",
        name: "Nitrogenous Fertilizers",
        items: [
          "IFFCO Neem Coated Urea (46% N)",
        ],
      },
      {
        slug: "chelated-micronutrients",
        name: "Chelated Micronutrients",
        items: [
          "Chemchel Chelated Zinc (Zn) 12% EDTA",
        ],
      },
    ],
  },
  {
    slug: "farm-machinery",
    name: "Farm Machinery",
    tagline: "High-pressure battery and manual agricultural sprayers",
    count: 1,
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
    subcategories: [
      {
        slug: "sprayers",
        name: "Agricultural Sprayers",
        items: [
          "RAMA MULTITECH High Pressure 2-in-1 Agriculture Sprayer",
        ],
      },
    ],
  },
];
