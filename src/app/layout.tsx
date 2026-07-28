import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/lib/cart-context';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

export const metadata: Metadata = {
  title: 'AMAYNE — La Mode Qui Te Mérite | Grande Taille Femme Maroc',
  description: 'AMAYNE, la première marque marocaine dédiée aux femmes grande taille (46-56). Robes, ensembles, hauts et pantalons élégants. Livraison gratuite, paiement à la livraison.',
  keywords: 'grande taille femme maroc, vêtements femme 46 48 50 52 54 56, mode plus size maroc, robe grande taille maroc, AMAYNE',
  openGraph: {
    title: 'AMAYNE — La Mode Qui Te Mérite',
    description: 'La première marque marocaine dédiée aux femmes grande taille. Livraison gratuite partout au Maroc.',
    type: 'website',
    locale: 'fr_MA',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
