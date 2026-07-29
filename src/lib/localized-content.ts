import type { Lang } from './translations';
import type { Product } from './data';

export interface LocalizedProduct {
  name: string;
  marketingName: string;
  type: string;
  collection: string;
  description: string;
  benefits: string[];
  ingredients: string;
  painPoint: string;
}

type LocaleBlock = Record<Lang, LocalizedProduct>;

const productLocales: Record<string, LocaleBlock> = {
  '1': {
    fr: {
      name: 'Amlou Beldi Amandes & Miel',
      marketingName: "L'Origine",
      type: 'Amlou Classique',
      collection: 'Classiques',
      description: "L'Origine, c'est l'amlou comme ta grand-mère du Souss le préparait. Amandes torréfiées, argan et miel pur — trois ingrédients, zéro compromis.",
      benefits: ['Énergie naturelle durable', 'Riche en vitamine E', '100% naturel', 'Fabriqué au Souss'],
      ingredients: 'Amandes du Souss (65%), huile d\'argan bio (25%), miel naturel (10%)',
      painPoint: 'Tu manges du Nutella plein de sucre — ton corps mérite mieux',
    },
    ar: {
      name: 'أملو بلدي باللوز والعسل',
      marketingName: 'الأصل',
      type: 'أملو كلاسيك',
      collection: 'كلاسيك',
      description: 'الأصل هو الأملو كima كتديرو جداتكم فالسوس. لوز محمص، أركان معصور على البارد، وعسل طبيعي — ثلاث مكونات بلا أي إضافات.',
      benefits: ['طاقة طبيعية طويلة المدى', 'غني بفيتامين E', '100% طبيعي بلا مواد حافظة', 'مصنوع بتعاونيات نسائية بالسوس'],
      ingredients: 'لوز السوس (65%)، زيت أركان غذائي (25%)، عسل طبيعي (10%)',
      painPoint: 'كتأكل Nutella مليانة السكر — جسمك يستحق أحسن',
    },
    en: {
      name: 'Beldi Almond & Honey Amlou',
      marketingName: 'The Origin',
      type: 'Classic Amlou',
      collection: 'Classics',
      description: 'The Origin is amlou as your Souss grandmother made it. Roasted almonds, cold-pressed argan, pure honey — three ingredients, zero compromise.',
      benefits: ['Long-lasting natural energy', 'Rich in vitamin E', '100% natural', 'Made in the Souss'],
      ingredients: 'Souss almonds (65%), argan oil (25%), natural honey (10%)',
      painPoint: 'You eat sugary Nutella — your body deserves better',
    },
  },
  '2': {
    fr: { name: 'Amlou Cacahuètes Traditionnel', marketingName: 'La Force', type: 'Amlou Cacahuètes', collection: 'Classiques', description: 'La Force — énergie berbère à prix accessible.', benefits: ['Prix accessible', 'Riche en protéines', 'Goût authentique', 'Format familial'], ingredients: 'Cacahuètes (70%), argan (20%), miel (10%)', painPoint: 'Tu veux de l\'énergie sans te ruiner' },
    ar: { name: 'أملو الفول السوداني التقليدي', marketingName: 'القوة', type: 'أملو فول سوداني', collection: 'كلاسيك', description: 'القوة — طاقة أمازيغية بثمن مناسب لكل العائلة.', benefits: ['ثمن في المتناول', 'غني بالبروteins', 'طعم أصيل', 'مناسب للعائلة'], ingredients: 'فول سوداني (70%)، أركان (20%)، عسل (10%)', painPoint: 'بغiti طاقة طبيعية بثمن معقول' },
    en: { name: 'Traditional Peanut Amlou', marketingName: 'The Force', type: 'Peanut Amlou', collection: 'Classics', description: 'The Force — Berber energy at an accessible price.', benefits: ['Affordable price', 'Plant protein', 'Authentic taste', 'Family size'], ingredients: 'Peanuts (70%), argan (20%), honey (10%)', painPoint: 'You want natural energy without breaking the bank' },
  },
  '3': {
    fr: { name: 'Amlou Light Sans Sucre', marketingName: 'Le Réveil', type: 'Amlou Light', collection: 'Santé & Light', description: 'Le Réveil — plaisir sans culpabilité, sans sucre ajouté.', benefits: ['Index glycémique bas', 'Zéro sucre ajouté', 'Texture onctueuse', 'Riche en bonnes graisses'], ingredients: 'Amandes (80%), huile d\'argan (20%)', painPoint: 'Tu surveilles ta glycémie' },
    ar: { name: 'أملو لايت بدون سكر', marketingName: 'اليقظة', type: 'أملو خفيف', collection: 'صحي ولايت', description: 'اليقظة — متعة بلا ذنب، بلا سكر مضاف.', benefits: ['مؤشر سكري منخفض', 'بلا سكر مضاف', 'قوام كريمي', 'دهون صحية'], ingredients: 'لوز (80%)، زيت أركان (20%)', painPoint: 'كتراقب السكر فدمك' },
    en: { name: 'Light Amlou No Added Sugar', marketingName: 'The Awakening', type: 'Light Amlou', collection: 'Health & Light', description: 'The Awakening — guilt-free pleasure, no added sugar.', benefits: ['Low glycemic index', 'No added sugar', 'Creamy texture', 'Healthy fats'], ingredients: 'Almonds (80%), argan oil (20%)', painPoint: 'You watch your blood sugar' },
  },
  '4': {
    fr: { name: 'Amlou Chocolat Noir 70%', marketingName: "L'Indulgence", type: 'Amlou Chocolat', collection: 'Gourmand', description: "L'Indulgence — amlou et cacao Valrhona 70%.", benefits: ['Cacao Valrhona', 'Antioxydants', 'Sans sucre ajouté', 'Parfait au petit-déjeuner'], ingredients: 'Amandes, cacao 70%, argan, miel', painPoint: 'Tu veux du chocolat sans culpabilité' },
    ar: { name: 'أملو بالشوكola noir 70%', marketingName: 'الدلال', type: 'أملو شوكola', collection: 'حلو', description: 'الدلال — أملو مع كاكاو فاخر 70%.', benefits: ['كاكاو فاخر', 'مضادات أكسدة', 'بلا سكر مضاف', 'مثالي للفطور'], ingredients: 'لوز، كاكاو 70%، أركان، عسل', painPoint: 'بغiti شوكola بلا ذنب' },
    en: { name: 'Dark Chocolate 70% Amlou', marketingName: 'The Indulgence', type: 'Chocolate Amlou', collection: 'Gourmet', description: 'The Indulgence — amlou meets 70% Valrhona cocoa.', benefits: ['Valrhona cocoa', 'Antioxidants', 'No added sugar', 'Perfect for breakfast'], ingredients: 'Almonds, 70% cocoa, argan, honey', painPoint: 'You want chocolate without guilt' },
  },
  '5': {
    fr: { name: 'Amlou Chocolat Noir Light', marketingName: 'La Douceur', type: 'Amlou Chocolat Light', collection: 'Gourmand', description: 'La Douceur — indulgence allégée pour toute la famille.', benefits: ['Version allégée', 'Pour petits et grands', 'Goûter sain', '100% naturel'], ingredients: 'Amandes light, cacao, argan, miel', painPoint: 'Tes enfants veulent du goût, toi la qualité' },
    ar: { name: 'أملو شوكola لايت', marketingName: 'النعومة', type: 'أملو شوكola خفيف', collection: 'حلو', description: 'النعومة — indulgence خفيفة للعائلة كاملة.', benefits: ['نسخة خفيفة', 'للكبار والصغار', 'وجبة خفيفة صحية', '100% طبيعي'], ingredients: 'لوز لايت، كاكاو، أركان، عسل', painPoint: 'الولاد بغaw طعم ونتa جودة' },
    en: { name: 'Light Dark Chocolate Amlou', marketingName: 'The Softness', type: 'Light Chocolate Amlou', collection: 'Gourmet', description: 'The Softness — lighter indulgence for the whole family.', benefits: ['Light version', 'Kids and adults', 'Healthy snack', '100% natural'], ingredients: 'Light almonds, cocoa, argan, honey', painPoint: 'Kids want taste, you want quality' },
  },
  '6': {
    fr: { name: 'Amlou Pistache Premium', marketingName: 'Le Trésor', type: 'Amlou Pistache', collection: 'Premium', description: 'Le Trésor — luxe pistache du Souss.', benefits: ['Pistaches premium', 'Texture veloutée', 'Idéal en cadeau', 'Riche en fer'], ingredients: 'Pistaches, amandes, argan, miel', painPoint: 'Tu cherches un cadeau premium' },
    ar: { name: 'أملو الفستق البريميوم', marketingName: 'الكنز', type: 'أملو فستق', collection: 'بريميوم', description: 'الكنز — فستق فاخر من السوس.', benefits: ['فستق ممتاز', 'قوام مخملي', 'هدية مثالية', 'غني بالحديد'], ingredients: 'فستق، لوز، أركان، عسل', painPoint: 'بghiti هدية فاخرة ومميزة' },
    en: { name: 'Premium Pistachio Amlou', marketingName: 'The Treasure', type: 'Pistachio Amlou', collection: 'Premium', description: 'The Treasure — premium Souss pistachio.', benefits: ['Premium pistachios', 'Velvety texture', 'Perfect gift', 'Rich in iron'], ingredients: 'Pistachios, almonds, argan, honey', painPoint: 'You want a premium gift' },
  },
  '7': {
    fr: { name: 'Amlou Cajou & Dattes', marketingName: "L'Énergie", type: 'Amlou Cajou', collection: 'Premium', description: "L'Énergie — super-petit-déjeuner naturel.", benefits: ['Dattes Medjool', 'Magnésium et zinc', 'Avant le sport', 'Sucrant naturel'], ingredients: 'Cajou, dattes, argan, miel', painPoint: 'Tu manques d\'énergie au sport ou au travail' },
    ar: { name: 'أملو الكاجو والتمر', marketingName: 'الطاقة', type: 'أmlو كاجو', collection: 'بريميوم', description: 'الطاقة — فطور قوي من الطبيعة.', benefits: ['تمر مجhoul', 'مagnésium وزنك', 'قبل الرياضة', 'تحلية طبيعية'], ingredients: 'كاجو، تمر، أركان، عسل', painPoint: 'كتحس بالتعب فالخدمة أو الرياضة' },
    en: { name: 'Cashew & Date Amlou', marketingName: 'The Energy', type: 'Cashew Amlou', collection: 'Premium', description: 'The Energy — natural super-breakfast.', benefits: ['Medjool dates', 'Magnesium & zinc', 'Pre-workout', 'Natural sweetness'], ingredients: 'Cashew, dates, argan, honey', painPoint: 'You lack energy at work or sport' },
  },
  '8': {
    fr: { name: 'Amlou Noisettes & Chocolat', marketingName: 'La Gourmandise', type: 'Amlou Noisettes', collection: 'Gourmand', description: 'La Gourmandise — noisettes du Rif et cacao.', benefits: ['Noisettes torréfiées', 'Cacao Valrhona', 'Pour pâtisseries', 'Texture authentique'], ingredients: 'Noisettes, argan, cacao, miel', painPoint: 'Tu veux impressionner tes invités' },
    ar: { name: 'أملو البندق والشوكola', marketingName: 'اللذة', type: 'أملو بندق', collection: 'حلو', description: 'اللذة — بندق الريف مع الكاكao.', benefits: ['بندق محمص', 'كاكاو فاخر', 'للحلويات', 'طعم أصيل'], ingredients: 'بندق، أركان، كاكاو، عسل', painPoint: 'بghiti تبهر ضياfك فالفطور' },
    en: { name: 'Hazelnut & Chocolate Amlou', marketingName: 'The Delight', type: 'Hazelnut Amlou', collection: 'Gourmet', description: 'The Delight — Rif hazelnuts and cocoa.', benefits: ['Roasted hazelnuts', 'Valrhona cocoa', 'For baking', 'Authentic texture'], ingredients: 'Hazelnuts, argan, cocoa, honey', painPoint: 'You want to impress your guests' },
  },
  '9': {
    fr: { name: 'Amlou Cacahuètes & Fleur de Sel', marketingName: 'Le Classique', type: 'Amlou Salé-Sucré', collection: 'Classiques', description: 'Le Classique — salé-sucré audacieux.', benefits: ['Fleur de sel Atlas', 'Contraste unique', 'Prix accessible', 'Sur crêpes'], ingredients: 'Cacahuètes, argan, miel, fleur de sel', painPoint: 'Tu en as marre des pâtes monotones' },
    ar: { name: 'أملو الفول السوداني وملح البحر', marketingName: 'الكلاسيك', type: 'مالح-حلو', collection: 'كلاسيك', description: 'الكلاسيك — مزيج مالح-حلو مميز.', benefits: ['ملح الأطلس', 'نكهة فريدة', 'ثمن مناسب', 'مع crêpes'], ingredients: 'فول سوداني، أركان، عسل، ملح', painPoint: 'تعبt من spread monoton' },
    en: { name: 'Peanut & Sea Salt Amlou', marketingName: 'The Classic', type: 'Sweet-Salty Amlou', collection: 'Classics', description: 'The Classic — bold sweet-salty blend.', benefits: ['Atlas sea salt', 'Unique contrast', 'Affordable', 'On crêpes'], ingredients: 'Peanuts, argan, honey, sea salt', painPoint: 'You are tired of boring spreads' },
  },
  '10': {
    fr: { name: 'Amlou Amandes Bio Premium', marketingName: "L'Or du Souss", type: 'Amlou Bio', collection: 'Premium', description: "L'Or du Souss — amlou certifié bio.", benefits: ['Certification bio', '80% amandes bio', 'Argan IGP', 'Petites quantités'], ingredients: 'Amandes bio, argan IGP, miel bio', painPoint: 'Tu ne fais plus confiance au souk' },
    ar: { name: 'أملو لوز بيولوجي بريميوم', marketingName: 'ذهب السوس', type: 'أملو bio', collection: 'بريميوم', description: 'ذهب السوس — أملو معتمد بيولوجياً.', benefits: ['شهادة bio', '80% لوz bio', 'أركان IGP', 'كميات محدودة'], ingredients: 'لوz bio، أركان IGP، عسل bio', painPoint: 'ما bqa عندك ثقة فأملو السوق' },
    en: { name: 'Premium Organic Almond Amlou', marketingName: 'Souss Gold', type: 'Organic Amlou', collection: 'Premium', description: 'Souss Gold — certified organic amlou.', benefits: ['Organic certified', '80% organic almonds', 'IGP argan', 'Small batches'], ingredients: 'Organic almonds, IGP argan, organic honey', painPoint: 'You no longer trust the souk' },
  },
  '11': {
    fr: { name: 'Pack Duo Gourmand', marketingName: 'Le Duo Gourmand', type: 'Pack', collection: 'Packs & Coffrets', description: 'Deux saveurs, un prix imbattable.', benefits: ['Économise 22%', '8 saveurs au choix', 'Emballage cadeau', 'Livraison gratuite'], ingredients: 'Selon les 2 saveurs choisies', painPoint: 'Tu veux goûter plusieurs saveurs' },
    ar: { name: 'باقة الثنائي الشهي', marketingName: 'الثنائي', type: 'باقة', collection: 'باقات وهدايا', description: 'نكهتين بثمن واحد مميز.', benefits: ['وفّر 22%', '8 نكهات للاختيار', 'تغليف هدية', 'توصيل مجاني'], ingredients: 'حسب النكهتين المختارتين', painPoint: 'بghiti تجرب بzaf ديال النكهات' },
    en: { name: 'Gourmet Duo Pack', marketingName: 'The Duo', type: 'Pack', collection: 'Packs & Gifts', description: 'Two flavors, one unbeatable price.', benefits: ['Save 22%', 'Pick from 8 flavors', 'Gift wrap', 'Free shipping'], ingredients: 'Depends on chosen flavors', painPoint: 'You want to try several flavors' },
  },
  '12': {
    fr: { name: 'Pot Familial 700g', marketingName: 'Le Trésor Familial', type: 'Format Familial', collection: 'Packs & Coffrets', description: '700g pour toute la semaine.', benefits: ['Meilleur prix/gramme', 'Pot verre réutilisable', 'Pour la famille', 'Même recette que L\'Origine'], ingredients: 'Amandes, argan, miel', painPoint: 'Tu rachètes chaque semaine' },
    ar: { name: 'إناء عائلي 700غ', marketingName: 'الكنز العائلي', type: 'حجم عائلي', collection: 'باقات وهدايا', description: '700غ لأسبوع كامل.', benefits: ['أفضل ثمن للغرام', 'إناء زجاجي', 'للعائلة', 'نفس جودة الأصل'], ingredients: 'لوz، أركان، عسل', painPoint: 'كتشري كل أسبوع' },
    en: { name: 'Family Jar 700g', marketingName: 'The Family Treasure', type: 'Family Size', collection: 'Packs & Gifts', description: '700g for the whole week.', benefits: ['Best price per gram', 'Reusable glass jar', 'For families', 'Same recipe as The Origin'], ingredients: 'Almonds, argan, honey', painPoint: 'You reorder every week' },
  },
};

