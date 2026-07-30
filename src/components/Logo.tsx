'use client';

import { useLanguage } from '@/context/LanguageProvider';
import LogoMark from '@/components/LogoMark';

type LogoVariant = 'light' | 'dark' | 'gold';

interface LogoProps {
  variant?: LogoVariant;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

/** Brand logo lockup — fixed 12×10 ratio. */
export default function Logo({ variant = 'dark', size = 'md', showTagline = true, className = '' }: LogoProps) {
  const { t, lang } = useLanguage();

  const widths = {
    sm: 'w-[3.75rem] sm:w-[4.8rem]',
    md: 'w-[4.8rem] sm:w-[5.75rem] md:w-[6.5rem]',
    lg: 'w-[7.5rem] sm:w-[9rem] md:w-[10.5rem]',
  };

  const tagline = showTagline ? t('logo_tagline') : '';
  const taglineSmall = lang === 'ar' || tagline.length > 18;

  return (
    <div
      className={`relative aspect-[12/10] flex-shrink-0 ${widths[size]} ${className}`}
      aria-hidden={false}
    >
      <LogoMark
        tagline={tagline}
        taglineSmall={taglineSmall}
        variant={variant}
        className="h-full w-full"
      />
    </div>
  );
}
