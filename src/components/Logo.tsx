'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageProvider';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  priority?: boolean;
  className?: string;
}

/** AMAYNO brand lockup — transparent PNG, fixed 12×10 ratio. */
export default function Logo({ size = 'md', priority = false, className = '' }: LogoProps) {
  const { t } = useLanguage();

  const widths = {
    sm: 'w-[5.4rem] min-w-[5.4rem] sm:w-[6rem] sm:min-w-[6rem]',
    md: 'w-[6.75rem] min-w-[6.75rem] sm:w-[7.5rem] sm:min-w-[7.5rem] md:w-[8.25rem] md:min-w-[8.25rem]',
    lg: 'w-[9rem] min-w-[9rem] sm:w-[10.5rem] sm:min-w-[10.5rem] md:w-[12rem] md:min-w-[12rem]',
    xl: 'w-[12rem] min-w-[12rem] sm:w-[14.4rem] sm:min-w-[14.4rem] md:w-[16.8rem] md:min-w-[16.8rem] lg:w-[18rem] lg:min-w-[18rem]',
  };

  return (
    <div className={`relative flex-shrink-0 aspect-[12/10] ${widths[size]} ${className}`}>
      <Image
        src="/logo-amayno.png"
        alt={`AMAYNO — ${t('logo_tagline')}`}
        fill
        priority={priority}
        className="object-contain object-center"
        sizes="(max-width: 640px) 108px, (max-width: 1024px) 144px, 288px"
      />
    </div>
  );
}
