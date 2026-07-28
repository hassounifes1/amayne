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
  ingredients: string;
  weights: { label: string; grams: number; price: number }[];
  images: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  crossSellIds: string[];
  upsellId?: string;
  downsellId?: string;
  painPoint: string;
  emoji: string;
}

export interface CartItem {
  product: Product;
  weight: number;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  name: string;
  phone: string;
  city: string;
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  createdAt: string;
}

export const CITIES = [
  'Casablanca', 'Rabat', 'Marrakech', 'Tanger', 'Fes', 'Agadir',
  'Meknès', 'Oujda', 'Kenitra', 'Tetouan', 'Salé', 'Nador', 'Autre',
];

export const products: Product[] = [
  {
    id: '1',
    slug: 'lorigine-amlou-beldi-amandes',
    name: 'Amlou Beldi Amandes & Miel',
    marketingName: "L'Origine",
    type: 'Amlou Classique',
    category: 'classiques',
    collection: 'Classiques',
    price: 79,
    originalPrice: 99,
    description: "L'Origine, c'est l'amlou comme ta grand-mère du Souss le préparait. Amandes torréfiées à la main, huile d'argan pressée à froid, miel pur du Maroc — trois ingrédients, zéro compromis. Pas de Nutella. Pas d'huile de palme. Juste la tradition.",
    benefits: [
      'Énergie naturelle durable — idéal au petit-déjeuner',
      'Riche en vitamine E et acides gras essentiels de l\'argan',
      '100% naturel — sans conservateurs, sans sucre ajouté',
      'Fabriqué au Souss par des coopératives féminines',
    ],
    ingredients: 'Amandes du Souss (65%), huile d\'argan alimentaire bio (25%), miel naturel du Maroc (10%)',
    weights: [
      { label: '190g', grams: 190, price: 79 },
      { label: '350g', grams: 350, price: 129 },
      { label: '700g', grams: 700, price: 199 },
    ],
    images: ['/images/products/origine.jpg'],
    rating: 4.9,
    reviewCount: 847,
    inStock: true,
    isNew: false,
    isBestseller: true,
    crossSellIds: ['4', '11', '2'],
    upsellId: '10',
    downsellId: '2',
    painPoint: 'Tu manges du Nutella plein de sucre et d\'huile de palme — ton corps mérite mieux',
    emoji: '🫙',
  },
  {
    id: '2',
    slug: 'laforce-amlou-cacahuetes',
    name: 'Amlou Cacahuètes Traditionnel',
    marketingName: 'La Force',
    type: 'Amlou Cacahuètes',
    category: 'classiques',
    collection: 'Classiques',
    price: 57,
    originalPrice: 75,
    description: 'La Force, c\'est l\'énergie du peuple berbère à prix accessible. Cacahuètes torréfiées, argan et miel — le petit-déjeuner des champions sans te ruiner. Parfait pour toute la famille.',
    benefits: [
      'Prix accessible sans sacrifier la qualité',
      'Riche en protéines végétales pour l\'énergie matinale',
      'Texture crémeuse, goût authentique du Maroc central',
      'Format familial économique',
    ],
    ingredients: 'Cacahuètes torréfiées (70%), huile d\'argan alimentaire (20%), miel naturel (10%)',
    weights: [
      { label: '190g', grams: 190, price: 57 },
      { label: '350g', grams: 350, price: 89 },
    ],
    images: ['/images/products/force.jpg'],
    rating: 4.7,
    reviewCount: 623,
    inStock: true,
    isBestseller: true,
    crossSellIds: ['1', '9', '11'],
    upsellId: '1',
    painPoint: 'Tu veux de l\'énergie naturelle sans te ruiner — l\'amlou du souk te fait douter',
    emoji: '🥜',
  },
  {
    id: '3',
    slug: 'lereveil-amlou-light',
    name: 'Amlou Light Sans Sucre Ajouté',
    marketingName: 'Le Réveil',
    type: 'Amlou Light',
    category: 'sante',
    collection: 'Santé & Light',
    price: 80,
    originalPrice: 99,
    description: 'Le Réveil, c\'est le plaisir de l\'amlou sans culpabilité. Sans sucre ajouté, sans miel — juste amandes torréfiées et huile d\'argan pure. Pour celles et ceux qui surveillent leur glycémie mais refusent de renoncer au goût.',
    benefits: [
      'Index glycémique bas — adapté aux diabétiques',
      'Zéro sucre ajouté, zéro miel',
      'Même texture onctueuse que l\'amlou traditionnel',
      'Riche en bonnes graisses et protéines',
    ],
    ingredients: 'Amandes torréfiées (80%), huile d\'argan alimentaire bio (20%)',
    weights: [
      { label: '190g', grams: 190, price: 80 },
      { label: '350g', grams: 350, price: 135 },
    ],
    images: ['/images/products/reveil.jpg'],
    rating: 4.8,
    reviewCount: 412,
    inStock: true,
    isNew: true,
    isBestseller: false,
    crossSellIds: ['5', '1', '10'],
    upsellId: '1',
    downsellId: '2',
    painPoint: 'Tu surveilles ta glycémie mais tu veux te faire plaisir au petit-déjeuner',
    emoji: '🌿',
  },
  {
    id: '4',
    slug: 'lindulgence-amlou-chocolat-noir',
    name: 'Amlou Chocolat Noir 70%',
    marketingName: "L'Indulgence",
    type: 'Amlou Chocolat',
    category: 'gourmand',
    collection: 'Gourmand',
    price: 80,
    originalPrice: 105,
    description: "L'Indulgence, c'est quand l'amlou rencontre le cacao Valrhona. Chocolat noir 70% sans sucre ajouté, amandes et argan — le goût du Nutella pour adultes exigeants. Gourmandise sans compromis.",
    benefits: [
      'Cacao Valrhona 70% — qualité pâtissière',
      'Antioxydants du chocolat noir + vitamine E de l\'argan',
      'Sans sucre ajouté — sucré naturellement par le miel',
      'Parfait sur crêpes, msemen et gaufres',
    ],
    ingredients: 'Amandes (55%), cacao noir Valrhona 70% (15%), huile d\'argan (20%), miel naturel (10%)',
    weights: [
      { label: '190g', grams: 190, price: 80 },
      { label: '350g', grams: 350, price: 139 },
    ],
    images: ['/images/products/indulgence.jpg'],
    rating: 4.9,
    reviewCount: 534,
    inStock: true,
    isBestseller: true,
    crossSellIds: ['5', '8', '1'],
    upsellId: '6',
    downsellId: '1',
    painPoint: 'Tu veux du chocolat gourmand sans la culpabilité du Nutella industriel',
    emoji: '🍫',
  },
  {
    id: '5',
    slug: 'ladouceur-amlou-chocolat-light',
    name: 'Amlou Chocolat Noir Light',
    marketingName: 'La Douceur',
    type: 'Amlou Chocolat Light',
    category: 'gourmand',
    collection: 'Gourmand',
    price: 82,
    originalPrice: 105,
    description: 'La Douceur, c\'est l\'Indulgence allégée. Chocolat noir et amlou light réunis — le meilleur des deux mondes pour toute la famille. Les enfants adorent, les parents approuvent.',
    benefits: [
      'Version allégée du chocolat noir — moins calorique',
      'Plaisir gourmand pour petits et grands',
      'Parfait en goûter après l\'école',
      'Ingrédients 100% naturels',
    ],
    ingredients: 'Amandes light (60%), cacao noir (12%), huile d\'argan (20%), miel (8%)',
    weights: [
      { label: '190g', grams: 190, price: 82 },
      { label: '350g', grams: 350, price: 142 },
    ],
    images: ['/images/products/douceur.jpg'],
    rating: 4.7,
    reviewCount: 298,
    inStock: true,
    crossSellIds: ['4', '1', '11'],
    upsellId: '4',
    downsellId: '1',
    painPoint: 'Tes enfants veulent du goût, toi tu veux de la qualité — impossible de concilier ?',
    emoji: '🍯',
  },
  {
    id: '6',
    slug: 'letresor-amlou-pistache',
    name: 'Amlou Pistache Premium',
    marketingName: 'Le Trésor',
    type: 'Amlou Pistache',
    category: 'premium',
    collection: 'Premium',
    price: 129,
    originalPrice: 169,
    description: 'Le Trésor, c\'est l\'amlou réinventé au sommet du luxe. Pistaches du Souss torréfiées, argan bio et miel d\'acacia — une texture veloutée et un goût qui ne ressemble à rien d\'autre. Le cadeau parfait.',
    benefits: [
      'Pistaches premium torréfiées à la main (76%)',
      'Texture la plus onctueuse de notre gamme',
      'Idéal en cadeau — coffret disponible',
      'Riche en fer, magnésium et protéines',
    ],
    ingredients: 'Pistaches du Souss (76%), amandes (24%), huile d\'argan bio, miel d\'acacia',
    weights: [
      { label: '190g', grams: 190, price: 129 },
      { label: '350g', grams: 350, price: 219 },
    ],
    images: ['/images/products/tresor.jpg'],
    rating: 5.0,
    reviewCount: 187,
    inStock: true,
    isNew: true,
    isBestseller: false,
    crossSellIds: ['7', '10', '11'],
    upsellId: '11',
    downsellId: '1',
    painPoint: 'Tu cherches un cadeau unique et premium — pas un pot de Nutella emballé',
    emoji: '💎',
  },
  {
    id: '7',
    slug: 'lenergie-amlou-cajou-dattes',
    name: 'Amlou Cajou & Dattes',
    marketingName: "L'Énergie",
    type: 'Amlou Cajou',
    category: 'premium',
    collection: 'Premium',
    price: 93,
    originalPrice: 119,
    description: "L'Énergie, c'est le super-petit-déjeuner des sportifs et des travailleurs acharnés. Noix de cajou, dattes Medjool et argan — un shot naturel de force pour affronter ta journée.",
    benefits: [
      'Dattes Medjool pour énergie rapide et durable',
      'Cajou riche en magnésium et zinc',
      'Parfait avant le sport ou en collation de 16h',
      'Sucrant 100% naturel — pas de sucre raffiné',
    ],
    ingredients: 'Noix de cajou (50%), dattes Medjool (20%), huile d\'argan bio (20%), miel (10%)',
    weights: [
      { label: '190g', grams: 190, price: 93 },
      { label: '350g', grams: 350, price: 159 },
    ],
    images: ['/images/products/energie.jpg'],
    rating: 4.8,
    reviewCount: 356,
    inStock: true,
    isBestseller: true,
    crossSellIds: ['1', '6', '3'],
    upsellId: '6',
    downsellId: '2',
    painPoint: 'Tu manques d\'énergie au sport, au travail ou en fin de journée de ramadan',
    emoji: '⚡',
  },
  {
    id: '8',
    slug: 'lagourmandise-amlou-noisettes-chocolat',
    name: 'Amlou Noisettes & Chocolat',
    marketingName: 'La Gourmandise',
    type: 'Amlou Noisettes',
    category: 'gourmand',
    collection: 'Gourmand',
    price: 96,
    originalPrice: 125,
    description: 'La Gourmandise, c\'est la rencontre des noisettes du Rif et du cacao Valrhona. Un amlou gourmand qui transforme ton pain grillé en dessert. Les voisins vont te demander la recette.',
    benefits: [
      'Noisettes torréfiées du Rif — arôme intense',
      'Cacao Valrhona sans sucre ajouté',
      'Parfait pour pâtisseries, brownies et smoothies',
      'Texture granuleuse authentique — signe de qualité',
    ],
    ingredients: 'Noisettes du Rif (60%), huile d\'argan (20%), cacao Valrhona (10%), miel (10%)',
    weights: [
      { label: '190g', grams: 190, price: 96 },
      { label: '350g', grams: 350, price: 165 },
    ],
    images: ['/images/products/gourmandise.jpg'],
    rating: 4.8,
    reviewCount: 267,
    inStock: true,
    crossSellIds: ['4', '5', '1'],
    upsellId: '6',
    downsellId: '4',
    painPoint: 'Tu veux impressionner tes invités avec un petit-déjeuner d\'exception',
    emoji: '🌰',
  },
  {
    id: '9',
    slug: 'leclassique-amlou-cacahuetes-sel',
    name: 'Amlou Cacahuètes & Fleur de Sel',
    marketingName: 'Le Classique',
    type: 'Amlou Salé-Sucré',
    category: 'classiques',
    collection: 'Classiques',
    price: 57,
    originalPrice: 72,
    description: 'Le Classique, c\'est le mariage audacieux du salé et du sucré. Cacahuètes, fleur de sel de l\'Atlas et argan — une explosion de saveurs qui réveille tes papilles. Le préféré des amateurs de sensations.',
    benefits: [
      'Fleur de sel de l\'Atlas — minéralité unique',
      'Contraste salé-sucré addictif',
      'Prix le plus accessible de la gamme premium',
      'Parfait sur crêpes salées et toast',
    ],
    ingredients: 'Cacahuètes (68%), huile d\'argan (20%), miel (10%), fleur de sel de l\'Atlas (2%)',
    weights: [
      { label: '190g', grams: 190, price: 57 },
      { label: '350g', grams: 350, price: 89 },
    ],
    images: ['/images/products/classique.jpg'],
    rating: 4.6,
    reviewCount: 445,
    inStock: true,
    crossSellIds: ['2', '1', '7'],
    upsellId: '1',
    painPoint: 'Tu en as marre des pâtes à tartiner monotones — tu veux du caractère',
    emoji: '🧂',
  },
  {
    id: '10',
    slug: 'lordusouss-amlou-bio-premium',
    name: 'Amlou Amandes Bio Premium',
    marketingName: "L'Or du Souss",
    type: 'Amlou Bio',
    category: 'premium',
    collection: 'Premium',
    price: 99,
    originalPrice: 129,
    description: "L'Or du Souss, c'est l'amlou certifié bio pour ceux qui ne transigent pas. Amandes bio 80%, argan IGP Souss-Massa, miel d'oranger bio — la référence absolue. Quand tu ne fais plus confiance au souk.",
    benefits: [
      'Certification bio — traçabilité totale',
      'Amandes bio 80% — la concentration la plus élevée',
      'Huile d\'argan IGP Souss-Massa',
      'Préparé en petite quantité — fraîcheur garantie',
    ],
    ingredients: 'Amandes bio (80%), huile d\'argan bio IGP (12%), miel d\'oranger bio (8%)',
    weights: [
      { label: '190g', grams: 190, price: 99 },
      { label: '350g', grams: 350, price: 169 },
      { label: '700g', grams: 700, price: 289 },
    ],
    images: ['/images/products/or-souss.jpg'],
    rating: 4.9,
    reviewCount: 523,
    inStock: true,
    isBestseller: true,
    crossSellIds: ['1', '6', '11'],
    upsellId: '11',
    downsellId: '1',
    painPoint: 'Tu ne fais plus confiance à l\'amlou du souk — tu veux une preuve de qualité',
    emoji: '✨',
  },
  {
    id: '11',
    slug: 'leduo-gourmand-pack-2-pots',
    name: 'Pack Duo Gourmand — 2 Pots au Choix',
    marketingName: 'Le Duo Gourmand',
    type: 'Pack',
    category: 'packs',
    collection: 'Packs & Coffrets',
    price: 139,
    originalPrice: 178,
    description: 'Le Duo Gourmand, c\'est deux saveurs, un prix imbattable. Compose ton duo idéal — classique + chocolat, ou pistache + cajou — et économise 22%. Le cadeau parfait ou la découverte de la gamme.',
    benefits: [
      'Économise 22% vs achat séparé',
      'Compose ton duo parmi 8 saveurs',
      'Emballage cadeau offert',
      'Livraison gratuite incluse',
    ],
    ingredients: 'Selon les 2 saveurs choisies — voir fiches produits individuelles',
    weights: [
      { label: '2 × 190g', grams: 380, price: 139 },
      { label: '2 × 350g', grams: 700, price: 239 },
    ],
    images: ['/images/products/duo.jpg'],
    rating: 4.9,
    reviewCount: 678,
    inStock: true,
    isBestseller: true,
    crossSellIds: ['12', '1', '4'],
    downsellId: '1',
    painPoint: 'Tu veux goûter plusieurs saveurs sans payer le prix fort',
    emoji: '🎁',
  },
  {
    id: '12',
    slug: 'letresor-familial-pot-700g',
    name: 'Pot Familial 700g',
    marketingName: 'Le Trésor Familial',
    type: 'Format Familial',
    category: 'packs',
    collection: 'Packs & Coffrets',
    price: 149,
    originalPrice: 199,
    description: 'Le Trésor Familial, c\'est l\'amlou pour toute la semaine. 700g de L\'Origine dans un pot verre réutilisable — le meilleur rapport qualité-prix de notre gamme. Une famille, un pot, zéro gaspillage.',
    benefits: [
      'Meilleur prix au gramme — économise 25%',
      'Pot verre réutilisable et recyclable',
      'Assez pour 2 semaines de petit-déjeuner familial',
      'Même recette que L\'Origine — qualité identique',
    ],
    ingredients: 'Amandes du Souss (65%), huile d\'argan alimentaire bio (25%), miel naturel du Maroc (10%)',
    weights: [
      { label: '700g', grams: 700, price: 149 },
    ],
    images: ['/images/products/familial.jpg'],
    rating: 4.8,
    reviewCount: 389,
    inStock: true,
    isBestseller: true,
    crossSellIds: ['11', '4', '7'],
    downsellId: '1',
    painPoint: 'Tu rachètes chaque semaine — le format familial te fait économiser',
    emoji: '🏠',
  },
];

