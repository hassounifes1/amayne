import type { Metadata, Viewport } from 'next';
import './globals.css';
import Providers from '@/components/Providers';
import AppShell from '@/components/AppShell';
import Analytics from '@/components/Analytics';

export const metadata: Metadata = {
  title: 'AMAYNO — Amlou Authentique du Souss | Livraison Gratuite Maroc',
  description: 'AMAYNO, l\'amlou 100% naturel du Maroc. Amandes, argan et miel — livré chez toi partout au Maroc. Paiement à la livraison.',
  keywords: 'amlou maroc, amlou amandes, pâte à tartiner naturelle, amlou livraison maroc, amlou bio, AMAYNO',
  openGraph: {
    title: 'AMAYNO — L\'Amlou Authentique du Souss',
    description: '100% naturel. Fabriqué au Maroc. Livraison gratuite. Paiement à la livraison.',
    type: 'website',
    locale: 'fr_MA',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased overflow-x-hidden">
        <Analytics />
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
