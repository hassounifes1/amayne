'use client';

import { CartProvider } from '@/lib/cart-context';
import { LanguageProvider } from '@/context/LanguageProvider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <CartProvider>{children}</CartProvider>
    </LanguageProvider>
  );
}
