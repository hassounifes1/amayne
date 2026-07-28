export interface Product {
  id: string;
  slug: string;
  name: string;
  marketingName: string;
  type: string;
  category: string;
  collection: string;
  price: number;
  originalPrice?: number;
  description: string;
  benefits: string[];
  material: string;
  care: string;
  colors: { name: string; hex: string }[];
  sizes: number[];
  images: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  crossSellIds: string[];
  painPoint: string;
}

export interface CartItem {
  product: Product;
  size: number;
  color: string;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  name: string;
  phone: string;
  email?: string;
  city: string;
  address: string;
  landmark?: string;
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  createdAt: string;
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'lelegance-robe-longue-satinee',
    name: 'Robe Longue Satinée',
    marketingName: "L'Élégance",
    type: 'Robe',
    category: 'robes',
    collection: 'Robes Élégantes',
    price: 399,
    originalPrice: 549,
    description: "L'Élégance n'est pas qu'une robe — c'est une déclaration. Conçue pour les femmes qui refusent de compromettre entre style et confort, cette robe longue en satin premium épouse vos courbes sans les comprimer.",
    benefits: [
      'Coupe fluide qui épouse sans serrer',
      'Tissu satiné premium qui ne transparent pas',
      'Poches fonctionnelles cachées dans les coutures',
      'Doublure intégrale pour plus de confort'
    ],
    material: 'Satin de soie artificielle (100% Polyester)',
    care: 'Lavage machine à 30°, séchage à l\'ombre, repassage à basse température',
    colors: [
      { name: 'Noir', hex: '#1a1a1a' },
      { name: 'Bordeaux', hex: '#722F37' },
      { name: 'Beige Doré', hex: '#D4B896' },
      { name: 'Rose Poudré', hex: '#D4A5A5' }
    ],
    sizes: [46, 48, 50, 52, 54, 56],
    images: ['/images/products/robe-elegance-1.jpg', '/images/products/robe-elegance-2.jpg'],
    rating: 4.8,
    reviewCount: 127,
    inStock: true,
    isNew: true,
    isBestseller: true,
    crossSellIds: ['3', '5', '8'],
    painPoint: 'Tu ne trouves jamais de robe longue qui va bien en grande taille'
  },
  {
    id: '2',
    slug: 'la-serenite-robe-lin',
    name: 'Robe en Lin Froissé',
    marketingName: 'La Sérenité',
    type: 'Robe',
    category: 'robes',
    collection: 'Robes Élégantes',
    price: 449,
    originalPrice: 599,
    description: 'La Sérenité, c\'est le repos que ton corps mérite. En lin naturel froissé, elle offre un confort absolu tout en restant élégante — perfecte pour les journées chaudes au Maroc.',
    benefits: [
      'Lin naturel respirant, idéal pour le climat marocain',
      'Coupe ample qui laisse le corps respirer',
      'Texture froissé qui ne nécessite pas de repassage',
      'Poches profondes pour ta practicité au quotidien'
    ],
    material: 'Lin naturel (70% Lin, 30% Coton)',
    care: 'Lavage machine à 30°, ne pas javelliser, séchage à l\'ombre',
    colors: [
      { name: 'Beige Naturel', hex: '#C4B49A' },
      { name: 'Vert Sauge', hex: '#9CAF88' },
      { name: 'Mauve Clair', hex: '#C8A2C8' }
    ],
    sizes: [46, 48, 50, 52, 54, 56],
    images: ['/images/products/robe-serenite-1.jpg', '/images/products/robe-serenite-2.jpg'],
    rating: 4.9,
    reviewCount: 89,
    inStock: true,
    isNew: false,
    isBestseller: true,
    crossSellIds: ['5', '7', '9'],
    painPoint: 'Les robes en lin sont toujours trop étroites ou trop courtes'
  },
  {
    id: '3',
    slug: 'la-confiance-ensemble-2-pieces',
    name: 'Ensemble 2 Pièces Tunique + Pantalon',
    marketingName: 'La Confiance',
    type: 'Ensemble',
    category: 'ensembles',
    collection: 'Ensembles & Sets',
    price: 499,
    originalPrice: 699,
    description: 'La Confiance, c\'est de sortir de chez toi en sachant que tout est parfait. Cet ensemble 2 pièces combine une tunique fluide et un pantalon ajusté — un look complet en une seule pièce.',
    benefits: [
      'Look complet sans effort de coordination',
      'Tunique à manches longues avec détails brodés',
      'Pantalon à taille haute ajustable pour plus de confort',
      'Tissu extensible qui bouge avec toi'
    ],
    material: 'Coton extensible (95% Coton, 5% Élasthanne)',
    care: 'Lavage machine à 30°, pas de séchage en machine',
    colors: [
      { name: 'Marine', hex: '#1B2A4A' },
      { name: 'Noir', hex: '#1a1a1a' },
      { name: 'Vert Sauge', hex: '#9CAF88' }
    ],
    sizes: [46, 48, 50, 52, 54, 56],
    images: ['/images/products/ensemble-confiance-1.jpg', '/images/products/ensemble-confiance-2.jpg'],
    rating: 4.7,
    reviewCount: 203,
    inStock: true,
    isNew: false,
    isBestseller: true,
    crossSellIds: ['1', '5', '10'],
    painPoint: 'Tu veux un look complet mais tu dois tout combiner toi-même'
  },
  {
    id: '4',
    slug: 'laudace-tunique-brodee',
    name: 'Tunique Brodée',
    marketingName: "L'Audace",
    type: 'Tunique',
    category: 'hauts',
    collection: 'Hauts & Tuniques',
    price: 299,
    originalPrice: 399,
    description: "L'Audace, c'est de porter quelque chose qui te ressemble. Cette tunique brodée à la main est un hommage au savoir-faire marocain, adaptée pour les femmes qui osent se démarquer.",
    benefits: [
      'Broderie artisanale marocaine à la main',
      'Coupe A qui flotte gracieusement',
      'Col V échancré pour un look élégant',
      'Manches 3/4 avec détails brodés'
    ],
    material: 'Coton premium (100% Coton)',
    care: 'Lavage délicat à 30°, repassage à l\'envers',
    colors: [
      { name: 'Blanc Crème', hex: '#F5F0E6' },
      { name: 'Bordeaux', hex: '#722F37' },
      { name: 'Noir', hex: '#1a1a1a' }
    ],
    sizes: [46, 48, 50, 52, 54, 56],
    images: ['/images/products/tunique-audace-1.jpg', '/images/products/tunique-audace-2.jpg'],
    rating: 4.6,
    reviewCount: 156,
    inStock: true,
    isNew: true,
    isBestseller: false,
    crossSellIds: ['6', '8', '10'],
    painPoint: 'Les tuniques sont soit trop courtes, soit vieillottes en grande taille'
  },
  {
    id: '5',
    slug: 'lapuissance-pantalon-taille-haute',
    name: 'Pantalon Taille Haute',
    marketingName: 'La Puissance',
    type: 'Pantalon',
    category: 'pantalons',
    collection: 'Pantalons & Jupes',
    price: 249,
    originalPrice: 329,
    description: 'La Puissance, c\'est de marcher dans la rue en sachant que ton pantalon reste en place toute la journée. Taille haute, coupe ajustée, et ceinture élastique invisible — c\'est la fin des mauvaises surprises.',
    benefits: [
      'Taille haute qui reste en place toute la journée',
      'Ceinture élastique invisible pour un look propre',
      'Tissu extensible qui ne marque pas',
      'Coupe droite qui allonge la silhouette'
    ],
    material: 'Coton stretch (97% Coton, 3% Élasthanne)',
    care: 'Lavage machine à 30°, séchage en machine autorisé',
    colors: [
      { name: 'Noir', hex: '#1a1a1a' },
      { name: 'Marine', hex: '#1B2A4A' },
      { name: 'Gris Anthracite', hex: '#36454F' }
    ],
    sizes: [46, 48, 50, 52, 54, 56],
    images: ['/images/products/pantalon-puissance-1.jpg', '/images/products/pantalon-puissance-2.jpg'],
    rating: 4.8,
    reviewCount: 312,
    inStock: true,
    isNew: false,
    isBestseller: true,
    crossSellIds: ['4', '1', '7'],
    painPoint: 'Les pantalons ne passent pas ou glissent sans cesse'
  },
  {
    id: '6',
    slug: 'lafluidite-pantalon-wide-leg',
    name: 'Pantalon Wide Leg Lin',
    marketingName: 'La Fluidité',
    type: 'Pantalon',
    category: 'pantalons',
    collection: 'Pantalons & Jupes',
    price: 299,
    originalPrice: 399,
    description: 'La Fluidité, c\'est de se sentir légère même quand le thermomètre monte. Ce pantalon wide leg en lin est ton allié pour les journées chaudes — chic, confortable, et parfaitement marocain.',
    benefits: [
      'Lin naturel qui régule la température',
      'Coupe wide leg pour une circulation d\'air maximale',
      'Taille élastique avec cordon d\'ajustement',
      'Poches latérales profondes'
    ],
    material: 'Lin naturel (100% Lin)',
    care: 'Lavage machine à 30°, ne pas javelliser',
    colors: [
      { name: 'Beige Naturel', hex: '#C4B49A' },
      { name: 'Blanc', hex: '#FFFFFF' },
      { name: 'Noir', hex: '#1a1a1a' }
    ],
    sizes: [46, 48, 50, 52, 54, 56],
    images: ['/images/products/pantalon-fluidite-1.jpg', '/images/products/pantalon-fluidite-2.jpg'],
    rating: 4.7,
    reviewCount: 98,
    inStock: true,
    isNew: true,
    isBestseller: false,
    crossSellIds: ['4', '1', '9'],
    painPoint: 'Les pantalons en lin sont toujours trop serrés aux cuisses'
  },
  {
    id: '7',
    slug: 'lecharme-robe-wrap-florale',
    name: 'Robe Wrap Florale',
    marketingName: 'Le Charme',
    type: 'Robe',
    category: 'robes',
    collection: 'Robes Élégantes',
    price: 379,
    originalPrice: 499,
    description: 'Le Charme, c\'est de te sentir belle sans effort. Cette robe wrap à imprimé floral est conçue pour épouser tes courbes naturellement — pas de fermeture, pas de stress, juste élégance.',
    benefits: [
      'Style wrap qui s\'ajuste à toutes les morphologies',
      'Imprimé floral exclusif AMAYNE',
      'Tissu fluide qui ne marque pas',
      'Manches volants pour touche féminine'
    ],
    material: 'Viscose premium (100% Viscose)',
    care: 'Lavage main recommandé, séchage à l\'ombre',
    colors: [
      { name: 'Floral Rose', hex: '#E8A0A5' },
      { name: 'Floral Bleu', hex: '#89CFF0' }
    ],
    sizes: [46, 48, 50, 52, 54, 56],
    images: ['/images/products/robe-charme-1.jpg', '/images/products/robe-charme-2.jpg'],
    rating: 4.9,
    reviewCount: 74,
    inStock: true,
    isNew: false,
    isBestseller: false,
    crossSellIds: ['5', '9', '10'],
    painPoint: 'Les robes wrap sont impossibles à trouver au-dessus du 44'
  },
  {
    id: '8',
    slug: 'leraffinement-veste-daim',
    name: 'Veste en Daim',
    marketingName: 'Le Raffinement',
    type: 'Veste',
    category: 'manteaux',
    collection: 'Manteaux & Vestes',
    price: 449,
    originalPrice: 599,
    description: 'Le Raffinement, c\'est de transformer n\'importe quelle tenue en look haut de gamme. Cette veste en daim est le pièce maîtresse de ta garde-robe — elle va avec tout et elevate tout.',
    benefits: [
      'Daim premium qui ne peluche pas',
      'Coupe structurée qui affine la silhouette',
      'Doublure intérieure pour plus de confort',
      'Boutons dorés pour touche luxe'
    ],
    material: 'Daim synthétique premium (100% Polyester)',
    care: 'Nettoyage à sec recommandé',
    colors: [
      { name: 'Marron Cognac', hex: '#8B4513' },
      { name: 'Noir', hex: '#1a1a1a' }
    ],
    sizes: [46, 48, 50, 52, 54],
    images: ['/images/products/veste-raffinement-1.jpg', '/images/products/veste-raffinement-2.jpg'],
    rating: 4.6,
    reviewCount: 67,
    inStock: true,
    isNew: false,
    isBestseller: false,
    crossSellIds: ['5', '1', '3'],
    painPoint: 'Les vestes sont toujours trop serrées aux épaules et trop courtes'
  },
  {
    id: '9',
    slug: 'lesprit-chemise-oversize',
    name: 'Chemise Oversize Popeline',
    marketingName: "L'Esprit",
    type: 'Chemise',
    category: 'hauts',
    collection: 'Hauts & Tuniques',
    price: 279,
    originalPrice: 359,
    description: "L'Esprit, c'est de porter une chemise sans avoir peur qu'elle se déchire aux coutures. Cette chemise oversize en popeline premium est ta nouvelle favorite — du bureau au café, elle suit partout.",
    benefits: [
      'Popeline premium qui ne froisse pas facilement',
      'Coupe oversize délibérée pour le confort',
      'Poitrine poche pour touche masculine-chic',
      'Poignets réglables pour adapter la longueur'
    ],
    material: 'Popeline de coton (100% Coton)',
    care: 'Lavage machine à 40°, repassage autorisée',
    colors: [
      { name: 'Blanc', hex: '#FFFFFF' },
      { name: 'Bleu Ciel', hex: '#87CEEB' },
      { name: 'Rose Poudré', hex: '#D4A5A5' }
    ],
    sizes: [46, 48, 50, 52, 54, 56],
    images: ['/images/products/chemise-esprit-1.jpg', '/images/products/chemise-esprit-2.jpg'],
    rating: 4.5,
    reviewCount: 143,
    inStock: true,
    isNew: false,
    isBestseller: true,
    crossSellIds: ['6', '5', '10'],
    painPoint: 'Les chemises classiques sont toujours trop courtes et trop étroites'
  },
  {
    id: '10',
    slug: 'laliberte-robe-capuche',
    name: 'Robe Ample à Capuche',
    marketingName: 'La Liberté',
    type: 'Robe',
    category: 'robes',
    collection: 'Robes Élégantes',
    price: 349,
    originalPrice: 449,
    description: 'La Liberté, c\'est de sortir sans te soucier de ton hijab ou de ta coiffure. Cette robe ample à capuche est conçue pour les femmes qui veulent être couvertes ET élégantes — sans compromis.',
    benefits: [
      'Capuche intégrée pour plus de polyvalence',
      'Coupe ample qui offre une liberté de mouvement totale',
      'Manches longues avec poignets élastiques',
      'Tissu opaque qui ne laisse rien deviner'
    ],
    material: 'Coton-Polyester (60% Coton, 40% Polyester)',
    care: 'Lavage machine à 30°, séchage en machine autorisé',
    colors: [
      { name: 'Noir', hex: '#1a1a1a' },
      { name: 'Marine', hex: '#1B2A4A' },
      { name: 'Gris Foncé', hex: '#36454F' }
    ],
    sizes: [46, 48, 50, 52, 54, 56],
    images: ['/images/products/robe-liberte-1.jpg', '/images/products/robe-liberte-2.jpg'],
    rating: 4.8,
    reviewCount: 189,
    inStock: true,
    isNew: false,
    isBestseller: true,
    crossSellIds: ['5', '6', '9'],
    painPoint: 'Les robes à capuche sont toujours informes et sans style'
  },
  {
    id: '11',
    slug: 'lharmonie-ensemble-gilet-robe',
    name: 'Ensemble Gilet + Robe',
    marketingName: "L'Harmonie",
    type: 'Ensemble',
    category: 'ensembles',
    collection: 'Ensembles & Sets',
    price: 549,
    originalPrice: 749,
    description: "L'Harmonie, c'est de porter deux pièces qui fonctionnent ensemble comme si elles étaient faites l'une pour l'autre. Ce gilet long sur une robe fluide — c'est le style qui impressionne sans effort.",
    benefits: [
      'Gilet long qui ajoute une couche de sophistication',
      'Robe fluide en dessous pour le confort',
      'Les deux pièces portables séparément',
      'Parfait pour les sorties et les occasions spéciales'
    ],
    material: 'Gilet: Viscose | Robe: Mousseline',
    care: 'Lavage main recommandé pour les deux pièces',
    colors: [
      { name: 'Beige & Noir', hex: '#C4B49A' },
      { name: 'Noir & Doré', hex: '#1a1a1a' }
    ],
    sizes: [46, 48, 50, 52, 54, 56],
    images: ['/images/products/ensemble-harmonie-1.jpg', '/images/products/ensemble-harmonie-2.jpg'],
    rating: 4.9,
    reviewCount: 56,
    inStock: true,
    isNew: true,
    isBestseller: false,
    crossSellIds: ['1', '8', '10'],
    painPoint: 'Créer un look sophistiqué en grande taille demande trop d\'effort'
  },
  {
    id: '12',
    slug: 'ledoux-soutien-gorge-comfort',
    name: 'Soutien-Gorge Comfort',
    marketingName: 'Le Secret',
    type: 'Soutien-Gorge',
    category: 'sous-vetements',
    collection: 'Sous-Vêtements',
    price: 179,
    originalPrice: 249,
    description: 'Le Secret, c\'est de trouver enfin un soutien-gorge qui t\'accompagne sans te comprimer. Conçu avec des larges bretelles et un dos élargi — le confort que tu n\'as jamais eu.',
    benefits: [
      'Bretelles larges qui ne marquent pas',
      'Dos élargi pour plus de stabilité',
      'Cups douces et rembourrées',
      'Fermeture à 4 crochets pour ajustement précis'
    ],
    material: 'Microfibre (80% Nylon, 20% Élasthanne)',
    care: 'Lavage main uniquement, pas de séchage en machine',
    colors: [
      { name: 'Noir', hex: '#1a1a1a' },
      { name: 'Beige', hex: '#D4B896' },
      { name: 'Rose', hex: '#D4A5A5' }
    ],
    sizes: [46, 48, 50, 52, 54],
    images: ['/images/products/soutien-secret-1.jpg', '/images/products/soutien-secret-2.jpg'],
    rating: 4.7,
    reviewCount: 234,
    inStock: true,
    isNew: false,
    isBestseller: true,
    crossSellIds: ['13', '5', '9'],
    painPoint: 'Le soutien-gorge en grande taille est introuvable au Maroc'
  },
  {
    id: '13',
    slug: 'labase-legging-compression',
    name: 'Legging Haute Compression',
    marketingName: 'La Base',
    type: 'Legging',
    category: 'sous-vetements',
    collection: 'Sous-Vêtements',
    price: 229,
    originalPrice: 299,
    description: 'La Base, c\'est de commencer ta tenue par le confort. Ce legging haute compression est invisible sous tes vêtements — il lisse, il soutient, et il reste en place toute la journée.',
    benefits: [
      'Compression graduelle pour le confort',
      'Taille haute qui ne roule pas',
      'Tissu opaque — rien ne se voit à travers',
      'Coutures plates pour un effet invisible'
    ],
    material: 'Nylon-Spandex (85% Nylon, 15% Spandex)',
    care: 'Lavage machine à 30°, pas de séchage en machine',
    colors: [
      { name: 'Noir', hex: '#1a1a1a' },
      { name: 'Beige Nude', hex: '#D4B896' }
    ],
    sizes: [46, 48, 50, 52, 54, 56],
    images: ['/images/products/legging-base-1.jpg', '/images/products/legging-base-2.jpg'],
    rating: 4.6,
    reviewCount: 178,
    inStock: true,
    isNew: false,
    isBestseller: false,
    crossSellIds: ['12', '9', '5'],
    painPoint: 'Les leggings en grande taille sont transparents ou glissent'
  },
  {
    id: '14',
    slug: 'lalerte-tunique-mousseline',
    name: 'Tunique en Mousseline',
    marketingName: 'La Douceur',
    type: 'Tunique',
    category: 'hauts',
    collection: 'Hauts & Tuniques',
    price: 249,
    originalPrice: 329,
    description: 'La Douceur, c\'est de sentir le tissu léger sur ta peau par une chaude journée marocaine. Cette tunique en mousseline est la pièce parfaite pour rester fraîche et stylée.',
    benefits: [
      'Mousseline légère et transparente avec doublure',
      'Coupe évasée pour le confort maximal',
      'Manches courtes pour l\'été marocain',
      'Imprimé subtil pour touche de personnalité'
    ],
    material: 'Mousseline (100% Polyester) avec doublure coton',
    care: 'Lavage délicat à 30°, pas de repassage directe',
    colors: [
      { name: 'Blanc', hex: '#FFFFFF' },
      { name: 'Rose', hex: '#D4A5A5' },
      { name: 'Bleu ciel', hex: '#87CEEB' }
    ],
    sizes: [46, 48, 50, 52, 54, 56],
    images: ['/images/products/tunique-douceur-1.jpg', '/images/products/tunique-douceur-2.jpg'],
    rating: 4.5,
    reviewCount: 91,
    inStock: true,
    isNew: false,
    isBestseller: false,
    crossSellIds: ['6', '5', '10'],
    painPoint: 'Les tuniques légères sont toujours transparentes en grande taille'
  },
  {
    id: '15',
    slug: 'lecharme-jupe-longue-satinee',
    name: 'Jupe Longue Satinée',
    marketingName: 'La Grâce',
    type: 'Jupe',
    category: 'pantalons',
    collection: 'Pantalons & Jupes',
    price: 229,
    originalPrice: 299,
    description: 'La Grâce, c\'est de porter une jupe qui bouge avec toi. Satinée, longue, et magnifique — elle transforme n\'importe quel haut en tenue de soirée.',
    benefits: [
      'Satin fluide qui crée un mouvement élégant',
      'Taille élastique pour s\'adapter à toutes les morphologies',
      'Longueur mi-mollet pour couvrir sans alourdir',
      'Fendue sur le côté pour plus de liberté'
    ],
    material: 'Satin (100% Polyester)',
    care: 'Lavage délicat à 30°, repassage à basse température',
    colors: [
      { name: 'Noir', hex: '#1a1a1a' },
      { name: 'Bordeaux', hex: '#722F37' },
      { name: 'Vert Sauge', hex: '#9CAF88' }
    ],
    sizes: [46, 48, 50, 52, 54, 56],
    images: ['/images/products/jupe-grace-1.jpg', '/images/products/jupe-grace-2.jpg'],
    rating: 4.7,
    reviewCount: 85,
    inStock: true,
    isNew: false,
    isBestseller: false,
    crossSellIds: ['4', '9', '8'],
    painPoint: 'Les jupes longues en satin sont impossibles à trouver au-dessus du 44'
  }
];

