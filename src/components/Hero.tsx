import React from 'react';
import { Calendar, MessageCircle, Phone, Star, Sparkles, Heart } from 'lucide-react';
import { VETPET_INFO } from '../data/vetpetData';

interface HeroProps {
  onOpenAppointmentModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointmentModal }) => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-[#062414] via-[#0b3820] to-[#072415] text-white pt-10 pb-16 lg:pt-16 lg:pb-24"
    >
      {/* Subtle paw print decorative watermarks */}
      <div className="absolute inset-0 pointer-events-none opacity-5 animate-ambient-pulse">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="paw-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
              <path
                d="M40 35 C38 35 34 38 34 42 C34 46 38 49 40 49 C42 49 46 46 46 42 C46 38 42 35 40 35 Z M30 33 C28 33 26 35 26 37 C26 39 28 41 30 41 C32 41 34 39 34 37 C34 35 32 33 30 33 Z M50 33 C48 33 46 35 46 37 C46 39 48 41 50 41 C52 41 54 39 54 37 C54 35 52 33 50 33 Z M35 26 C33 26 32 28 32 30 C32 32 33 33 35 33 C37 33 38 32 38 30 C38 28 37 26 35 26 Z M45 26 C43 26 42 28 42 30 C42 32 43 33 45 33 C47 33 48 32 48 30 C48 28 47 26 45 26 Z"
                fill="#ffffff"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#paw-pattern)" />
        </svg>
      </div>

      {/* Ambient glow highlights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none animate-glow-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none animate-glow-pulse delay-300" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Value Prop & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            
            {/* Upper Badge */}
            <div className="inline-flex items-center gap-2 self-start bg-emerald-900/80 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-inner animate-fade-in-down">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>CLÍNICA VETERINÁRIA E PET SHOP</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-['Outfit',sans-serif] tracking-tight text-white leading-[1.12] animate-fade-in-up delay-100">
              Cuidado completo <br />
              <span className="text-emerald-400">para o seu pet.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-emerald-100/90 font-normal leading-relaxed max-w-2xl animate-fade-in-up delay-150">
              Na VetPet, seu pet recebe atendimento veterinário completo e todo o carinho que ele merece. Aqui, saúde, bem-estar e qualidade de vida caminham juntos.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 animate-fade-in-up delay-200">
              {/* Primary Appointment Button */}
              <button
                id="hero-cta-agendar"
                onClick={onOpenAppointmentModal}
                className="inline-flex items-center justify-center gap-2.5 bg-[#16a34a] hover:bg-[#15803d] active:scale-[0.98] text-white font-bold text-base px-8 py-4 rounded-full shadow-xl shadow-emerald-950/50 hover:shadow-emerald-600/40 transition-all duration-200 group btn-interactive btn-shine"
              >
                <Calendar className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200" />
                <span>Agendar atendimento</span>
              </button>

              {/* WhatsApp Button */}
              <a
                id="hero-cta-whatsapp"
                href={VETPET_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#0b3e23] hover:bg-[#0f4e2c] border border-emerald-400/30 hover:border-emerald-300 text-white font-bold text-base px-7 py-4 rounded-full transition-all duration-200 shadow-md group btn-interactive"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform duration-200" />
                <span>Falar pelo WhatsApp</span>
              </a>
            </div>

            {/* Phone distinction info */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-200/90 pt-1 animate-fade-in-up delay-250">
              <Phone className="w-4 h-4 text-[#4ade80]" />
              <span>
                Atendimento direto:{' '}
                <a
                  href={VETPET_INFO.phoneLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white hover:text-emerald-300 underline underline-offset-2 transition-colors"
                >
                  {VETPET_INFO.phoneFormatted}
                </a>
              </span>
            </div>

            {/* Google Rating Badge */}
            <div className="pt-2 animate-fade-in-up delay-300">
              <a
                href={VETPET_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 px-4 py-2.5 rounded-2xl transition-all duration-200 group card-interactive"
              >
                {/* Google G icon */}
                <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center bg-white rounded-full p-1 shadow-sm group-hover:scale-110 transition-transform duration-200">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                    />
                  </svg>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                  <span className="font-bold text-white">5,0 no Google</span>
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-emerald-200/90 font-semibold">11 avaliações confirmadas</span>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Hero Imagery */}
          <div className="lg:col-span-5 relative flex justify-center items-end animate-fade-in-scale delay-150">
            
            {/* Circular background framing */}
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Decorative handwritten banner */}
              <div className="absolute -top-6 right-2 sm:right-6 z-20 bg-white/95 backdrop-blur-sm text-[#0d3b24] px-4 py-2 rounded-2xl shadow-xl transform rotate-2 border border-emerald-100 flex items-center gap-2 animate-float-slow">
                <Heart className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                <span className="font-['Caveat',cursive] text-lg sm:text-xl font-bold leading-tight">
                  Aqui tem amor em forma de cuidado!
                </span>
                <span className="text-base">🐾</span>
              </div>

              {/* Main Photo Card */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-400/25 bg-gradient-to-t from-emerald-950 via-transparent to-transparent group">
                <img
                  src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1000&q=80"
                  alt="Cachorro e gato saudáveis atendidos na VetPet Clínica Veterinária"
                  className="w-full h-[380px] sm:h-[450px] lg:h-[480px] object-cover object-center rounded-2xl border border-emerald-50 group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating pill badge on the image */}
                <div className="absolute top-4 left-4 z-20 bg-black/40 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 shadow">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Consultas • Vacinas • Petshop</span>
                </div>

                {/* Bottom gentle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#062414] via-black/20 to-transparent opacity-80 pointer-events-none" />

                {/* Micro badge overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0a2e1b]/90 backdrop-blur-md rounded-2xl p-3 border border-emerald-500/30 flex items-center justify-between shadow-lg card-interactive">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white shadow-inner">
                      <Sparkles className="w-5 h-5 text-emerald-100" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white tracking-wide">VetPet • Clínica & Pet Shop</p>
                      <p className="text-[11px] text-emerald-300 font-medium">Rua Ângelo França Dourado, 94 • Irecê</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-700/50 px-3 py-1 rounded-full">
                    Cães &amp; Gatos
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
