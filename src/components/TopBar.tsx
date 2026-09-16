import React from 'react';
import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react';
import { VETPET_INFO } from '../data/vetpetData';

export const TopBar: React.FC = () => {
  return (
    <div
      id="top-bar"
      className="bg-[#092817] text-emerald-100/90 text-xs py-2 px-4 border-b border-emerald-900/40 hidden sm:block"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-6">
        {/* Address */}
        <a
          href={VETPET_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-white transition-colors duration-200"
          title="Ver no mapa"
        >
          <MapPin className="w-3.5 h-3.5 text-[#4ade80] flex-shrink-0" />
          <span className="truncate">{VETPET_INFO.addressFull}</span>
        </a>

        {/* Contacts & Hours */}
        <div className="flex items-center gap-5 sm:gap-6 ml-auto">
          {/* WhatsApp Direct */}
          <a
            href={VETPET_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#4ade80] transition-colors duration-200 font-medium"
            title="Conversar no WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366] flex-shrink-0" />
            <span>WhatsApp: {VETPET_INFO.whatsappFormatted}</span>
          </a>

          {/* Direct Phone / WhatsApp */}
          <a
            href={VETPET_INFO.phoneLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors duration-200 font-medium"
            title="Conversar no WhatsApp"
          >
            <Phone className="w-3.5 h-3.5 text-[#4ade80] flex-shrink-0" />
            <span>Tel: {VETPET_INFO.phoneFormatted}</span>
          </a>

          {/* Opening Hours */}
          <div className="flex items-center gap-1.5 text-emerald-200/80">
            <Clock className="w-3.5 h-3.5 text-[#4ade80] flex-shrink-0" />
            <span>{VETPET_INFO.openingHours}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
