import React, { useState } from 'react';
import {
  Utensils,
  Sparkles,
  Cookie,
  Gamepad2,
  HeartPulse,
  Package,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react';
import { PETSHOP_CATEGORIES, PetShopCategory, VETPET_INFO } from '../data/vetpetData';

export const PetShopShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<PetShopCategory>(PETSHOP_CATEGORIES[0]);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Utensils':
        return <Utensils className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'Cookie':
        return <Cookie className="w-6 h-6" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-6 h-6" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6" />;
      case 'Package':
        return <Package className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  const handleConsultProduct = (catName: string) => {
    const text = encodeURIComponent(
      `Olá, gostaria de saber quais produtos da linha de ${catName} vocês têm disponíveis no Pet Shop da VetPet!`
    );
    window.open(`https://wa.me/${VETPET_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="petshop" className="py-16 sm:py-20 bg-[#062414] text-white relative overflow-hidden">
      {/* Decorative background paw/leaf glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none animate-glow-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none animate-glow-pulse delay-200" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 reveal-init">
        
        {/* Main Grid: Left info, Middle 6 categories, Right photo badge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading, description, CTA */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950 border border-emerald-700/50 px-3 py-1 rounded-full">
              Petshop
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit',sans-serif] text-white tracking-tight leading-tight">
              Produtos para <br />
              <span className="text-emerald-400">o seu pet</span>
            </h2>

            <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
              Alimentação, higiene, petiscos, brinquedos e muito mais. Tudo com qualidade e as melhores marcas selecionadas por nossa equipe.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => handleConsultProduct(activeCategory.name)}
                className="inline-flex items-center justify-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all duration-200 group btn-interactive btn-shine"
              >
                <MessageCircle className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-200" />
                <span>Consultar no WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
              </button>

              <a
                href={VETPET_INFO.phoneLink}
                className="inline-flex items-center justify-center gap-2 bg-emerald-950/90 hover:bg-emerald-900 border border-emerald-700/50 text-emerald-200 hover:text-white font-semibold text-xs px-4 py-3 rounded-full transition-colors btn-interactive"
                title="Ligar para a loja"
              >
                <span>Ligar: {VETPET_INFO.phoneFormatted}</span>
              </a>
            </div>

            <p className="text-[11px] text-emerald-300/70 italic">
              * Vitrine institucional. Valores e disponibilidade sob consulta no balcão da loja ou via WhatsApp.
            </p>
          </div>

          {/* Center Column: 6 circular category icons */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {PETSHOP_CATEGORIES.map((cat) => {
                const isSelected = activeCategory.id === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl border transition-all duration-200 text-center card-interactive ${
                      isSelected
                        ? 'bg-emerald-700 border-emerald-400 text-white shadow-lg shadow-emerald-950/60 scale-105'
                        : 'bg-emerald-950/70 hover:bg-emerald-900/60 border-emerald-800/40 text-emerald-200'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors duration-200 ${
                        isSelected
                          ? 'bg-white text-emerald-800'
                          : 'bg-emerald-900/90 text-emerald-300'
                      }`}
                    >
                      {getCategoryIcon(cat.icon)}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold tracking-tight">
                      {cat.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Category Description Card */}
            <div className="mt-4 p-4 rounded-2xl bg-emerald-950/80 border border-emerald-700/50 flex items-center justify-between gap-4 card-interactive transition-all duration-300">
              <div>
                <p className="text-xs font-bold text-emerald-300">Categoria: {activeCategory.name}</p>
                <p className="text-xs text-emerald-100/90 mt-0.5">{activeCategory.description}</p>
              </div>
              <button
                onClick={() => handleConsultProduct(activeCategory.name)}
                className="flex-shrink-0 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors btn-interactive"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Pedir</span>
              </button>
            </div>
          </div>

          {/* Right Column: Dog & Cat visual with badge */}
          <div className="lg:col-span-3 relative flex justify-center">
            <div className="relative w-full max-w-xs">
              
              <div className="absolute -top-4 -right-2 z-20 bg-white/95 text-[#072415] px-3.5 py-1.5 rounded-xl shadow-lg border border-emerald-200 transform rotate-3 flex items-center gap-1.5 animate-float-slow">
                <span className="font-['Caveat',cursive] text-base font-bold">
                  Mais conforto e felicidade!
                </span>
                <span>🐾</span>
              </div>

              <div className="rounded-3xl overflow-hidden border-2 border-emerald-600/40 shadow-2xl bg-emerald-950 card-interactive group">
                <img
                  src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=600&q=80"
                  alt="Pet feliz com produtos da VetPet"
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="mt-3 text-center">
                <p className="text-xs text-emerald-300 font-medium">
                  Rua Ângelo França Dourado, 94 - Centro, Irecê/BA
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
