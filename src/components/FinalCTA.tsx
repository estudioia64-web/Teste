import React from 'react';
import { MessageCircle, Phone, Mail, ArrowRight, Heart } from 'lucide-react';
import { VETPET_INFO } from '../data/vetpetData';

interface FinalCTAProps {
  onOpenAppointmentModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenAppointmentModal }) => {
  return (
    <section id="contato" className="bg-[#062414] text-white py-12 sm:py-14 border-t border-emerald-800/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-init">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8">
          
          {/* Left Title & Paw */}
          <div className="flex items-center gap-4 text-center xl:text-left">
            <div className="w-14 h-14 rounded-2xl bg-emerald-800/80 border border-emerald-600/40 flex items-center justify-center text-emerald-300 flex-shrink-0 shadow-lg animate-pulse-gentle">
              <Heart className="w-7 h-7 fill-emerald-500 text-emerald-500" />
            </div>
            <div>
              <p className="font-['Outfit',sans-serif] text-xl sm:text-2xl font-bold text-white leading-tight">
                Seu pet merece cuidado.
              </p>
              <p className="text-emerald-400 font-extrabold text-lg sm:text-xl font-['Outfit',sans-serif]">
                Vamos conversar?
              </p>
            </div>
          </div>

          {/* Middle: Contacts breakdown (WhatsApp, Phone, Email) */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm">
            {/* WhatsApp */}
            <a
              href={VETPET_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 hover:text-emerald-300 transition-colors group card-interactive p-2 rounded-xl"
            >
              <div className="w-9 h-9 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
              </div>
              <div className="text-left">
                <span className="block text-[11px] text-emerald-300 uppercase font-bold tracking-wider">WhatsApp</span>
                <span className="font-semibold text-white">{VETPET_INFO.whatsappFormatted}</span>
              </div>
            </a>

            {/* Phone */}
            <a
              href={VETPET_INFO.phoneLink}
              className="flex items-center gap-2.5 hover:text-emerald-300 transition-colors group card-interactive p-2 rounded-xl"
            >
              <div className="w-9 h-9 rounded-full bg-emerald-700/40 border border-emerald-500/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-4 h-4 text-emerald-300" />
              </div>
              <div className="text-left">
                <span className="block text-[11px] text-emerald-300 uppercase font-bold tracking-wider">Telefone</span>
                <span className="font-semibold text-white">{VETPET_INFO.phoneFormatted}</span>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${VETPET_INFO.email}`}
              className="flex items-center gap-2.5 hover:text-emerald-300 transition-colors group card-interactive p-2 rounded-xl"
            >
              <div className="w-9 h-9 rounded-full bg-emerald-700/40 border border-emerald-500/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-4 h-4 text-emerald-300" />
              </div>
              <div className="text-left">
                <span className="block text-[11px] text-emerald-300 uppercase font-bold tracking-wider">E-mail</span>
                <span className="font-semibold text-white">{VETPET_INFO.email}</span>
              </div>
            </a>
          </div>

          {/* Right CTA Button */}
          <div className="flex-shrink-0">
            <button
              onClick={onOpenAppointmentModal}
              className="inline-flex items-center gap-2 bg-[#16a34a] hover:bg-[#15803d] active:scale-95 text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg shadow-emerald-950/60 hover:shadow-emerald-700/40 transition-all duration-200 group btn-interactive btn-shine"
            >
              <span>Agendar atendimento</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-200" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
