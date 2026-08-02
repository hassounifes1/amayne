'use client';

import { Suspense } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import PageViewTracker from '@/components/PageViewTracker';

function PageViewTrackerWrapper() {
  return (
    <Suspense fallback={null}>
      <PageViewTracker />
    </Suspense>
  );
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <PageViewTrackerWrapper />
      <Navbar />
      <CartDrawer />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </>
  );
}