export const collections = [
  {
    id: 'robes',
    name: 'Robes Élégantes',
    description: 'Des robes longues conçues pour sublimer tes courbes. Satin, lin, broderie — chaque pièce est une déclaration.',
    image: '/images/collections/robes.jpg',
    productCount: products.filter(p => p.category === 'robes').length
  },
  {
    id: 'ensembles',
    name: 'Ensembles & Sets',
    description: 'Des looks complets qui ne nécessitent aucun effort de coordination. Sortie de la boîte et prête à briller.',
    image: '/images/collections/ensembles.jpg',
    productCount: products.filter(p => p.category === 'ensembles').length
  },
  {
    id: 'hauts',
    name: 'Hauts & Tuniques',
    description: 'Des hauts qui ne sont ni trop courts, ni trop étroits. Conçus pour des corps réels avec des vies réelles.',
    image: '/images/collections/hauts.jpg',
    productCount: products.filter(p => p.category === 'hauts').length
  },
  {
    id: 'pantalons',
    name: 'Pantalons & Jupes',
    description: 'Des pantalons qui restent en place et des jupes qui bougent avec toi. Confort et style, sans compromis.',
    image: '/images/collections/pantalons.jpg',
    productCount: products.filter(p => p.category === 'pantalons').length
  },
  {
    id: 'manteaux',
    name: 'Manteaux & Vestes',
    description: 'Des couches extérieures qui ne sont pas un après-pensée. Structurées, élégantes, et faites pour tes épaules.',
    image: '/images/collections/manteaux.jpg',
    productCount: products.filter(p => p.category === 'manteaux').length
  },
  {
    id: 'sous-vetements',
    name: 'Sous-Vêtements',
    description: 'La base de toute tenue magnifique. Soutiens-gorge et leggings qui soutiennent sans comprimer.',
    image: '/images/collections/sous-vetements.jpg',
    productCount: products.filter(p => p.category === 'sous-vetements').length
  }
];