const collectionLocales: Record<string, Record<Lang, { name: string; description: string }>> = {
  classiques: {
    fr: { name: 'Classiques', description: 'Les recettes ancestrales du Souss.' },
    ar: { name: 'كلاسيك', description: 'وصفات السوس الأصيلة — لوz، أركان وعسل.' },
    en: { name: 'Classics', description: 'Ancestral Souss recipes — almonds, argan and honey.' },
  },
  gourmand: {
    fr: { name: 'Gourmand', description: 'Chocolat noir Valrhona et noisettes.' },
    ar: { name: 'حلو', description: 'شوكola noir فاخر وبندق — متعة بلا ذنب.' },
    en: { name: 'Gourmet', description: 'Valrhona dark chocolate and hazelnuts.' },
  },
  premium: {
    fr: { name: 'Premium & Bio', description: 'Pistache, cajou, amandes bio IGP.' },
    ar: { name: 'بريميوم وbio', description: 'فستق، كاجو، ولوz بيولوجي IGP.' },
    en: { name: 'Premium & Organic', description: 'Pistachio, cashew, IGP organic almonds.' },
  },
  sante: {
    fr: { name: 'Santé & Light', description: 'Sans sucre ajouté, index glycémique bas.' },
    ar: { name: 'صحي ولايت', description: 'بلا سكر مضاف — مناسب للجميع.' },
    en: { name: 'Health & Light', description: 'No added sugar, low glycemic index.' },
  },
  packs: {
    fr: { name: 'Packs & Coffrets', description: 'Duos, formats familiaux et cadeaux.' },
    ar: { name: 'باقات وهدايا', description: 'ثنائيات، أحجام عائلية وهدايا.' },
    en: { name: 'Packs & Gifts', description: 'Duos, family sizes and gift sets.' },
  },
};

