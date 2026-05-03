// data/markets.js
export const marketsData = [
  {
    slug: "sandaga",
    name: "Sandaga",
    description: "Le poumon économique de Dakar. On y trouve de tout : vêtements, électronique, artisanat, cosmétiques et produits du quotidien.",
    sellers: 850,
    products: 2543,
    rating: "4.8",
    reviews: "2.1k",
    gradient: "linear-gradient(135deg, #FF9A9E 0%, #FECFEF 100%)"
  },
  {
    slug: "colobane",
    name: "Colobane",
    description: "Le paradis de la friperie et de la seconde main. Des milliers de vêtements importés à des prix imbattables.",
    sellers: 620,
    products: 1827,
    rating: "4.6",
    reviews: "1.5k",
    gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)"
  },
  {
    slug: "hlm",
    name: "HLM",
    description: "La référence du Wax et des tissus traditionnels. Idéal pour les couturiers, créateurs et amateurs de mode africaine.",
    sellers: 710,
    products: 2341,
    rating: "4.9",
    reviews: "980",
    gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
  },
  {
    slug: "tilene",
    name: "Tilène",
    description: "Marché alimentaire frais. Fruits, légumes, épices et produits locaux directement des producteurs.",
    sellers: 430,
    products: 1234,
    rating: "4.7",
    reviews: "756",
    gradient: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)"
  },
  {
    slug: "soumbedioune",
    name: "Soumbedioune",
    description: "Village artisanal au bord de la mer. Bijoux, sculptures, peintures et objets d'art sénégalais.",
    sellers: 310,
    products: 892,
    rating: "4.8",
    reviews: "654",
    gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)"
  },
  {
    slug: "petersen",
    name: "Petersen",
    description: "Le hub technologique. Téléphones, accessoires, informatique et gadgets électroniques.",
    sellers: 540,
    products: 1102,
    rating: "4.5",
    reviews: "432",
    gradient: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)"
  }
];

export function getMarketBySlug(slug) {
  return marketsData.find((m) => m.slug === slug) || null;
}