export const testimonials = [
  {
    id: '1',
    name: 'Fatima Z.',
    city: 'Casablanca',
    rating: 5,
    text: "Pour la première fois de ma vie, j'ai trouvé une robe qui va parfaitement. Pas besoin de retoucher, pas besoin de compenser. AMAYNE a compris mon corps.",
    product: "L'Élégance",
    verified: true,
    avatar: '/images/testimonials/fatima.jpg'
  },
  {
    id: '2',
    name: 'Khadija M.',
    city: 'Rabat',
    rating: 5,
    text: "J'ai commandé l'ensemble La Confiance pour un mariage. Tout le monde m'a demandé où j'avais acheté ma tenue. Je n'avais jamais reçu autant de compliments.",
    product: 'La Confiance',
    verified: true,
    avatar: '/images/testimonials/khadija.jpg'
  },
  {
    id: '3',
    name: 'Salma A.',
    city: 'Marrakech',
    rating: 5,
    text: "Le pantalon La Puissance est devenu mon favori. Il reste en place toute la journée, même quand je suis active. C'est exactement ce que je cherchais.",
    product: 'La Puissance',
    verified: true,
    avatar: '/images/testimonials/salma.jpg'
  },
  {
    id: '4',
    name: 'Nora B.',
    city: 'Tanger',
    rating: 5,
    text: "La qualité est incroyable pour le prix. J'ai eu des robes à 800dh qui n'étaient même pas à la moitié de la qualité d'AMAYNE. Je suis fan.",
    product: "La Sérenité",
    verified: true,
    avatar: '/images/testimonials/nora.jpg'
  },
  {
    id: '5',
    name: 'Amina R.',
    city: 'Fes',
    rating: 4,
    text: "Enfin une marque marocaine qui prend la grande taille au sérieux. Pas un 'collection grande taille' jeté là, mais une vraie marque pour nous.",
    product: "L'Audace",
    verified: true,
    avatar: '/images/testimonials/amina.jpg'
  },
  {
    id: '6',
    name: 'Leila H.',
    city: 'Agadir',
    rating: 5,
    text: "La livraison était rapide et le service client par WhatsApp est top. La robe est encore plus belle en vrai que sur les photos.",
    product: 'La Liberté',
    verified: true,
    avatar: '/images/testimonials/leila.jpg'
  }
];

