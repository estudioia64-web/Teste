import React from 'react';
import { MapPin, Phone, Navigation, ExternalLink } from 'lucide-react';
import { VETPET_INFO } from '../data/vetpetData';

export const FullWidthMap: React.FC = () => {
  // Google Maps embed URL for Irecê, BA with exact confirmed address
  const embedUrl = `https://maps.google.com/maps?q=Rua+%C3%82ngelo+Fran%C3%A7a+Dourado%2C+94%2C+Centro%2C+Irec%C3%AA+-+BA&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=Rua+Ângelo+França+Dourado,+94+-+Centro,+Irecê+-+BA`;

  return (
    <section id="mapa" className="relative w-full bg-gray-100 border-t border-gray-200">
      
      {/* Mobile Location Header Bar (ensures map isn't completely occluded on small phone screens) */}
      <div className="lg:hidden bg-[#0a311e] text-white p-5 border-b border-emerald-900/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center flex-shrink-0 text-white shadow-md">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-['Outfit',sans-serif] font-bold text-base text-white">
                VetPet Clínica Veterinária &amp; Pet Shop
              </h3>
              <p className="text-xs text-emerald-200/90 mt-0.5">
                {VETPET_INFO.addressFull}
              </p>
              <div className="flex items-center gap-2 text-xs text-emerald-300 mt-1">
                <Phone className="w-3 h-3 text-emerald-400" />
                <a
                  href={VETPET_INFO.phoneLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline font-semibold"
                >
                  {VETPET_INFO.phoneFormatted}
                </a>
              </div>
            </div>
          </div>

            <div className="flex items-center gap-2.5 pt-1 sm:pt-0">
            <a
              id="map-mobile-como-chegar"
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#16a34a] hover:bg-[#15803d] active:scale-95 text-white text-xs font-bold px-5 py-3 rounded-full shadow transition-all min-h-[44px] btn-interactive btn-shine"
            >
              <Navigation className="w-4 h-4" />
              <span>Como chegar</span>
            </a>

            <a
              href={VETPET_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-200 text-xs font-semibold px-4 py-3 rounded-full transition-colors min-h-[44px] btn-interactive"
            >
              <span>Abrir Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* 100% Full-Width Map Container */}
      <div className="w-full h-[360px] sm:h-[440px] lg:h-[540px] relative">
        <iframe
          title="Localização da VetPet no Google Maps"
          src={embedUrl}
          className="w-full h-full border-0 filter saturate-[0.9] contrast-[1.05]"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Floating Brand Location Card on Desktop / Tablets */}
        <div className="hidden lg:block absolute top-8 left-12 xl:left-20 z-20 max-w-md w-full animate-float-slow">
          <div className="bg-[#072415]/95 text-white backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-emerald-500/30 card-interactive">
            
            <div className="flex items-start gap-4 mb-4">
              <div className="w-11 h-11 rounded-2xl bg-emerald-600 flex items-center justify-center flex-shrink-0 text-white shadow-md">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-extrabold text-emerald-400">
                  Venha nos visitar
                </span>
                <h3 className="font-['Outfit',sans-serif] font-bold text-lg text-white leading-tight mt-0.5">
                  VetPet Clínica Veterinária &amp; Pet Shop
                </h3>
                <p className="text-xs text-emerald-200/90 mt-1 leading-snug">
                  {VETPET_INFO.addressFull}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-emerald-200 mb-5 pl-1">
              <Phone className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span>
                Atendimento:{' '}
                <a
                  href={VETPET_INFO.phoneLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:underline"
                >
                  {VETPET_INFO.phoneFormatted}
                </a>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                id="map-desktop-como-chegar"
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#16a34a] hover:bg-[#15803d] active:scale-95 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full shadow-lg shadow-emerald-950/50 hover:shadow-emerald-700/40 transition-all duration-200 btn-interactive btn-shine"
              >
                <Navigation className="w-4 h-4" />
                <span>Como chegar</span>
              </a>

              <a
                href={VETPET_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-300 hover:text-white font-semibold px-3 py-2 transition-colors btn-interactive"
              >
                <span>Ver no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