export function localizeProduct(product: Product, lang: Lang): LocalizedProduct {
  const block = productLocales[product.id]?.[lang];
  if (block) return block;
  return {
    name: product.name,
    marketingName: product.marketingName,
    type: product.type,
    collection: product.collection,
    description: product.description,
    benefits: product.benefits,
    ingredients: product.ingredients,
    painPoint: product.painPoint,
  };
}

export function localizeCollection(id: string, lang: Lang) {
  const block = collectionLocales[id]?.[lang];
  if (block) return block;
  return collectionLocales.classiques[lang];
}

export function getLocalizedFaqs(lang: Lang) {
  const faqs = {
    fr: [
      { category: 'Livraison', questions: [
        { q: 'Combien de temps prend la livraison ?', a: '3 à 5 jours pour les grandes villes. 5 à 7 jours ailleurs. SMS à l\'expédition.' },
        { q: 'Livraison gratuite ?', a: 'Oui, 100% gratuite partout au Maroc.' },
        { q: 'Suivre ma commande ?', a: 'SMS avec numéro de suivi + WhatsApp.' },
      ]},
      { category: 'Produits', questions: [
        { q: '100% naturel ?', a: 'Oui. Zéro conservateur, zéro huile de palme.' },
        { q: 'Origine des ingrédients ?', a: 'Directement du Souss-Massa, coopératives féminines.' },
        { q: 'Conservation ?', a: 'Température ambiante, 6 mois après ouverture. Remue avant usage.' },
      ]},
      { category: 'Paiement', questions: [
        { q: 'Comment payer ?', a: 'Paiement à la livraison uniquement (COD).' },
        { q: 'Frais cachés ?', a: 'Aucun. Le prix affiché est le prix final.' },
      ]},
    ],
    ar: [
      { category: 'التوصيل', questions: [
        { q: 'شحال كياخد التوصيل؟', a: '3 إلى 5 أيام للمدن الكبرى. 5 إلى 7 أيام للمدن الأخرى. SMS فالإرسال.' },
        { q: 'التوصيل مجاني؟', a: 'نعم، 100% مجاني فكل المغرب.' },
        { q: 'كيف نتba الطلب؟', a: 'SMS برقم التتبع + WhatsApp.' },
      ]},
      { category: 'المنتجات', questions: [
        { q: '100% طبيعي؟', a: 'نعم. بلا مواد حافظة، بلا زيت النخيل.' },
        { q: 'من فين المكونات؟', a: 'مباشرة من السوس-ماسة، تعاونيات نسائية.' },
        { q: 'كيف نحفظ الأملو؟', a: 'درجة حرارة الغرفة، 6 أشهر بعد الفتح. حرّك قبل الاستعمال.' },
      ]},
      { category: 'الدفع', questions: [
        { q: 'كيف نخلص؟', a: 'الدفع عند الاستلام فقط.' },
        { q: 'واش kaynin frais مخفية؟', a: 'لا. الثمن المعروض هو الثمن النهائي.' },
      ]},
    ],
    en: [
      { category: 'Shipping', questions: [
        { q: 'How long does delivery take?', a: '3-5 days for major cities. 5-7 days elsewhere. SMS on dispatch.' },
        { q: 'Free shipping?', a: 'Yes, 100% free across Morocco.' },
        { q: 'Track my order?', a: 'SMS with tracking number + WhatsApp.' },
      ]},
      { category: 'Products', questions: [
        { q: '100% natural?', a: 'Yes. No preservatives, no palm oil.' },
        { q: 'Ingredient origin?', a: 'Directly from Souss-Massa women\'s cooperatives.' },
        { q: 'How to store?', a: 'Room temperature, 6 months after opening. Stir before use.' },
      ]},
      { category: 'Payment', questions: [
        { q: 'How to pay?', a: 'Cash on delivery only (COD).' },
        { q: 'Hidden fees?', a: 'None. Displayed price is final.' },
      ]},
    ],
  };
  return faqs[lang];
}

