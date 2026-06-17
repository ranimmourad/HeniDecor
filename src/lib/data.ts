import type { Category, Product } from "./types";

export const SITE = {
  name: "Heni Décor",
  phone: "26 125 052",
  phoneIntl: "21626125052",
  facebook: "https://www.facebook.com/HeniDeco",
  whatsapp: "https://wa.me/21626125052",
  location: "Tunisie",
};

export const categories: Category[] = [
  {
    slug: "salons",
    name: "Salons",
    description: "Canapés et ensembles confortables pour un séjour chaleureux.",
    image: "/images/salon-cream-channel-1.png",
  },
  {
    slug: "salles-a-manger",
    name: "Salles à manger",
    description: "Tables et chaises élégantes pour vos moments partagés.",
    image: "/images/sam-walnut-1.png",
  },
  {
    slug: "chambres",
    name: "Chambres",
    description: "Des espaces apaisants pour un repos raffiné.",
    image: "/images/salon-cream-large-1.png",
  },
  {
    slug: "tables",
    name: "Tables",
    description: "Tables modernes en bois, marbre et finitions premium.",
    image: "/images/sam-marble-1.png",
  },
  {
    slug: "decoration",
    name: "Décoration",
    description: "Détails et accents pour sublimer votre intérieur.",
    image: "/images/showroom-cream-1.png",
  },
];