export const collections = [
  {
    id: 'classiques',
    name: 'Classiques',
    description: 'Les recettes ancestrales du Souss — amandes, cacahuètes, argan et miel. L\'amlou authentique tel qu\'il se doit.',
    emoji: '🫙',
    productCount: products.filter(p => p.category === 'classiques').length,
  },
  {
    id: 'gourmand',
    name: 'Gourmand',
    description: 'Chocolat noir Valrhona, noisettes, pistache — quand l\'amlou rencontre la gourmandise sans culpabilité.',
    emoji: '🍫',
    productCount: products.filter(p => p.category === 'gourmand').length,
  },
  {
    id: 'premium',
    name: 'Premium & Bio',
    description: 'Pistache, cajou, amandes bio IGP — le sommet de la qualité amlou marocaine.',
    emoji: '💎',
    productCount: products.filter(p => p.category === 'premium').length,
  },
  {
    id: 'sante',
    name: 'Santé & Light',
    description: 'Sans sucre ajouté, index glycémique bas — le plaisir de l\'amlou pour tous.',
    emoji: '🌿',
    productCount: products.filter(p => p.category === 'sante').length,
  },
  {
    id: 'packs',
    name: 'Packs & Coffrets',
    description: 'Duos, formats familiaux et coffrets cadeaux — économise et fais plaisir.',
    emoji: '🎁',
    productCount: products.filter(p => p.category === 'packs').length,
  },
];