export function getLocalizedTestimonials(lang: Lang) {
  const items = {
    fr: [
      { id: '1', name: 'Fatima Z.', city: 'Casablanca', rating: 5, text: "J'ai arrêté Nutella depuis L'Origine. Mes enfants adorent.", product: "L'Origine" },
      { id: '2', name: 'Karim E.', city: 'Rabat', rating: 5, text: 'Le Réveil m\'a changé la vie — diabétique sans culpabilité.', product: 'Le Réveil' },
      { id: '3', name: 'Salma A.', city: 'Marrakech', rating: 5, text: "L'Indulgence chocolat, mon péché mignon du dimanche.", product: "L'Indulgence" },
      { id: '4', name: 'Youssef M.', city: 'Agadir', rating: 5, text: "Vrai amlou du Souss, pas la contrefaçon du souk.", product: "L'Or du Souss" },
      { id: '5', name: 'Nadia B.', city: 'Tanger', rating: 5, text: 'Le Trésor pistache — cadeau parfait pour l\'Aïd.', product: 'Le Trésor' },
      { id: '6', name: 'Hassan R.', city: 'Fes', rating: 5, text: "L'Énergie avant le sport — énergie naturelle.", product: "L'Énergie" },
    ],
    ar: [
      { id: '1', name: 'فاطima Z.', city: 'الدار البيضاء', rating: 5, text: 'حبست Nutella منذ جربت الأصل. الولاد كيعشقو.', product: 'الأصل' },
      { id: '2', name: 'Karim E.', city: 'الرباط', rating: 5, text: 'اليقظة بدلات حياتي — diabetic بلا ذنب.', product: 'اليقظة' },
      { id: '3', name: 'Salma A.', city: 'مراكش', rating: 5, text: 'الدلal بالشوكola — متعتي كل أحد.', product: 'الدلal' },
      { id: '4', name: 'Youssef M.', city: 'أكادير', rating: 5, text: 'أملو حقيقي من السوس، ماشي التقليد ديال السوق.', product: 'ذهب السوس' },
      { id: '5', name: 'Nadia B.', city: 'طنجة', rating: 5, text: 'الكنز بالفستق — هدية مثالية للعيد.', product: 'الكنز' },
      { id: '6', name: 'Hassan R.', city: 'فاس', rating: 5, text: 'الطاقة قبل الرياضة — طاقة طبيعية.', product: 'الطاقة' },
    ],
    en: [
      { id: '1', name: 'Fatima Z.', city: 'Casablanca', rating: 5, text: 'Stopped Nutella since The Origin. Kids love it.', product: 'The Origin' },
      { id: '2', name: 'Karim E.', city: 'Rabat', rating: 5, text: 'The Awakening changed my life — diabetic, no guilt.', product: 'The Awakening' },
      { id: '3', name: 'Salma A.', city: 'Marrakech', rating: 5, text: 'The Indulgence — my Sunday treat.', product: 'The Indulgence' },
      { id: '4', name: 'Youssef M.', city: 'Agadir', rating: 5, text: 'Real Souss amlou, not souk counterfeit.', product: 'Souss Gold' },
      { id: '5', name: 'Nadia B.', city: 'Tangier', rating: 5, text: 'The Treasure pistachio — perfect Eid gift.', product: 'The Treasure' },
      { id: '6', name: 'Hassan R.', city: 'Fes', rating: 5, text: 'The Energy before sport — natural power.', product: 'The Energy' },
    ],
  };
  return items[lang];
}

