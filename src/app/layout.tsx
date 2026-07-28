import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/lib/cart-context';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

export const metadata: Metadata = {
  title: 'AMAYNO — Amlou Authentique du Souss | Livraison Gratuite Maroc',
  description: 'AMAYNO, l\'amlou 100% naturel du Maroc. Amandes, argan et miel — livré chez toi partout au Maroc. Paiement à la livraison. Sans conservateurs, sans huile de palme.',
  keywords: 'amlou maroc, amlou amandes, pâte à tartiner naturelle, amlou livraison maroc, amlou bio, AMAYNO, amlou argan miel',
  openGraph: {
    title: 'AMAYNO — L\'Amlou Authentique du Souss',
    description: '100% naturel. Fabriqué au Maroc. Livraison gratuite. Paiement à la livraison.',
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
