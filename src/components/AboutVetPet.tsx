import React from 'react';
import { ShieldCheck, Heart, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { VETPET_INFO } from '../data/vetpetData';

interface AboutVetPetProps {
  onOpenAppointmentModal: () => void;
}

export const AboutVetPet: React.FC<AboutVetPetProps> = ({ onOpenAppointmentModal }) => {
  return (
    <section id="sobre" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-init">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-emerald-50 bg-emerald-100 card-interactive group">
                <img
                  src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80"
                  alt="Veterinário atendendo com carinho na VetPet"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Pill Card */}
              <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-white rounded-2xl p-4 shadow-xl border border-emerald-100 max-w-xs flex items-center gap-3.5 animate-float-slow card-interactive">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-700 transition-transform duration-300 hover:scale-110">
                  <Heart className="w-6 h-6 fill-emerald-600 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 leading-tight">Amor em forma de cuidado</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">Atendimento que respeita o ritmo do seu pet</p>
                </div>
              </div>

              {/* Decorative background shape */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-100/60 rounded-full -z-10 blur-xl animate-glow-pulse" />
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>A VetPet Clínica Veterinária &amp; Pet Shop</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit',sans-serif] text-[#0f3d26] tracking-tight leading-tight">
              Dedicados à saúde, longevidade e bem-estar de quem faz parte da sua família.
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Nossa clínica nasceu com um compromisso claro: proporcionar um atendimento veterinário de excelência, onde cada animal é tratado com paciência, atenção minuciosa e afeto.
            </p>

            <p className="text-gray-600 text-base leading-relaxed">
              Sabemos que levar seu cão ou gato ao veterinário requer confiança. Por isso, aliamos a prática clínica preventiva a um ambiente acolhedor e a conveniência de um pet shop completo no coração de Irecê.
            </p>

            {/* Core Values / Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5 transition-transform duration-200 hover:translate-x-1">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-gray-800">
                  Acolhimento gentil para cães e gatos
                </span>
              </div>
              <div className="flex items-start gap-2.5 transition-transform duration-200 hover:translate-x-1">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-gray-800">
                  Foco em prevenção e qualidade de vida
                </span>
              </div>
              <div className="flex items-start gap-2.5 transition-transform duration-200 hover:translate-x-1">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-gray-800">
                  Produtos criteriosamente selecionados no Pet Shop
                </span>
              </div>
              <div className="flex items-start gap-2.5 transition-transform duration-200 hover:translate-x-1">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-gray-800">
                  Localização central e de fácil acesso em Irecê
                </span>
              </div>
            </div>

            {/* Address & CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenAppointmentModal}
                className="bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-sm px-6 py-3 rounded-full shadow hover:shadow-md transition-all duration-200 btn-interactive btn-shine"
              >
                Conhecer a VetPet
              </button>

              <div className="flex items-center gap-2 text-xs text-gray-500">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>{VETPET_INFO.addressFull}</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