const CITY_AR: Record<string, string> = {
  Casablanca: 'الدار البيضاء',
  Rabat: 'الرباط',
  Marrakech: 'مراكش',
  Tanger: 'طنجة',
  Fes: 'فاس',
  Agadir: 'أكادير',
  Meknès: 'مكناس',
  Oujda: 'وجدة',
  Kenitra: 'القنيطرة',
  Tetouan: 'تطوان',
  Salé: 'سلا',
  Nador: 'الناظور',
  Autre: 'مدينة أخرى',
};

export function localizeCity(city: string, lang: Lang): string {
  if (lang === 'ar') return CITY_AR[city] ?? city;
  return city;
}

type PageBlock = { title: string; paragraphs: string[]; missionTitle?: string; missionItems?: string[]; cta?: string };

export function getAboutContent(lang: Lang): PageBlock {
  const content = {
    fr: {
      title: 'Notre Histoire',
      paragraphs: [
        "AMAYNO est né d'une colère simple : pourquoi les Marocains mangent du Nutella quand l'amlou — leur propre trésor — existe depuis des siècles ?",
        "Dans les montagnes de l'Anti-Atlas, les femmes berbères préparent l'amlou depuis des générations.",
        "Pourtant, dans les grandes villes, on trouve du Nutella dans chaque frigo et de l'amlou douteux dans les souks. Nous avons décidé de changer ça.",
        "AMAYNO travaille directement avec les coopératives féminines du Souss-Massa. Du Souss à ta table.",
      ],
      missionTitle: 'Notre Mission',
      missionItems: ["Démocratiser l'amlou authentique", 'Soutenir les coopératives féminines', 'Alternative 100% naturelle', 'Livraison partout au Maroc'],
      cta: 'Découvrir nos saveurs',
    },
    ar: {
      title: 'قصتنا',
      paragraphs: [
        'وُلد أماينو من سؤال بسيط: لماذا يأكل المغاربة منتجات صناعية بينما الأملو — كنزهم — موجود منذ قرons؟',
        'في جبال الأطلس الصغير، تحضّر النساء الأمازيغيات الأملو منذ أجيال.',
        'في المدن الكبرى، نجد منتجات صناعية في كل ثلاجة وأملو مشكوكاً فيه في الأسواق. قررنا تغيير ذلك.',
        'تعمل أماينو مباشرة مع تعاونيات نسائية في السوس-ماسة. من السوس إلى مائدتك.',
      ],
      missionTitle: 'مهمتنا',
      missionItems: ['إتاحة الأملo الأصيل في كل المغرب', 'دعم التعاونيات النسائية', 'بديل طبيعي 100%', 'التوصيل في كل المغرب'],
      cta: 'اكتشف النكهات',
    },
    en: {
      title: 'Our Story',
      paragraphs: [
        'AMAYNO was born from a simple question: why eat industrial spreads when amlou has existed for centuries?',
        'In the Anti-Atlas, Berber women have prepared amlou for generations.',
        'In big cities, industrial spreads and questionable souk amlou persist. We decided to change that.',
        'AMAYNO works directly with Souss-Massa cooperatives. From the Souss to your table.',
      ],
      missionTitle: 'Our Mission',
      missionItems: ['Make authentic amlou accessible', 'Support women\'s cooperatives', '100% natural alternative', 'Nationwide delivery'],
      cta: 'Discover our flavors',
    },
  } as const;
  const c = content[lang];
  return { title: c.title, paragraphs: [...c.paragraphs], missionTitle: c.missionTitle, missionItems: [...c.missionItems], cta: c.cta };
}

