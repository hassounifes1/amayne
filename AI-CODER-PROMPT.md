# AMAYNE — Complete AI Coder Prompt (Copy-Paste Ready)

---

## Brand Identity

**Name:** AMAYNE (Amayno)
**Tagline:** "Ta9dari, ta7tarma, tab9a nta" (You deserve, you're respected, you stay yourself)
**Niche:** Plus-size women's fashion in Morocco — sizes 46 to 56
**Model:** DTC (Direct to Consumer), COD (Cash on Delivery) only
**Language:** French primary, Darija for emotional copy, Arabic for formal/legal
**Socials:** Instagram, TikTok, Facebook
**Contact:** WhatsApp only

---

## Target Customer (ICP)

- Moroccan woman, 25-50 years old
- Wears size 46-56 (180kg+ reference)
- Lives in Casablanca, Rabat, Marrakech, Tanger, Fes, Agadir, Meknès, Oujda, Kenitra, Tetouan
- Shops on phone (mobile-first)
- Searches: "mode grande taille maroc", "vêtements femme 46 56"
- Pain points: limited local options, sizes that don't fit, judgmental in-store experiences, no COD available on most platforms

---

## Visual Identity

### Colors (Tailwind Config)
```
brand-rose:     #C4616A (primary CTA, hover states)
brand-plum:     #4A2040 (headers, dark backgrounds)
brand-cream:    #FAF7F2 (main background)
brand-blush:    #F5EDE8 (card backgrounds, alt sections)
brand-ink:      #2D2A26 (body text)
brand-muted:    #6B6560 (secondary text)
brand-gold:     #C9A96E (accents, premium feel)
brand-sage:     #7B9E7B (sustainability badge)
brand-coral:    #E8634A (sale badge)
brand-border:   #E8E5DF (borders)
brand-rose-dark: #A84E56 (hover for rose)
brand-rose-light: #D4858D (light rose)
brand-plum-light: #6B3060 (lighter plum)
```

### Typography
- Headings: Playfair Display (serif, elegant)
- Body: DM Sans (clean, modern)

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Icons:** lucide-react
- **Animations:** framer-motion
- **Cart:** React Context (client-side, no database)
- **Deployment:** Docker on EasyPanel

---

## Product Catalog (15 Products)

### Collections:
1. **Les Essentiels** — everyday basics (slug: les-essentiels)
2. **Soirée & Événements** — formal/evening wear (slug: soiree-evenements)
3. **Sport & Confort** — activewear/loungewear (slug: sport-confort)
4. **Robes** — dresses only (slug: robes)
5. **Nouveautés** — new arrivals (slug: nouveautes)

### Products:

| # | Marketing Name | Product Name | Price (MAD) | Original | Category | Collection | Sizes | Colors | Rating | Reviews | Bestseller |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | L'Élégance | Robe Longue Velours | 449 | 599 | robe | robes | 46,48,50,52,54,56 | Noir, Bordeaux, Émeraude | 4.9 | 127 | yes |
| 2 | La Sérenité | Ensemble Pyjama Satin | 299 | 399 | ensemble | sport-confort | 46,48,50,52,54,56 | Rose Poudré, Noir, Bleu Nuit | 4.8 | 98 | yes |
| 3 | La Confiance | Blazer Taille Haute | 549 | 699 | veste | soiree-evenements | 46,48,50,52,54 | Noir, Camel, Bordeaux | 4.9 | 85 | yes |
| 4 | La Libération | Jupe Plissée Midi | 249 | 349 | jupe | les-essentiels | 46,48,50,52,54,56 | Noir, Beige, Bordeaux | 4.7 | 72 | no |
| 5 | La Douceur | Cardigan Cachemire | 399 | 549 | veste | les-essentiels | 46,48,50,52,54 | Camel, Gris, Noir | 4.8 | 64 | yes |
| 6 | La Passion | Robe Cocktail Sequins | 699 | 899 | robe | soiree-evenements | 46,48,50,52 | Noir, Or, Argent | 5.0 | 42 | yes |
| 7 | L'Audace | Jean Grand Taille | 349 | 449 | pantalon | les-essentiels | 46,48,50,52,54,56 | Bleu Foncé, Noir | 4.7 | 156 | yes |
| 8 | La Grâce | Tunique Broderie | 329 | 449 | haut | les-essentiels | 46,48,50,52,54 | Blanc, Rose, Bleu | 4.6 | 53 | no |
| 9 | La Puissance | Combinaison Zippée | 499 | 649 | combinaison | soiree-evenements | 46,48,50,52 | Noir, Bordeaux | 4.8 | 38 | no |
| 10 | La Sérénité Sport | Legging Haute Performance | 199 | 279 | pantalon | sport-confort | 46,48,50,52,54,56 | Noir, Gris, Marine | 4.7 | 89 | no |
| 11 | L'Harmonie | Ensemble Deux Pièces | 429 | 579 | ensemble | les-essentiels | 46,48,50,52,54 | Camel, Noir | 4.9 | 71 | no |
| 12 | La Témérité | Veston Croisé | 599 | 799 | veste | soiree-evenements | 46,48,50,52 | Noir, Camel | 4.8 | 34 | no |
| 13 | L'Éclat | Robe d'Été Fleuri | 379 | 499 | robe | robes | 46,48,50,52,54,56 | Multi, Rose, Bleu | 4.6 | 67 | no |
| 14 | La Pureté | Blouse Soie | 279 | 379 | haut | les-essentiels | 46,48,50,52,54 | Blanc, Rose, Noir | 4.7 | 45 | no |
| 15 | L'Indépendance | Short Taille Haute | 179 | 249 | pantalon | sport-confort | 46,48,50,52,54,56 | Noir, Beige, Marine | 4.5 | 58 | no |

---

## Pages to Build

### 1. Homepage (`/`)
**Sections in order:**
1. **Announcement bar** — scrolling text: "Livraison gratuite dès 500 MAD" / "Payez à la livraison" / "-30% sur votre première commande"
2. **Hero** — large background image placeholder, headline "Tu mérites le meilleur", subheadline about plus-size fashion, CTA button "Découvrir la Collection", secondary CTA "Guide des Tailles"
3. **Social proof bar** — "4.9/5" rating, "12,847+ clientes satisfaites", "Livraison 3-5 jours", "Retours faciles"
4. **Problem/Solution** — "On sait ce que c'est..." (pain points) → "AMAYNE, c'est différent" (solutions)
5. **Collections grid** — 3 collection cards with name, description, product count, "Voir la collection" link
6. **Bestsellers** — 3 product cards in a row (marketing name, product name, price, original price, star rating, "Ajouter au panier" button)
7. **Testimonials** — 3 customer reviews with name, location (city), rating stars, quote, verified badge
8. **Brand story CTA** — "Notre histoire" section with text and "En savoir plus" link to /about
9. **Trust section** — 4 trust cards (Livraison offerte, Paiement à la livraison, Retours 30 jours, Service client WhatsApp)
10. **Newsletter** — "Rejoins la communauté AMAYNE" with email input and subscribe button

### 2. Product Detail Page (`/products/[slug]`)
**Sections:**
1. Breadcrumb (Accueil > Collection > Product)
2. Image gallery (main image + thumbnails, left side on desktop, top on mobile)
3. Right side: Marketing name (small, muted), Product name (large), star rating + review count, price + original price + discount badge, color selector (swatches), size selector (buttons 46-56), size guide link, quantity selector, "Ajouter au panier" button (rose color), "Commander par WhatsApp" button, trust icons below buttons (Livraison 3-5j, Paiement COD, Retours 30j)
4. Product description tabs (Description, Caractéristiques, Avis)
5. Cross-sell section: "Complete ton look" — 4 related products
6. Reviews summary section

### 3. Collection Page (`/collections/[slug]`)
**Sections:**
1. Breadcrumb
2. Collection header (name + description + product count)
3. Filter panel (toggle open/close): size filter (46, 48, 50, 52, 54, 56 — toggle buttons)
4. Sort dropdown: "Populaires" (default), "Nouveautés", "Prix croissant", "Prix décroissant", "Mieux notés"
5. Product grid (2 columns mobile, 3 desktop)
6. Each product card: image placeholder, marketing name (small), product name, price + original price, star rating, "Ajouter au panier" button

### 4. Checkout (`/checkout`)
**Left side (form):**
- "Informations de livraison" header
- Nom complet* (required)
- Téléphone* (+212, required)
- Email (optional)
- Ville* (dropdown: Casablanca, Rabat, Marrakech, Tanger, Fes, Agadir, Meknès, Oujda, Kenitra, Tetouan, Autre)
- Adresse complète* (textarea, required)
- Repère / Appartement (optional)
- "Méthode de paiement" — COD pre-selected with checkmark, "Vous payez à la livraison"

**Right side (summary):**
- List of cart items (image, name, qty, price)
- Sous-total
- Livraison: Gratuit (or calculated)
- **Total**
- "Passer la commande" button (rose)
- Trust badges below

**On submit:** Validate all required fields → redirect to `/order-confirmation` with order number

### 5. Order Confirmation (`/order-confirmation`)
**Sections:**
1. Animated green checkmark
2. "Commande confirmée !"
3. Order number (e.g., AMY-28072026-XXXX)
4. Estimated delivery: 3-5 jours ouvrables
5. "Prochaines étapes" timeline (Commande reçue ✓, En préparation, En livraison, Livrée)
6. Order summary (items, total)
7. Cross-sell: "Pendant que tu attends..." — 3 products with "Ajouter au panier"
8. Social share buttons (Instagram, TikTok, Facebook)
9. WhatsApp contact link
10. "Retour à l'accueil" button

### 6. Shipping & Returns (`/shipping-returns`)
- Livraison section: free shipping 500+ MAD, 3-5 days, COD available, tracking via WhatsApp
- Returns section: 30-day policy, items must be unworn with tags, process steps, refund timeline (7-10 days), exchange option

### 7. Privacy Policy (`/privacy`)
- 10 sections: intro, data collected, usage, sharing, security, cookies, rights, retention, changes, contact

### 8. Terms & Conditions (`/terms`)
- 12 sections: products, pricing, orders, payment (COD), delivery, returns, exchanges, liability, data, disputes, governing law

### 9. FAQ (`/faq`)
- Category tabs (Livraison, Paiement, Tailles & Ajustement, Retours & Échanges, Commande)
- Accordion items from data
- WhatsApp CTA at bottom

### 10. About (`/about`)
- Brand story (founder mission, why AMAYNE exists)
- 3 values: Inclusion, Qualité, Confiance
- Timeline: 2024 (fondation), 2025 (10,000+ clientes), 2026 (ambition #1 grande taille Maroc)
- Stats: 12,847+ clientes, 4.9/5, 15,000+ commandes, 98% satisfaction
- Promise CTA

### 11. Size Guide (`/size-guide`)
- "Comment prendre tes mesures" steps (Buste, Taille, Hanches)
- Measurement table: sizes 46-56 with bust/waist/hips in cm
- Tips for choosing the right size
- WhatsApp CTA for questions

### 12. Contact (`/contact`)
- WhatsApp hero CTA (big green button)
- Email card
- Instagram card
- Business hours
- Address
- Common topics links

---

## Components to Build

1. **Navbar** — sticky, brand name "AMAYNE" in Playfair Display, nav links (Femmes, Nouveautés, Collections dropdown, Contact), cart icon with item count badge, mobile hamburger menu
2. **Footer** — trust bar (4 icons), 4-column footer (Boutique, Aide, Légal, Suivez-nous), newsletter mini-form, copyright
3. **CartDrawer** — slides in from right, list items with +/- quantity, remove, subtotal, free shipping progress bar (349 MAD / 500 MAD = 70%), "Passer la commande" button

---

## Cart System

- React Context, no database, client-side only
- `addItem(product, color, size, quantity)` — adds or increments
- `removeItem(productId, color, size)`
- `updateQuantity(productId, color, size, newQty)`
- `clearCart()`
- `items[]` — each: `{ id, name, slug, price, originalPrice, image, color, size, quantity }`
- `total` — computed sum
- `itemCount` — computed count
- `isOpen` / `setIsOpen` — cart drawer visibility

---

## Code Style Rules

1. Use `'use client'` only where needed (state, context, event handlers)
2. All colors via Tailwind classes using `brand-*` prefix
3. Font classes: `font-display` for headings, `font-body` for text
4. Mobile-first responsive design
5. Product images are emoji placeholders (📦 or relevant emoji) in colored gradient backgrounds — no external images yet
6. Every page has proper metadata (title, description) for SEO
7. Use lucide-react for all icons
8. Framer-motion for page transitions and micro-animations
9. French language for all visible text
10. Darija only for emotional/warm copy (testimonials, some CTAs)

---

## File Structure

```
amayne/
├── Dockerfile
├── .dockerignore
├── .gitignore
├── next.config.js          (output: 'standalone', images: { unoptimized: true })
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx              (root layout, CartProvider, Navbar, Footer)
│   │   ├── page.tsx                (homepage)
│   │   ├── products/[slug]/page.tsx (product detail)
│   │   ├── collections/[slug]/page.tsx (collection listing)
│   │   ├── checkout/page.tsx       (COD checkout form)
│   │   ├── order-confirmation/page.tsx (success + cross-sell)
│   │   ├── about/page.tsx
│   │   ├── faq/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── size-guide/page.tsx
│   │   ├── shipping-returns/page.tsx
│   │   ├── privacy/page.tsx
│   │   └── terms/page.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── CartDrawer.tsx
│   └── lib/
│       ├── data.ts                 (all products, collections, testimonials, FAQs, helpers)
│       └── cart-context.tsx        (cart React context)
```

---

## Deployment

- **GitHub:** Push to `https://github.com/hassounifes1/amayne`
- **EasyPanel:** POST to `http://76.13.44.104:3000/api/deploy/1aa318f758120af5103cb26115d21794eb7571e6846379ed`
- Requires Dockerfile with Node 20 Alpine, multi-stage build (builder → runner), standalone output

---

## Important Notes

- **No external images** — all product images are emoji in gradient backgrounds until real photos are provided
- **No database** — cart is client-side only, orders are not stored (redirect to confirmation page)
- **No authentication** — purely public storefront
- **COD only** — no online payment integration
- **WhatsApp** — link to `https://wa.me/212600000000` (replace with real number)
- **No real products** — placeholder catalog for now, user will provide actual products later
