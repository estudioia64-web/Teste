import React from 'react';
import headerLogo from '../assets/images/regenerated_image_1789565783260.png';
import footerLogo from '../assets/images/regenerated_image_1789565784548.png';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'white';
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  layout?: 'horizontal' | 'vertical' | 'icon';
  priority?: boolean;
  src?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  showSubtitle = true,
  size = 'md',
  layout = 'horizontal',
  priority = false,
  src,
}) => {
  // Responsive height classes maintaining aspect ratio
  const heightClasses = {
    horizontal: {
      sm: 'h-10 md:h-11',
      md: 'h-12 md:h-14 lg:h-16',
      lg: 'h-16 md:h-20',
      xl: 'h-24 md:h-28',
    },
    vertical: {
      sm: 'h-16 md:h-20',
      md: 'h-24 md:h-28',
      lg: 'h-32 md:h-36',
      xl: 'h-44 md:h-52',
    },
    icon: {
      sm: 'h-10 w-10',
      md: 'h-12 w-12 md:h-14 md:w-14',
      lg: 'h-16 w-16 md:h-20 md:w-20',
      xl: 'h-24 w-24 md:h-28 md:w-28',
    },
  };

  const selectedHeightClass = heightClasses[layout]?.[size] || heightClasses.horizontal.md;

  // Use specified src, or footer logo for dark/vertical footer, or header logo for header
  const imgSrc = src || (variant === 'white' || layout === 'vertical' ? footerLogo : headerLogo);

  return (
    <div
      className={`inline-flex items-center justify-center transition-transform duration-200 hover:opacity-95 ${className}`}
      id="brand-official-logo"
    >
      <picture className="flex items-center justify-center">
        <img
          src={imgSrc}
          alt="VetPet Clínica Veterinária & Pet Shop"
          className={`${selectedHeightClass} w-auto object-contain drop-shadow-sm select-none rounded-lg`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          referrerPolicy="no-referrer"
        />
      </picture>
    </div>
  );
};