export function getContactContent(lang: Lang) {
  return {
    fr: { title: 'Contactez-nous', sub: 'Notre équipe est disponible 7j/7 par WhatsApp.', btn: 'WhatsApp — Discuter maintenant', email: 'Email : contact@amayno.ma' },
    ar: { title: 'اتصل بنا', sub: 'فريقنا متاح 7 أيام في الأسبوع عبر واتساب.', btn: 'واتساب — تحدث الآن', email: 'البريد: contact@amayno.ma' },
    en: { title: 'Contact Us', sub: 'Our team is available 7 days a week on WhatsApp.', btn: 'WhatsApp — Chat now', email: 'Email: contact@amayno.ma' },
  }[lang];
}

export function getShippingContent(lang: Lang) {
  return {
    fr: { title: 'Livraison & Retours', shippingTitle: '🚚 Livraison', shippingItems: ['Gratuite partout au Maroc.', '3-5 jours grandes villes, 5-7 jours ailleurs.', 'SMS + appel livreur 30 min avant.', 'Paiement à la livraison uniquement.'], returnsTitle: '🔄 Retours', returnsItems: ['30 jours pot non ouvert.', 'Produit abîmé : remplacement sous 24h.', 'WhatsApp → ramassage gratuit → remboursement 48h.'] },
    ar: { title: 'التوصيل والإرجاع', shippingTitle: '🚚 التوصيل', shippingItems: ['مجاني في كل المغرب.', '3-5 أيام للمدن الكبرى، 5-7 أيام لباقي المدن.', 'رسالة + اتصال الموصل قبل 30 دقيقة.', 'الدفع عند الاستلام فقط.'], returnsTitle: '🔄 الإرجاع', returnsItems: ['30 يوماً لإناء غير مفتوح.', 'منتج تالف: استبدال خلال 24 ساعة.', 'واتساب ← استلام مجاني ← استرداد خلال 48 ساعة.'] },
    en: { title: 'Shipping & Returns', shippingTitle: '🚚 Shipping', shippingItems: ['Free across Morocco.', '3-5 days major cities, 5-7 elsewhere.', 'SMS + courier call 30 min before.', 'Cash on delivery only.'], returnsTitle: '🔄 Returns', returnsItems: ['30 days unopened jar.', 'Damaged: replacement within 24h.', 'WhatsApp → free pickup → refund within 48h.'] },
  }[lang];
}

