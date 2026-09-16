import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X, Phone, MessageCircle, Code2 } from 'lucide-react';
import { Logo } from './Logo';
import { VETPET_INFO } from '../data/vetpetData';

interface HeaderProps {
  onOpenAppointmentModal: () => void;
  onOpenPhpModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenAppointmentModal,
  onOpenPhpModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = ['inicio', 'sobre', 'servicos', 'petshop', 'avaliacoes', 'duvidas', 'contato'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio', id: 'inicio' },
    { label: 'A VetPet', href: '#sobre', id: 'sobre' },
    { label: 'Serviços', href: '#servicos', id: 'servicos' },
    { label: 'Petshop', href: '#petshop', id: 'petshop' },
    { label: 'Avaliações', href: '#avaliacoes', id: 'avaliacoes' },
    { label: 'Dúvidas', href: '#duvidas', id: 'duvidas' },
    { label: 'Contato', href: '#contato', id: 'contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-white py-4 border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, '#inicio')}
          className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-lg"
          aria-label="VetPet Página Inicial"
        >
          <Logo size="md" variant="light" layout="horizontal" priority />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7" aria-label="Navegação principal">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative font-['Plus_Jakarta_Sans',sans-serif] text-sm font-semibold transition-colors duration-200 py-1 ${
                  isActive
                    ? 'text-[#15803d]'
                    : 'text-[#374151] hover:text-[#15803d]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#16a34a] rounded-full animate-fade-in" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Header Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* WhatsApp Direct */}
          <a
            href={VETPET_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-[#075e54] bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 rounded-full transition-all duration-200 btn-interactive"
            title="Conversar direto no WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366] transition-transform duration-200 hover:scale-110" />
            <span>WhatsApp</span>
          </a>

          {/* PHP Project button for inspection */}
          <button
            onClick={onOpenPhpModal}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-full transition-colors duration-200 btn-interactive"
            title="Ver arquivos do projeto PHP para VS Code"
          >
            <Code2 className="w-3.5 h-3.5 text-emerald-600 transition-transform duration-200 hover:rotate-12" />
            <span>Código PHP</span>
          </button>

          {/* Appointment CTA */}
          <button
            id="header-cta-agendar"
            onClick={onOpenAppointmentModal}
            className="inline-flex items-center gap-2 bg-[#16a34a] hover:bg-[#15803d] active:scale-95 text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 btn-interactive btn-shine"
          >
            <Calendar className="w-4 h-4 transition-transform duration-200 hover:scale-110" />
            <span>Agendar atendimento</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenAppointmentModal}
            className="inline-flex items-center gap-1 bg-[#16a34a] hover:bg-[#15803d] text-white text-xs font-semibold px-3 py-2 rounded-full sm:hidden btn-interactive"
            aria-label="Agendar atendimento"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Agendar</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gray-700 hover:text-[#15803d] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all duration-200 active:scale-90"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 transition-transform duration-200 rotate-90" /> : <Menu className="w-6 h-6 transition-transform duration-200" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          {/* Quick info banner in mobile menu */}
          <div className="mb-3 px-3 py-2 bg-emerald-50/80 border border-emerald-100 rounded-xl text-xs text-emerald-900 flex items-center justify-between">
            <span className="font-semibold">Centro • Irecê/BA</span>
            <span className="text-emerald-700 font-medium">Seg-Sáb: 08h-18h</span>
          </div>

          <nav className="flex flex-col space-y-1 mb-5" aria-label="Navegação mobile">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-3 rounded-xl text-base font-bold transition-colors min-h-[44px] flex items-center ${
                    isActive
                      ? 'bg-emerald-50 text-[#15803d]'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-[#15803d]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointmentModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white font-bold py-3.5 px-4 rounded-full shadow min-h-[48px] btn-interactive"
            >
              <Calendar className="w-5 h-5" />
              <span>Agendar atendimento</span>
            </button>

            <a
              href={VETPET_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#075e54] hover:bg-[#128c7e] text-white font-bold py-3.5 px-4 rounded-full shadow min-h-[48px] btn-interactive"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
              <span>WhatsApp: {VETPET_INFO.whatsappFormatted}</span>
            </a>

            <a
              href={VETPET_INFO.phoneLink}
              className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-full text-sm min-h-[44px] btn-interactive"
            >
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>Ligar: {VETPET_INFO.phoneFormatted}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPhpModal();
              }}
              className="w-full flex items-center justify-center gap-2 text-xs text-emerald-800 bg-emerald-50 py-2.5 px-3 rounded-full border border-emerald-200 font-semibold mt-1 btn-interactive"
            >
              <Code2 className="w-4 h-4 text-emerald-600" />
              <span>Ver Arquivos do Projeto PHP (VS Code)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
