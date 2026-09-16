import React, { useState } from 'react';
import { Instagram, MessageCircle, Phone, Mail, MapPin, X, Shield, FileText } from 'lucide-react';
import { Logo } from './Logo';
import { VETPET_INFO } from '../data/vetpetData';

interface FooterProps {
  onOpenLegalModal: (type: 'privacidade' | 'termos' | 'lgpd') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegalModal }) => {
  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'A VetPet', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Petshop', href: '#petshop' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Dúvidas', href: '#duvidas' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <footer className="bg-[#041a0d] text-emerald-100/90 pt-16 pb-12 border-t border-emerald-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-init">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/50">
          
          {/* Col 1: Brand Logo & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex justify-start">
              <Logo variant="white" size="lg" layout="vertical" />
            </div>
            <p className="text-xs sm:text-sm text-emerald-200/80 leading-relaxed max-w-sm mt-3">
              Cuidado completo para o seu pet em Irecê/BA. Atendimento veterinário acolhedor, saúde preventiva e produtos de alta qualidade no Pet Shop.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={VETPET_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-emerald-900/80 hover:bg-[#16a34a] text-white flex items-center justify-center transition-all duration-200 btn-interactive"
                aria-label="Instagram da VetPet"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={VETPET_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-emerald-900/80 hover:bg-[#25D366] text-white flex items-center justify-center transition-all duration-200 btn-interactive"
                aria-label="WhatsApp da VetPet"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-['Outfit',sans-serif] font-bold text-white text-base tracking-wide">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-emerald-200/80 hover:text-white transition-all duration-200 flex items-center gap-1.5 group hover:translate-x-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Official Contact Data (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="font-['Outfit',sans-serif] font-bold text-white text-base tracking-wide">
              Informações Oficiais
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-emerald-200/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{VETPET_INFO.addressFull}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <span>
                  WhatsApp:{' '}
                  <a
                    href={VETPET_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-bold hover:underline"
                  >
                    {VETPET_INFO.whatsappFormatted}
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>
                  Telefone fixo/ligações:{' '}
                  <a
                    href={VETPET_INFO.phoneLink}
                    className="text-white font-bold hover:underline"
                  >
                    {VETPET_INFO.phoneFormatted}
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>
                  E-mail:{' '}
                  <a
                    href={`mailto:${VETPET_INFO.email}`}
                    className="text-white font-bold hover:underline"
                  >
                    {VETPET_INFO.email}
                  </a>
                </span>
              </div>
              <div className="text-[11px] text-emerald-400 pt-1">
                Atendimento: {VETPET_INFO.openingHours}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Row: Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-emerald-300/70 text-center md:text-left">
          <p>
            © 2026 VetPet Clínica Veterinária e Petshop. Todos os direitos reservados.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <button
              onClick={() => onOpenLegalModal('privacidade')}
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Política de Privacidade
            </button>
            <span className="text-emerald-700">|</span>
            <button
              onClick={() => onOpenLegalModal('termos')}
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Termos de Uso
            </button>
            <span className="text-emerald-700">|</span>
            <button
              onClick={() => onOpenLegalModal('lgpd')}
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              LGPD
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