export const testimonials = [
  {
    id: '1',
    name: 'Fatima Z.',
    city: 'Casablanca',
    rating: 5,
    text: "J'ai arrêté Nutella depuis que j'ai goûté L'Origine. Mes enfants ne veulent plus rien d'autre. Enfin un produit naturel qui a du goût !",
    product: "L'Origine",
    verified: true,
  },
  {
    id: '2',
    name: 'Karim E.',
    city: 'Rabat',
    rating: 5,
    text: "Je suis diabétique et Le Réveil m'a changé la vie. Je peux enfin me faire plaisir au petit-déjeuner sans culpabiliser. Merci AMAYNO.",
    product: 'Le Réveil',
    verified: true,
  },
  {
    id: '3',
    name: 'Salma A.',
    city: 'Marrakech',
    rating: 5,
    text: "L'Indulgence au chocolat noir, c'est mon péché mignon du dimanche. Livraison en 3 jours, paiement à la livraison — parfait.",
    product: "L'Indulgence",
    verified: true,
  },
  {
    id: '4',
    name: 'Youssef M.',
    city: 'Agadir',
    rating: 5,
    text: "Je suis d'Agadir et je connais l'amlou. AMAYNO c'est du vrai amlou du Souss, pas la contrefaçon qu'on trouve partout. Qualité exceptionnelle.",
    product: "L'Or du Souss",
    verified: true,
  },
  {
    id: '5',
    name: 'Nadia B.',
    city: 'Tanger',
    rating: 5,
    text: "J'ai offert Le Trésor pistache à ma belle-mère pour l'Aïd. Elle a adoré. Emballage magnifique, produit premium. Je recommande.",
    product: 'Le Trésor',
    verified: true,
  },
  {
    id: '6',
    name: 'Hassan R.',
    city: 'Fes',
    rating: 5,
    text: "L'Énergie cajou-dattes avant ma séance de sport, c'est mon secret. Énergie naturelle, pas de crash. Le Duo Gourmand est un excellent rapport qualité-prix.",
    product: "L'Énergie",
    verified: true,
  },
];

