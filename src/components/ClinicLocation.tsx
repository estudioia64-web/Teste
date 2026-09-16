import React from 'react';
import { MapPin, Navigation, Phone, MessageCircle, Clock } from 'lucide-react';
import { VETPET_INFO } from '../data/vetpetData';

export const ClinicLocation: React.FC = () => {
  return (
    <section id="localizacao" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-init">
        
        {/* Card Container combining Info and Storefront image */}
        <div className="bg-[#f8faf8] border border-gray-200/80 rounded-3xl overflow-hidden shadow-sm card-interactive group">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Info: 5 cols */}
            <div className="lg:col-span-5 p-6 sm:p-10 space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-800 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    Localização privilegiada
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-['Outfit',sans-serif] text-[#0f3d26]">
                    Estamos em Irecê
                  </h3>
                </div>
              </div>

              {/* Address details */}
              <div className="space-y-2 text-gray-700">
                <p className="text-base font-semibold text-gray-900 leading-snug">
                  {VETPET_INFO.addressStreet}, {VETPET_INFO.addressNumber} - {VETPET_INFO.addressComplement}
                </p>
                <p className="text-sm text-gray-600">
                  {VETPET_INFO.addressNeighborhood} – {VETPET_INFO.addressCity}/{VETPET_INFO.addressState}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500 pt-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Atendimento: {VETPET_INFO.openingHours}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  id="clinic-location-como-chegar"
                  href="https://www.google.com/maps/dir/?api=1&destination=Rua+Ângelo+França+Dourado,+94+-+Centro,+Irecê+-+BA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0f3d26] hover:bg-[#16a34a] active:scale-95 text-white font-semibold text-sm px-6 py-3.5 rounded-full shadow transition-all duration-200 btn-interactive btn-shine"
                >
                  <Navigation className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  <span>Como chegar</span>
                </a>

                <a
                  href={VETPET_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-white hover:bg-gray-100 text-gray-800 border border-gray-200 font-semibold text-sm px-5 py-3 rounded-full transition-colors btn-interactive"
                >
                  <span>Ver no Maps ↗</span>
                </a>

                <a
                  href={VETPET_INFO.phoneLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 font-semibold text-sm px-5 py-3 rounded-full transition-colors btn-interactive"
                  title="Falar no WhatsApp"
                >
                  <Phone className="w-4 h-4 text-emerald-700" />
                  <span>{VETPET_INFO.phoneFormatted}</span>
                </a>
              </div>

            </div>

            {/* Right Storefront visual: 7 cols */}
            <div className="lg:col-span-7 h-72 sm:h-96 relative overflow-hidden bg-emerald-950">
              <img
                src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1200&q=80"
                alt="Fachada e estrutura da VetPet Clínica Veterinária em Irecê"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#f8faf8] via-transparent to-transparent lg:block hidden w-16" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating label on facade */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-emerald-100 shadow-xl max-w-md animate-float-slow card-interactive">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white flex-shrink-0">
                    <span className="font-bold text-sm">VP</span>
                  </div>
                  <div>
                    <h4 className="font-['Outfit',sans-serif] font-bold text-sm text-[#0f3d26]">
                      Visite nossa clínica
                    </h4>
                    <p className="text-xs text-gray-600">
                      Rua Ângelo França Dourado, 94 - Centro, Irecê/BA
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
