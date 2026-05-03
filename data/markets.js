// data/markets.js

export const marketDefinitions = {
  
  sandaga: {
    slug: "sandaga",
    name: "Sandaga",
    icon: "🏬",
    color: "#FF6A00",
    desc: "Le plus grand marché d'Afrique de l'Ouest",
    coordinates: [14.6767, -17.4372],
    type: "market",
    categories: [
      { name: "Mode", icon: "👗", desc: "Vêtements femmes, hommes, chaussures" },
      { name: "Tech", icon: "📱", desc: "Téléphones, ordinateurs, accessoires" },
      { name: "Accessoires", icon: "⌚", desc: "Montres, lunettes, bijoux" },
      { name: "Maison", icon: "🏠", desc: "Décoration, ustensiles, literie" },
      { name: "Tissus", icon: "🧵", desc: "Commerçants libanais, wax, bazin" }
    ]
  },

  colobane: {
    slug: "colobane",
    name: "Colobane",
    icon: "👕",
    color: "#FF3D00",
    desc: "Spécialiste de la fripe - Ventes flash 6h-8h",
    coordinates: [14.6967, -17.4472],
    type: "market",
    specialRule: "flash_sale",
    categories: [
      { name: "Fripe", icon: "👕", desc: "Jeans, T-shirts, Manteaux, Robes" },
      { name: "Chaussures", icon: "👟", desc: "Baskets, Ville, Sandales" }
    ]
  },

  hlm: {
    slug: "hlm",
    name: "HLM",
    icon: "🧵",
    color: "#9B59B6",
    desc: "Temple du tissu Wax",
    coordinates: [14.7267, -17.4572],
    type: "market",
    categories: [
      { name: "Wax", icon: "🎨", desc: "Wax hollandais, Wax local, Bazin riche" },
      { name: "Tissus", icon: "🧵", desc: "Coton, Satin, Soie" },
      { name: "Mercerie", icon: "🪡", desc: "Boutons, Fils, Aiguilles" },
      { name: "Vêtements", icon: "👗", desc: "Boubous, Robes sur mesure" }
    ]
  },

  kermel: {
    slug: "kermel",
    name: "Kermel",
    icon: "🥬",
    color: "#2ECC71",
    desc: "Marché aux fruits, légumes et fleurs",
    coordinates: [14.6900, -17.4550],
    type: "market",
    categories: [
      { name: "Fruits", icon: "🥭", desc: "Mangues, Oranges, Bananes, Pastèques" },
      { name: "Légumes", icon: "🥬", desc: "Oignons, Tomates, Salade, Carottes" },
      { name: "Poissons", icon: "🐟", desc: "Thiof, Dorade, Capitaine" },
      { name: "Fleurs", icon: "💐", desc: "Fleurs coupées, Plantes" }
    ]
  },

  serasse: {
    slug: "serasse",
    name: "Serasse",
    icon: "🥩",
    color: "#E74C3C",
    desc: "Spécialiste viande et épices",
    coordinates: [14.7200, -17.4400],
    type: "market",
    categories: [
      { name: "Viande", icon: "🥩", desc: "Mouton, Bœuf, Poulet" },
      { name: "Légumes", icon: "🥬", desc: "Oignons, Tomates, Salade" },
      { name: "Épices", icon: "🌶️", desc: "Piment, Poivre, Curcuma" }
    ]
  },

  thiaroye: {
    slug: "thiaroye",
    name: "Thiaroye",
    icon: "🐟",
    color: "#3498DB",
    desc: "Marché aux poissons frais",
    coordinates: [14.7400, -17.3800],
    type: "market",
    categories: [
      { name: "Poissons", icon: "🐟", desc: "Thiof, Dorade, Capitaine, Mérou" },
      { name: "Fruits de mer", icon: "🦐", desc: "Crevettes, Langoustes, Crabes" },
      { name: "Légumes", icon: "🥬", desc: "Oignons, Tomates" }
    ]
  },

  petersen: {
    slug: "petersen",
    name: "Petersen",
    icon: "📱",
    color: "#1A1A1A",
    desc: "Quartier de la tech",
    coordinates: [14.6800, -17.4450],
    type: "market",
    categories: [
      { name: "Électronique", icon: "📱", desc: "Téléphones, Ordinateurs, TV, Son, Photo" },
      { name: "Réparation", icon: "🔧", desc: "Téléphones, Ordinateurs, Tablettes" },
      { name: "Accessoires Tech", icon: "🎧", desc: "Écouteurs, Chargeurs, Coques" }
    ]
  },

  soumbedioune: {
    slug: "soumbedioune",
    name: "Soumbedioune",
    icon: "🎭",
    color: "#E67E22",
    desc: "Artisanat d'art",
    coordinates: [14.6681, -17.4333],
    type: "market",
    categories: [
      { name: "Artisanat", icon: "🎨", desc: "Sculptures, Tableaux, Poteries" },
      { name: "Souvenirs", icon: "📿", desc: "Masques, T-shirts, Bijoux artisanaux" },
      { name: "Déco", icon: "🏺", desc: "Vases, Statuettes, Tissages" }
    ]
  },

  seaplaza: {
    slug: "seaplaza",
    name: "Sea Plaza",
    icon: "🛍️",
    color: "#8E44AD",
    desc: "Centre commercial moderne",
    coordinates: [14.7400, -17.5200],
    type: "mall",
    categories: [
      { name: "Mode", icon: "👗", desc: "Marques internationales, Luxe" },
      { name: "Électronique", icon: "📱", desc: "High-tech, Gaming" },
      { name: "Beauté", icon: "💄", desc: "Parfums, Cosmétiques" },
      { name: "Maison", icon: "🏠", desc: "Décoration haut de gamme" },
      { name: "Restaurants", icon: "🍽️", desc: "Restauration" }
    ]
  },

  almadies: {
    slug: "almadies",
    name: "Almadies",
    icon: "💎",
    color: "#2980B9",
    desc: "Boutiques de luxe",
    coordinates: [14.7500, -17.5300],
    type: "reserved",
    categories: [
      { name: "Luxe", icon: "💎", desc: "Marques, Créateurs" },
      { name: "Artisanat", icon: "🎨", desc: "Artisanat haut de gamme" },
      { name: "Déco", icon: "🏺", desc: "Décoration" },
      { name: "Mode", icon: "👗", desc: "Mode" }
    ]
  }
};

export const ALL_CATEGORIES = [
  { name: "Mode", icon: "👗", desc: "Vêtements et accessoires" },
  { name: "Tech", icon: "📱", desc: "Électronique et gadgets" },
  { name: "Alimentation", icon: "🥬", desc: "Fruits, légumes, viandes" },
  { name: "Tissus", icon: "🧵", desc: "Wax et tissus" },
  { name: "Artisanat", icon: "🎨", desc: "Art et décoration" },
  { name: "Poissons", icon: "🐟", desc: "Produits de la mer" }
];

export function getCategoriesForMarket(slug) {
  if (!slug) return ALL_CATEGORIES;
  const market = marketDefinitions[slug];
  return market?.categories || ALL_CATEGORIES;
}