export const faqs = [
  {
    category: 'Livraison',
    questions: [
      {
        q: 'Combien de temps prend la livraison ?',
        a: '3 à 5 jours ouvrés pour Casablanca, Rabat, Marrakech, Tanger, Fes et Agadir. 5 à 7 jours pour les autres villes. Tu reçois un SMS de confirmation dès l\'expédition.',
      },
      {
        q: 'La livraison est-elle gratuite ?',
        a: 'Oui, 100% gratuite sur toutes les commandes partout au Maroc. Pas de montant minimum, pas de frais cachés.',
      },
      {
        q: 'Comment suivre ma commande ?',
        a: 'Tu reçois un SMS avec le numéro de suivi. Contacte-nous aussi par WhatsApp à tout moment avec ton numéro de commande.',
      },
    ],
  },
  {
    category: 'Produits & Qualité',
    questions: [
      {
        q: 'Votre amlou est-il 100% naturel ?',
        a: 'Absolument. Zéro conservateur, zéro huile de palme, zéro sucre ajouté (sauf dans les variantes gourmandes où le miel est l\'unique sucrant). Trois ingrédients nobles : fruits secs torréfiés, huile d\'argan pressée à froid, miel pur.',
      },
      {
        q: 'D\'où viennent vos ingrédients ?',
        a: 'Directement du Souss-Massa : amandes et argan des coopératives féminines de l\'Anti-Atlas, miel des ruchers locaux. Traçabilité complète de la ferme au pot.',
      },
      {
        q: 'Comment conserver l\'amlou ?',
        a: 'À température ambiante (15-25°C), à l\'abri de la lumière. Referme bien le pot après usage. Se conserve 6 mois après ouverture. La séparation naturelle de l\'huile est normale — remue avant usage.',
      },
    ],
  },
  {
    category: 'Retours & Échanges',
    questions: [
      {
        q: 'Puis-je retourner un produit ?',
        a: 'Oui, 30 jours pour retourner un pot non ouvert. Contacte-nous par WhatsApp, on programme un ramassage gratuit à ton domicile.',
      },
      {
        q: 'Et si le produit est abîmé à la livraison ?',
        a: 'Refuse le colis ou contacte-nous dans les 24h. On t\'envoie un remplacement gratuit immédiatement.',
      },
    ],
  },
  {
    category: 'Paiement',
    questions: [
      {
        q: 'Comment payer ?',
        a: 'Uniquement paiement à la livraison (COD). Tu commandes, on livre, tu paies en cash au livreur. Zéro risque, zéro avance.',
      },
      {
        q: 'Y a-t-il des frais supplémentaires ?',
        a: 'Aucun. Le prix affiché est le prix final. Livraison gratuite incluse.',
      },
    ],
  },
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

export function getUpsellProduct(product: Product): Product | undefined {
  return product.upsellId ? products.find(p => p.id === product.upsellId) : undefined;
}

export function getDownsellProduct(product: Product): Product | undefined {
  return product.downsellId ? products.find(p => p.id === product.downsellId) : undefined;
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

export function getPriceForWeight(product: Product, grams: number): number {
  const w = product.weights.find(w => w.grams === grams);
  return w?.price ?? product.price;
}
