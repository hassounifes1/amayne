'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageProvider';
import LogoMark from '@/components/LogoMark';

type LogoVariant = 'light' | 'dark' | 'gold';

interface LogoProps {
  variant?: LogoVariant;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  /** Use the original PNG asset (hero / footer). */
  useImage?: boolean;
  className?: string;
}

/** Brand logo lockup — fixed 12×10 ratio. */
export default function Logo({
  variant = 'dark',
  size = 'md',
  showTagline = true,
  useImage = false,
  className = '',
}: LogoProps) {
  const { t, lang } = useLanguage();

  const widths = {
    sm: 'w-[5.5rem] min-w-[5.5rem]',
    md: 'w-[7rem] sm:w-[8.5rem] md:w-[9.5rem] min-w-[7rem] sm:min-w-[8.5rem]',
    lg: 'w-[10.5rem] sm:w-[12.5rem] md:w-[14rem] min-w-[10.5rem] sm:min-w-[12.5rem]',
  };

  const tagline = showTagline ? t('logo_tagline') : '';
  const taglineSmall = lang === 'ar' || tagline.length > 18;

  return (
    <div
      className={`relative aspect-[12/10] flex-shrink-0 ${widths[size]} ${className}`}
    >
      {useImage ? (
        <Image
          src="/logo-amayno.png"
          alt={`AMAYNO — ${tagline || 'Natural Honey & Amlou'}`}
          fill
          className="object-contain object-center"
          sizes="(max-width: 640px) 120px, 180px"
          priority={size !== 'sm'}
        />
      ) : (
        <LogoMark
          tagline={tagline}
          taglineSmall={taglineSmall}
          variant={variant}
          className="h-full w-full"
        />
      )}
    </div>
  );
}
