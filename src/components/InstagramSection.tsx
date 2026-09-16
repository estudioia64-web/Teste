import React from 'react';
import { Instagram, ExternalLink, Heart, Sparkles } from 'lucide-react';
import { INSTAGRAM_POSTS, VETPET_INFO } from '../data/vetpetData';

export const InstagramSection: React.FC = () => {
  return (
    <section id="instagram" className="py-16 sm:py-20 bg-[#f4f9f5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-init">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 flex items-center justify-center text-white shadow-sm transition-transform hover:rotate-12 duration-300">
                <Instagram className="w-4 h-4" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-['Outfit',sans-serif] text-[#0f3d26]">
                Acompanhe a VetPet
              </h2>
            </div>
            <p className="text-gray-600 text-sm sm:text-base max-w-xl">
              Nosso dia a dia, dicas, cuidados e muito amor pelos animais. Siga nosso Instagram e fique por dentro de tudo!
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={VETPET_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white text-sm font-bold px-6 py-3 rounded-full shadow hover:shadow-md transition-all duration-200 btn-interactive btn-shine"
            >
              <Instagram className="w-4 h-4" />
              <span>Ver Instagram</span>
            </a>
            <span className="text-xs sm:text-sm font-semibold text-emerald-800 hidden sm:inline">
              {VETPET_INFO.instagram}
            </span>
          </div>
        </div>

        {/* Gallery Grid: 5 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden shadow-sm aspect-square bg-gray-200 card-interactive"
              title={post.caption || 'Ver publicação no Instagram'}
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              {/* Hover overlay with Instagram logo and heart */}
              <div className="absolute inset-0 bg-[#0f3d26]/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-3 text-center">
                <Instagram className="w-6 h-6 mb-2" />
                <p className="text-[11px] font-medium line-clamp-3 leading-tight">
                  {post.caption}
                </p>
                <span className="mt-2 text-[10px] uppercase font-bold tracking-wider text-emerald-300">
                  Ver no Instagram
                </span>
              </div>
            </a>
          ))}

          {/* 5th Card: Direct CTA Tile */}
          <a
            href={VETPET_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl overflow-hidden shadow-sm aspect-square bg-gradient-to-br from-[#0a2e1a] to-[#0f4426] p-4 flex flex-col items-center justify-center text-center text-white border border-emerald-700/50 hover:border-emerald-400 transition-colors card-interactive"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-800/80 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Instagram className="w-6 h-6 text-emerald-300" />
            </div>
            <p className="font-['Outfit',sans-serif] font-bold text-sm leading-tight text-white mb-1">
              Mais conteúdo no nosso Instagram
            </p>
            <p className="text-xs text-emerald-300 font-semibold mb-2">{VETPET_INFO.instagram}</p>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 group-hover:underline">
              <span>Acessar</span>
              <ExternalLink className="w-3 h-3" />
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};
