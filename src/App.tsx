import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Differentials } from './components/Differentials';
import { AboutVetPet } from './components/AboutVetPet';
import { Services } from './components/Services';
import { PetShopShowcase } from './components/PetShopShowcase';
import { Reviews } from './components/Reviews';
import { InstagramSection } from './components/InstagramSection';
import { ClinicLocation } from './components/ClinicLocation';
import { FullWidthMap } from './components/FullWidthMap';
import { FinalCTA } from './components/FinalCTA';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AppointmentModal } from './components/AppointmentModal';
import { LegalModal } from './components/LegalModal';
import { PhpProjectModal } from './components/PhpProjectModal';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | undefined>();
  const [legalModalType, setLegalModalType] = useState<'privacidade' | 'termos' | 'lgpd' | null>(null);
  const [phpModalOpen, setPhpModalOpen] = useState(false);

  const handleOpenAppointment = (serviceName?: string) => {
    setSelectedServiceForModal(serviceName);
    setAppointmentModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8faf8] font-['Plus_Jakarta_Sans',sans-serif] text-[#1c2e24] antialiased">
      {/* 1. Top Informational Bar */}
      <TopBar />

      {/* 2. Sticky Header with Logo and Navigation */}
      <Header
        onOpenAppointmentModal={() => handleOpenAppointment()}
        onOpenPhpModal={() => setPhpModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 3. Impactful Hero Section */}
        <Hero onOpenAppointmentModal={() => handleOpenAppointment()} />

        {/* 4. Differentials Bar */}
        <Differentials />

        {/* 5. A VetPet - Institutional & Trust */}
        <AboutVetPet onOpenAppointmentModal={() => handleOpenAppointment()} />

        {/* 6. Nossos Serviços */}
        <Services onOpenAppointmentModal={handleOpenAppointment} />

        {/* 7. Pet Shop Showcase */}
        <PetShopShowcase />

        {/* 8. Avaliações / Prova Social */}
        <Reviews />

        {/* 9. Instagram Section */}
        <InstagramSection />

        {/* 10. Localização em Irecê e Fachada */}
        <ClinicLocation />

        {/* 11. FAQ / Dúvidas */}
        <FaqSection />

        {/* 12. MAPA GOOGLE 100% FULL WIDTH (Requisito Obrigatório) */}
        <FullWidthMap />

        {/* 13. CTA Final Pré-Footer */}
        <FinalCTA onOpenAppointmentModal={() => handleOpenAppointment()} />
      </main>

      {/* 14. Footer Premium */}
      <Footer onOpenLegalModal={(type) => setLegalModalType(type)} />

      {/* 15. Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* 16. Appointment Scheduling Modal */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        initialService={selectedServiceForModal}
      />

      {/* 17. Legal Modals (Privacidade, Termos, LGPD) */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* 18. PHP Native Project Viewer for VS Code */}
      <PhpProjectModal
        isOpen={phpModalOpen}
        onClose={() => setPhpModalOpen(false)}
      />
    </div>
  );
}