export const faqs = [
  {
    category: 'Livraison',
    questions: [
      {
        q: 'Combien de temps prend la livraison ?',
        a: 'La livraison prend 3 à 5 jours ouvrés pour les grandes villes (Casablanca, Rabat, Marrakech, Tanger, Fes, Agadir) et 5 à 7 jours pour les autres villes. Tu reçois un SMS de confirmation dès que ta commande est expédiée.'
      },
      {
        q: 'La livraison est-elle vraiment gratuite ?',
        a: 'Oui, 100% gratuite sur toutes les commandes, sans montant minimum. C\'est notre engagement : pas de frais cachés, pas de surprises.'
      },
      {
        q: 'Comment suivre ma commande ?',
        a: 'Tu reçois un SMS avec le numéro de suivi dès l\'expédition. Tu peux aussi nous contacter par WhatsApp à tout moment avec ton numéro de commande pour un statut en temps réel.'
      }
    ]
  },
  {
    category: 'Tailles & Ajustement',
    questions: [
      {
        q: 'Comment choisir ma taille ?',
        a: 'Consulte notre Guide des Tailles sur chaque page produit. Mesure ton tour de poitrine, de taille et de hanches, puis compare avec notre tableau. Si tu hésites entre deux tailles, choisis la plus grande — nos tissus sont conçus pour épouser sans serrer.'
      },
      {
        q: 'Les vêtements sont-ils fidèles aux tailles indiquées ?',
        a: 'Oui ! Chaque pièce est spécifiquement conçue pour les tailles 46 à 56. Nos tailles sont marocaines et calibrées sur des mesures réelles de femmes marocaines.'
      },
      {
        q: 'La taille ne convient pas, que faire ?',
        a: 'Pas de problème ! Contacte-nous par WhatsApp sous 30 jours pour un échange gratuit. On t\'envoie la bonne taille et on récupère l\'autre à ton domicile.'
      }
    ]
  },
  {
    category: 'Retours & Échanges',
    questions: [
      {
        q: 'Comment retourner un article ?',
        a: 'Envoie-nous un message WhatsApp avec ton numéro de commande et la raison du retour. On programme un ramassage gratuit à ton domicile sous 48h.'
      },
      {
        q: 'Combien de temps ai-je pour retourner ?',
        a: 'Tu as 30 jours après réception pour retourner un article non porté avec les étiquettes encore attachées.'
      },
      {
        q: 'Comment serai-je remboursée ?',
        a: 'Le remboursement se fait en cash lors de ta prochaine livraison, ou par virement mobile (inwi money, m-wallet) selon ta préférence. Le remboursement est traité sous 48h.'
      }
    ]
  },
  {
    category: 'Paiement',
    questions: [
      {
        q: 'Puis-je payer par carte bancaire ?',
        a: 'Pour l\'instant, nous acceptons uniquement le paiement à la livraison (COD). C\'est la méthode la plus sûre et la plus utilisée au Maroc. Tu paies quand tu reçois ton colis.'
      },
      {
        q: 'Y a-t-il des frais supplémentaires ?',
        a: 'Aucun. Le prix que tu vois est le prix que tu paies. Livraison gratuite, pas de frais de service, pas de surprises.'
      },
      {
        q: 'Puis-je payer en plusieurs fois ?',
        a: 'Nous travaillons actuellement sur une option de paiement en 2 ou 3 fois. En attendant, tu peux commander plusieurs articles et les payer tous en une seule fois à la livraison.'
      }
    ]
  },
  {
    category: 'Produits',
    questions: [
      {
        q: 'Les tissus sont-ils de qualité ?',
        a: 'Absolument. Nous sélectionnons personnellement chaque tissu. Nos matières premières sont les mêmes que celles utilisées par les grandes marques européennes — lin naturel, satin premium, coton égyptien.'
      },
      {
        q: 'Comment entretenir mes vêtements AMAYNE ?',
        a: 'Chaque produit a ses instructions d\'entretien sur la fiche produit. En général : lavage machine à 30°, pas de javelliser, séchage à l\'ombre. Nos tissus sont durables et gardent leur forme après de nombreux lavages.'
      },
      {
        q: 'Nouvelles collections prévues ?',
        a: 'Oui ! Nous sortons une nouvelle collection chaque saison. Inscris-toi à notre newsletter ou suis-nous sur Instagram @amayne.official pour être la première à découvrir les nouveautés.'
      }
    ]
  }
];

export function getProduct(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}

export function getCrossSellProducts(product: Product): Product[] {
  return product.crossSellIds.map(id => products.find(p => p.id === id)).filter(Boolean) as Product[];
}

export function getBestsellers(): Product[] {
  return products.filter(p => p.isBestseller);
}

export function getNewArrivals(): Product[] {
  return products.filter(p => p.isNew);
}

export function getCollection(id: string) {
  return collections.find(c => c.id === id);
}
