import React from 'react';
import { Stethoscope, HeartHandshake, Sparkles, ShoppingBag } from 'lucide-react';
import { DIFFERENTIALS } from '../data/vetpetData';

export const Differentials: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'stethoscope':
        return <Stethoscope className="w-5 h-5 text-emerald-300" />;
      case 'paw-heart':
        return <HeartHandshake className="w-5 h-5 text-emerald-300" />;
      case 'cat-dog':
        return <Sparkles className="w-5 h-5 text-emerald-300" />;
      case 'petshop':
        return <ShoppingBag className="w-5 h-5 text-emerald-300" />;
      default:
        return <Sparkles className="w-5 h-5 text-emerald-300" />;
    }
  };

  return (
    <section
      id="diferenciais"
      className="bg-[#051f11] py-8 sm:py-10 border-y border-emerald-900/50 relative z-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-init">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {DIFFERENTIALS.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3.5 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-800/40 hover:border-emerald-500/50 p-3.5 sm:p-4 rounded-2xl transition-all duration-200 group card-interactive"
            >
              {/* Circular icon container */}
              <div className="w-12 h-12 rounded-full bg-emerald-800/80 group-hover:bg-emerald-700/90 border border-emerald-600/40 flex items-center justify-center flex-shrink-0 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                {getIcon(item.iconName)}
              </div>

              {/* Title */}
              <div className="flex-1">
                <p className="font-['Outfit',sans-serif] text-sm sm:text-base font-bold text-white group-hover:text-emerald-200 transition-colors leading-snug">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
