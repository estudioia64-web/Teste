import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { VETPET_INFO } from '../data/vetpetData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-gray-800 text-xs font-semibold py-2 px-3.5 rounded-2xl shadow-xl border border-emerald-100 animate-in fade-in slide-in-from-right-2">
          <span>Olá! Agende sua consulta pelo WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-gray-600 p-0.5"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        id="btn-whatsapp-flutuante"
        href={VETPET_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/40 hover:scale-110 transition-all duration-300 relative group btn-interactive"
        aria-label="Falar com a VetPet no WhatsApp"
      >
        {/* Pulsing beacon */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 text-white fill-white relative z-10" />
      </a>
    </div>
  );
};
