import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS, VETPET_INFO } from '../data/vetpetData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="py-16 sm:py-20 bg-[#f8faf8] border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 reveal-init">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full">
            Dúvidas frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit',sans-serif] text-[#0f3d26] tracking-tight">
            Tire suas dúvidas sobre a VetPet
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            Reunimos as respostas para as principais perguntas dos tutores sobre nossos atendimentos e serviços em Irecê.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border shadow-sm overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-emerald-300 shadow-md ring-1 ring-emerald-200/50' : 'border-gray-200/80 hover:border-emerald-200'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className={`font-['Outfit',sans-serif] font-bold text-base sm:text-lg leading-snug transition-colors ${
                    isOpen ? 'text-[#0f3d26]' : 'text-gray-900'
                  }`}>
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-emerald-100 text-emerald-800 rotate-180' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-50 pt-3 animate-in fade-in slide-in-from-top-1 duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need more help card */}
        <div className="mt-8 p-5 bg-emerald-50/80 border border-emerald-200/70 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left card-interactive">
          <div>
            <p className="font-bold text-sm text-emerald-900">Ainda tem alguma dúvida?</p>
            <p className="text-xs text-emerald-700">Fale diretamente com nossa equipe pelo WhatsApp.</p>
          </div>
          <a
            href={VETPET_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow transition-all duration-200 btn-interactive btn-shine"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Conversar agora</span>
          </a>
        </div>

      </div>
    </section>
  );
};
