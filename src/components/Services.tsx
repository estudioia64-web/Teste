import React, { useState } from 'react';
import {
  Stethoscope,
  ShieldCheck,
  PlusCircle,
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
  X,
  MessageCircle,
  Calendar,
  Phone,
} from 'lucide-react';
import { SERVICES, ServiceItem, VETPET_INFO } from '../data/vetpetData';

interface ServicesProps {
  onOpenAppointmentModal: (serviceName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenAppointmentModal }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope':
        return <Stethoscope className="w-5 h-5 text-emerald-700" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-700" />;
      case 'Cross':
        return <PlusCircle className="w-5 h-5 text-emerald-700" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-emerald-700" />;
      default:
        return <Stethoscope className="w-5 h-5 text-emerald-700" />;
    }
  };

  return (
    <section id="servicos" className="py-16 sm:py-24 bg-[#f8faf8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-init">
        
        {/* Header Grid: Left intro, Right 4 cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Heading and description */}
          <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-28">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full">
              Nossos serviços
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit',sans-serif] text-[#0f3d26] tracking-tight leading-tight">
              Tudo o que seu pet precisa, em um só lugar.
            </h2>

            <p className="text-gray-600 text-base leading-relaxed">
              Da consulta ao cuidado preventivo, passando pelo atendimento clínico e tudo para o dia a dia no petshop. Aqui, seu pet recebe um cuidado completo.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenAppointmentModal()}
                className="inline-flex items-center gap-2 text-white bg-[#0f3d26] hover:bg-[#16a34a] font-semibold text-sm px-6 py-3.5 rounded-full shadow transition-all duration-200 group btn-interactive btn-shine"
              >
                <span>Conheça todos os serviços</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
              </button>
            </div>

            <div className="p-4 bg-emerald-50/70 border border-emerald-200/60 rounded-2xl">
              <p className="text-xs text-emerald-900 font-medium leading-relaxed">
                🐾 <strong>Nota de transparência:</strong> Na VetPet prezamos pela seriedade. Nossos serviços são focados no cuidado clínico preventivo e bem-estar de cães e gatos.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Cards in 2x2 grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SERVICES.map((service, index) => {
                const serviceTags = [
                  'Clínica Geral',
                  'Saúde & Imunização',
                  'Diagnóstico & Cuidado',
                  'Nutrição & Acessórios',
                ];
                const tag = serviceTags[index] || 'Cuidado Pet';

                return (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className="bg-white rounded-3xl overflow-hidden border border-emerald-100/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col cursor-pointer group card-interactive"
                  >
                    {/* Card Image */}
                    <div className="h-44 sm:h-48 overflow-hidden relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                      
                      {/* Top tag badge */}
                      <span className="absolute top-3 left-3 bg-[#062414]/80 backdrop-blur-sm text-[11px] font-bold text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full shadow">
                        {tag}
                      </span>

                      {/* View Details pill on hover */}
                      <span className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-xs font-bold text-emerald-800 px-3 py-1 rounded-full opacity-90 group-hover:opacity-100 transition-opacity shadow">
                        Ver detalhes +
                      </span>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Icon */}
                        <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4 group-hover:bg-[#16a34a] group-hover:text-white transition-colors duration-200">
                          {getServiceIcon(service.icon)}
                        </div>

                        {/* Title */}
                        <h3 className="font-['Outfit',sans-serif] text-xl font-bold text-[#0f3d26] mb-2 group-hover:text-emerald-700 transition-colors">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {service.description}
                        </p>

                        {/* Highlights list */}
                        {service.details && (
                          <div className="space-y-1.5 mb-4">
                            {service.details.slice(0, 2).map((item, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a] flex-shrink-0" />
                                <span className="line-clamp-1">{item}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#16a34a] group-hover:text-[#0f3d26] transition-colors">
                        <span>Ver detalhes e agendar</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 border border-emerald-100">
            {/* Header Image */}
            <div className="h-52 relative overflow-hidden">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-4 bg-white/95 px-3.5 py-1.5 rounded-full text-xs font-bold text-emerald-800 flex items-center gap-1.5 shadow">
                {getServiceIcon(selectedService.icon)}
                <span>{selectedService.title}</span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#0f3d26] font-['Outfit',sans-serif] mb-2">
                {selectedService.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {selectedService.description}
              </p>

              {selectedService.details && (
                <div className="space-y-2.5 mb-6 bg-emerald-50/60 p-4 rounded-2xl border border-emerald-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                    O que está incluído:
                  </p>
                  {selectedService.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-col gap-2.5 pt-2">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <button
                    onClick={() => {
                      const name = selectedService.title;
                      setSelectedService(null);
                      onOpenAppointmentModal(name);
                    }}
                    className="flex-1 bg-[#16a34a] hover:bg-[#15803d] text-white font-bold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow btn-interactive btn-shine"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Agendar atendimento</span>
                  </button>

                  <a
                    href={`https://wa.me/5575998452544?text=${encodeURIComponent(`Olá! Gostaria de informações e agendar o serviço de ${selectedService.title} na VetPet.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#075e54] hover:bg-[#128c7e] text-white font-bold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow btn-interactive"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp Direto</span>
                  </a>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-xs">
                  <a
                    href={VETPET_INFO.phoneLink}
                    className="text-emerald-700 font-semibold hover:underline flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Ligar agora: {VETPET_INFO.phoneFormatted}</span>
                  </a>

                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-gray-500 hover:text-gray-800 font-medium py-1 px-3 rounded-lg text-xs"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