export const products: Product[] = [
  {
    id: "p1",
    slug: "salon-bouclette-cream",
    name: "Salon d'angle Bouclette Crème",
    category: "salons",
    price: 4200,
    images: ["/images/salon-cream-channel-1.png", "/images/salon-cream-modular-1.png", "/images/salon-cream-modular-2.png"],
    description:
      "Un salon d'angle généreux habillé d'un tissu bouclette crème, aux lignes douces et matelassées. Son assise profonde et ses coussins moelleux invitent à la détente dans une ambiance chaleureuse et contemporaine.",
    specs: [
      { label: "Tissu", value: "Bouclette premium" },
      { label: "Couleur", value: "Crème" },
      { label: "Configuration", value: "Modulable / angle" },
      { label: "Pieds", value: "Bois massif" },
    ],
    isNew: true,
    featured: true,
  },
  {
    id: "p2",
    slug: "salon-vert-arrondi",
    name: "Salon Vert Velours Arrondi",
    category: "salons",
    price: 4800,
    images: ["/images/salon-green-1.png", "/images/salon-green-cream-1.png"],
    description:
      "Un canapé d'angle au velours vert profond agrémenté d'un pouf arrondi. Le design organique et les coussins bicolores apportent une touche d'élégance naturelle à votre séjour.",
    specs: [
      { label: "Tissu", value: "Velours" },
      { label: "Couleur", value: "Vert sapin" },
      { label: "Configuration", value: "Angle + pouf" },
      { label: "Pieds", value: "Bois clair" },
    ],
    featured: true,
  },
  {
    id: "p3",
    slug: "salon-beige-galbe",
    name: "Salon Beige Galbé 3 places",
    category: "salons",
    price: 3600,
    images: ["/images/salon-beige-1.png"],
    description:
      "Un canapé trois places aux formes galbées et enveloppantes, recouvert d'un tissu beige texturé. Son assise basse et ses lignes fluides en font une pièce maîtresse moderne.",
    specs: [
      { label: "Tissu", value: "Tissu texturé" },
      { label: "Couleur", value: "Beige" },
      { label: "Places", value: "3 places" },
      { label: "Style", value: "Contemporain" },
    ],
    isNew: true,
  },
  {
    id: "p4",
    slug: "salon-taupe-cannele",
    name: "Salon Taupe Cannelé",
    category: "salons",
    price: 3900,
    images: ["/images/salon-taupe-1.png", "/images/salon-taupe-2.png"],
    description:
      "Ensemble de canapés taupe au dossier cannelé et pieds dorés. Un équilibre subtil entre confort moelleux et raffinement, parfait pour un salon élégant.",
    specs: [
      { label: "Tissu", value: "Suédine" },
      { label: "Couleur", value: "Taupe" },
      { label: "Pieds", value: "Métal doré" },
      { label: "Composition", value: "Ensemble 2 canapés" },
    ],
    featured: true,
  },
  {
    id: "p5",
    slug: "salon-turquoise-capitonne",
    name: "Salon Turquoise & Crème Capitonné",
    category: "salons",
    price: 5200,
    images: ["/images/salon-turquoise-1.png"],
    description:
      "Grand ensemble de salon mêlant turquoise et crème, finitions capitonnées et liserés dorés. Une composition généreuse pour les grands espaces de réception.",
    specs: [
      { label: "Tissu", value: "Velours capitonné" },
      { label: "Couleurs", value: "Turquoise / Crème" },
      { label: "Finition", value: "Liserés dorés" },
      { label: "Configuration", value: "Grand angle" },
    ],
  },
  {
    id: "p6",
    slug: "salon-mauve-poudre",
    name: "Salon Mauve Poudré",
    category: "salons",
    price: 3400,
    images: ["/images/salon-mauve-1.png"],
    description:
      "Un ensemble de salon doux et lumineux mariant crème et mauve poudré. Les assises arrondies et les coussins coordonnés créent une atmosphère apaisante.",
    specs: [
      { label: "Tissu", value: "Tissu doux" },
      { label: "Couleurs", value: "Crème / Mauve" },
      { label: "Composition", value: "3 + 2 places" },
      { label: "Style", value: "Élégant" },
    ],
  },
  {
    id: "p7",
    slug: "salon-blanc-or",
    name: "Salon Blanc & Or",
    category: "salons",
    price: 5600,
    images: ["/images/salon-white-gold-1.png"],
    description:
      "Salon blanc immaculé rehaussé de détails dorés et de fauteuils pivotants. Un ensemble luxueux et lumineux pour un intérieur de prestige.",
    specs: [
      { label: "Tissu", value: "Tissu premium" },
      { label: "Couleur", value: "Blanc / Or" },
      { label: "Composition", value: "Canapés + fauteuils" },
      { label: "Finition", value: "Pieds dorés" },
    ],
  },
  {
    id: "p8",
    slug: "salon-cream-grand-salon",
    name: "Grand Salon Bouclette Crème",
    category: "salons",
    price: 7200,
    images: ["/images/salon-cream-large-1.png", "/images/salon-cream-large-2.png"],
    description:
      "Un grand salon panoramique en bouclette crème, idéal pour les vastes espaces de vie. Coussins coordonnés ton sur ton et touches de vert pour la profondeur.",
    specs: [
      { label: "Tissu", value: "Bouclette" },
      { label: "Couleur", value: "Crème" },
      { label: "Configuration", value: "Panoramique" },
      { label: "Places", value: "6+ places" },
    ],
    featured: true,
  },
  {
    id: "p9",
    slug: "table-manger-noyer-noir",
    name: "Salle à manger Noyer & Verre Noir",
    category: "salles-a-manger",
    price: 4900,
    images: ["/images/sam-walnut-1.png"],
    description:
      "Table de salle à manger en noyer au plateau de verre noir, accompagnée de chaises bouclette crème et d'un buffet assorti. Une composition chaleureuse et moderne.",
    specs: [
      { label: "Matériau", value: "Noyer massif" },
      { label: "Plateau", value: "Verre trempé noir" },
      { label: "Chaises", value: "6 chaises bouclette" },
      { label: "Buffet", value: "Inclus" },
    ],
    isNew: true,
    featured: true,
  },
  {
    id: "p10",
    slug: "table-ronde-noire",
    name: "Table Ronde Noire & Chaises",
    category: "salles-a-manger",
    price: 2800,
    images: ["/images/sam-round-black-1.png"],
    description:
      "Table ronde au piètement nervuré noir et plateau bordé de blanc, entourée de quatre chaises bouclette. Idéale pour les espaces conviviaux.",
    specs: [
      { label: "Forme", value: "Ronde" },
      { label: "Couleur", value: "Noir / Blanc" },
      { label: "Chaises", value: "4 chaises" },
      { label: "Piètement", value: "Central nervuré" },
    ],
  },
  {
    id: "p11",
    slug: "table-ovale-noire",
    name: "Salle à manger Ovale Noire",
    category: "salles-a-manger",
    price: 4200,
    images: ["/images/sam-oval-black-1.png"],
    description:
      "Table ovale noire au piètement cannelé central, accompagnée de chaises bouclette aux bordures contrastées. Un ensemble graphique et raffiné.",
    specs: [
      { label: "Forme", value: "Ovale" },
      { label: "Couleur", value: "Noir" },
      { label: "Chaises", value: "6 chaises" },
      { label: "Style", value: "Contemporain chic" },
    ],
    featured: true,
  },
  {
    id: "p12",
    slug: "table-marbre-or",
    name: "Table Marbre & Pieds Bois",
    category: "salles-a-manger",
    price: 3300,
    images: ["/images/sam-marble-1.png"],
    description:
      "Table au plateau effet marbre avec liserés dorés et pieds en bois fuselés. Chaises capitonnées beige pour une touche scandinave élégante.",
    specs: [
      { label: "Plateau", value: "Effet marbre" },
      { label: "Pieds", value: "Bois fuselé" },
      { label: "Chaises", value: "6 chaises capitonnées" },
      { label: "Finition", value: "Liserés dorés" },
    ],
    isNew: true,
  },
  {
    id: "p13",
    slug: "table-ronde-noyer",
    name: "Table Ronde Noyer Cannelée",
    category: "tables",
    price: 2600,
    images: ["/images/sam-round-walnut-1.png"],
    description:
      "Table ronde en noyer au piètement central cannelé, entourée de chaises au design organique. Le bois chaud apporte caractère et convivialité.",
    specs: [
      { label: "Matériau", value: "Noyer" },
      { label: "Forme", value: "Ronde" },
      { label: "Piètement", value: "Cannelé central" },
      { label: "Chaises", value: "Design organique" },
    ],
    featured: true,
  },
  {
    id: "p14",
    slug: "table-ovale-noyer",
    name: "Table Ovale Noyer Premium",
    category: "tables",
    price: 4500,
    images: ["/images/sam-oval-walnut-1.png"],
    description:
      "Grande table ovale en noyer au plateau pierre clair et piètement cannelé. Chaises enveloppantes assorties pour une salle à manger d'exception.",
    specs: [
      { label: "Matériau", value: "Noyer massif" },
      { label: "Plateau", value: "Pierre claire" },
      { label: "Forme", value: "Ovale" },
      { label: "Chaises", value: "6 chaises enveloppantes" },
    ],
    isNew: true,
  },
  {
    id: "p15",
    slug: "chambre-cream-cosy",
    name: "Espace Chambre Bouclette",
    category: "chambres",
    price: 3800,
    images: ["/images/salon-cream-large-1.png"],
    description:
      "Ambiance chambre douillette en tons crème et bouclette, pensée pour le repos. Textures moelleuses et lumières tamisées pour une sérénité totale.",
    specs: [
      { label: "Style", value: "Cosy contemporain" },
      { label: "Tissu", value: "Bouclette" },
      { label: "Couleur", value: "Crème" },
      { label: "Ambiance", value: "Apaisante" },
    ],
  },
  {
    id: "p16",
    slug: "deco-showroom-cream",
    name: "Composition Déco Showroom",
    category: "decoration",
    price: 1500,
    images: ["/images/showroom-cream-1.png", "/images/salon-cream-modular-1.png"],
    description:
      "Ensemble décoratif inspiré de notre showroom : tables basses en marbre noir, vases sculpturaux et accents naturels pour parfaire votre intérieur.",
    specs: [
      { label: "Comprend", value: "Tables basses + accessoires" },
      { label: "Matériaux", value: "Marbre, métal, céramique" },
      { label: "Style", value: "Contemporain" },
      { label: "Couleurs", value: "Neutres chaudes" },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function categoryName(slug: string): string {
  return categories.find((c) => c.slug === slug)?.name ?? slug;
}

export function getSimilarProducts(product: Product, count = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, count);
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("fr-TN", { maximumFractionDigits: 0 }).format(value) + " DT";
}