export function getPrivacyContent(lang: Lang) {
  return {
    fr: { title: 'Politique de Confidentialité', body: ['Données collectées : nom, téléphone, ville, adresse.', 'Usage exclusif pour préparer et livrer ta commande.', 'Pas de vente ni partage avec des tiers.', 'Suppression possible via WhatsApp.', 'Juillet 2026.'] },
    ar: { title: 'سياسة الخصوصية', body: ['البيانات: الاسم، الهاتف، المدينة، العنوان.', 'تُستخدم فقط لتجهيز وتوصيل طلبك.', 'لا نبيع ولا نشارك بياناتك.', 'يمكنك طلب الحذف عبر واتساب.', 'يوليو 2026.'] },
    en: { title: 'Privacy Policy', body: ['Data: name, phone, city, address.', 'Used only to prepare and deliver your order.', 'We do not sell or share your data.', 'Deletion available via WhatsApp.', 'July 2026.'] },
  }[lang];
}

export function getTermsContent(lang: Lang) {
  return {
    fr: { title: 'Conditions Générales', sections: [{ h: 'Commandes', p: 'Commande confirmée par SMS.' }, { h: 'Paiement', p: 'COD uniquement, prix final.' }, { h: 'Produits', p: 'Conserver à température ambiante. Remuer avant usage.' }, { h: 'Responsabilité', p: 'Remplacement gratuit sous 24h si non conforme.' }], updated: 'Juillet 2026.' },
    ar: { title: 'الشروط العامة', sections: [{ h: 'الطلبات', p: 'يُؤكّd الطلب برسالة.' }, { h: 'الدفع', p: 'عند الاستلام فقط.' }, { h: 'المنتجات', p: 'احفظ في درجة حرارة الغرفة. حرّك قبل الاستعمال.' }, { h: 'المسؤولية', p: 'استبدال مجاني خلال 24 ساعة.' }], updated: 'يوليو 2026.' },
    en: { title: 'Terms & Conditions', sections: [{ h: 'Orders', p: 'Confirmed by SMS.' }, { h: 'Payment', p: 'COD only, final price.' }, { h: 'Products', p: 'Store at room temperature. Stir before use.' }, { h: 'Liability', p: 'Free replacement within 24h if non-conforming.' }], updated: 'July 2026.' },
  }[lang];
}
