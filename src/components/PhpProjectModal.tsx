import React, { useState } from 'react';
import { X, Code2, Folder, FileCode, Copy, Check, Terminal, Server, ExternalLink } from 'lucide-react';

interface PhpProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PhpProjectModal: React.FC<PhpProjectModalProps> = ({ isOpen, onClose }) => {
  const [copiedFile, setCopiedFile] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<string>('config.php');

  if (!isOpen) return null;

  const fileSnippets: Record<string, { path: string; desc: string; code: string }> = {
    'config.php': {
      path: '/vetpet/includes/config.php',
      desc: 'Centraliza todos os dados oficiais, canais de atendimento e SEO',
      code: `<?php
/**
 * VetPet Clínica Veterinária & Pet Shop
 * Configurações Gerais do Projeto
 */

define('APP_NAME', 'VetPet Clínica Veterinária & Pet Shop');
define('APP_SHORTNAME', 'VetPet');
define('APP_URL', 'https://vetpet.com.br');

// Dados Oficiais
define('VETPET_WHATSAPP_RAW', '5575998452544');
define('VETPET_WHATSAPP_FMT', '+55 75 99845-2544');
define('VETPET_PHONE_RAW', '5574999154388');
define('VETPET_PHONE_FMT', '+55 74 99915-4388');
define('VETPET_EMAIL', 'vetpetclinica2026@gmail.com');
define('VETPET_INSTAGRAM', '@vetpetclinica_');
define('VETPET_INSTAGRAM_URL', 'https://www.instagram.com/vetpetclinica_/');
define('VETPET_ADDRESS', 'Rua Ângelo França Dourado, 94 - Loja - Centro - Irecê/BA');
define('VETPET_HOURS', 'Seg a Sáb - 08h às 18h');

// Links
define('WHATSAPP_LINK', 'https://wa.me/' . VETPET_WHATSAPP_RAW . '?text=' . urlencode('Olá, gostaria de agendar um atendimento na VetPet Clínica Veterinária!'));
define('PHONE_LINK', 'tel:' . VETPET_PHONE_RAW);
define('MAPS_URL', 'https://www.google.com/maps/search/?api=1&query=' . urlencode(VETPET_ADDRESS));
?>`,
    },
    'index.php': {
      path: '/vetpet/index.php',
      desc: 'Arquivo mestre carregando a arquitetura modular e componentes',
      code: `<?php
/**
 * VetPet Clínica Veterinária & Pet Shop
 * Página Principal
 */
require_once __DIR__ . '/includes/config.php';

// Metadados SEO da Página
$pageTitle = 'VetPet | Clínica Veterinária & Pet Shop em Irecê - BA';
$pageDescription = 'Cuidado completo para o seu pet com consultas, atendimento clínico, cuidados preventivos e pet shop em Irecê/BA.';

include __DIR__ . '/includes/header.php';
include __DIR__ . '/components/hero.php';
include __DIR__ . '/components/differentials.php';
include __DIR__ . '/components/services.php';
include __DIR__ . '/components/petshop.php';
include __DIR__ . '/components/testimonials.php';
include __DIR__ . '/components/instagram.php';
include __DIR__ . '/components/location.php';
include __DIR__ . '/components/map.php';
include __DIR__ . '/components/cta.php';
include __DIR__ . '/includes/footer.php';
?>`,
    },
    'header.php': {
      path: '/vetpet/includes/header.php',
      desc: 'TopBar, Navbar responsiva, Metatags SEO e Schema.org',
      code: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($pageTitle ?? APP_NAME) ?></title>
    <meta name="description" content="<?= htmlspecialchars($pageDescription ?? '') ?>">
    
    <!-- Open Graph -->
    <meta property="og:title" content="<?= htmlspecialchars($pageTitle ?? APP_NAME) ?>">
    <meta property="og:description" content="<?= htmlspecialchars($pageDescription ?? '') ?>">
    <meta property="og:type" content="website">

    <!-- CSS Files -->
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/responsive.css">
    <link rel="stylesheet" href="assets/css/animations.css">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- TopBar Oficial -->
    <div class="top-bar">
        <div class="container top-bar-content">
            <div class="address-item">📍 <?= VETPET_ADDRESS ?></div>
            <div class="contact-items">
                <a href="<?= PHONE_LINK ?>">📞 <?= VETPET_PHONE_FMT ?></a>
                <span>🕒 <?= VETPET_HOURS ?></span>
            </div>
        </div>
    </div>

    <!-- Header Principal -->
    <header class="main-header" id="mainHeader">
        <div class="container header-container">
            <a href="#inicio" class="brand-logo">
                <img src="assets/images/logo/vetpet-logo-horizontal.png" alt="VetPet Logo" width="160" height="48">
            </a>
            <nav class="desktop-nav" id="desktopNav">
                <a href="#inicio" class="active">Início</a>
                <a href="#sobre">A VetPet</a>
                <a href="#servicos">Serviços</a>
                <a href="#petshop">Petshop</a>
                <a href="#avaliacoes">Avaliações</a>
                <a href="#duvidas">Dúvidas</a>
                <a href="#contato">Contato</a>
            </nav>
            <div class="header-actions">
                <a href="<?= WHATSAPP_LINK ?>" target="_blank" class="btn btn-primary">
                    📅 Agendar atendimento
                </a>
            </div>
        </div>
    </header>`,
    },
    'hero.php': {
      path: '/vetpet/components/hero.php',
      desc: 'Dobra principal com fotografia cães e gatos, CTAs e selo Google',
      code: `<section class="hero-section" id="inicio">
    <div class="container hero-container">
        <div class="hero-content">
            <div class="hero-badge">
                <span class="badge-dot"></span> CLÍNICA VETERINÁRIA E PET SHOP
            </div>
            <h1 class="hero-title">
                Cuidado completo <br><span class="highlight">para o seu pet.</span>
            </h1>
            <p class="hero-subtitle">
                Na VetPet, seu pet recebe atendimento veterinário completo e todo o carinho que ele merece. Aqui, saúde, bem-estar e qualidade de vida caminham juntos.
            </p>
            <div class="hero-ctas">
                <a href="<?= WHATSAPP_LINK ?>" target="_blank" class="btn btn-primary">
                    📅 Agendar atendimento
                </a>
                <a href="<?= WHATSAPP_LINK ?>" target="_blank" class="btn btn-whatsapp">
                    💬 Falar pelo WhatsApp
                </a>
            </div>
            <div class="phone-callout">
                <span>Ou ligue para o telefone fixo: <strong><?= VETPET_PHONE_FMT ?></strong></span>
            </div>
            <div class="google-badge">
                <span class="g-icon">G</span>
                <span class="rating">5,0 no Google</span>
                <span class="stars">⭐⭐⭐⭐⭐</span>
                <span class="count">11 avaliações</span>
            </div>
        </div>
        <div class="hero-media">
            <div class="badge-handwritten">Aqui tem amor em forma de cuidado! 🐾</div>
            <img src="assets/images/hero/hero-pet.jpg" alt="Cão e Gato atendidos na VetPet" class="hero-image">
        </div>
    </div>
</section>`,
    },
    'differentials.php': {
      path: '/vetpet/components/differentials.php',
      desc: 'Faixa de 4 diferenciais confirmados pelo cliente',
      code: `<section class="differentials-bar">
    <div class="container differentials-grid">
        <div class="diff-card">
            <div class="diff-icon">🩺</div>
            <p>Atendimento veterinário completo</p>
        </div>
        <div class="diff-card">
            <div class="diff-icon">🐾</div>
            <p>Cuidado individualizado para cada pet</p>
        </div>
        <div class="diff-card">
            <div class="diff-icon">🐱</div>
            <p>Cães e gatos são bem-vindos</p>
        </div>
        <div class="diff-card">
            <div class="diff-icon">🎁</div>
            <p>Petshop com produtos de qualidade</p>
        </div>
    </div>
</section>`,
    },
  };

  const handleCopy = (filename: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedFile(filename);
    setTimeout(() => setCopiedFile(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 animate-in fade-in duration-300">
      <div className="bg-[#0b1f14] text-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-emerald-500/30 flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-300">
        
        {/* Header */}
        <div className="bg-[#06170d] p-5 border-b border-emerald-900/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-['Outfit',sans-serif] font-bold text-lg text-white">
                Projeto PHP Nativo para VS Code
              </h3>
              <p className="text-xs text-emerald-300">
                Arquitetura modular em PHP / HTML5 / CSS3 / JavaScript para agência e clientes
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-emerald-300 hover:text-white p-1 rounded-lg transition-colors btn-interactive"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          
          {/* Left: Files List */}
          <div className="w-full md:w-64 bg-[#081b10] border-r border-emerald-900/50 p-4 overflow-y-auto space-y-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-2">
                Arquitetura no Repositório
              </p>
              <div className="space-y-1">
                {Object.keys(fileSnippets).map((key) => {
                  const isSelected = selectedFile === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedFile(key)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center gap-2 transition-colors ${
                        isSelected
                          ? 'bg-emerald-600 text-white font-bold'
                          : 'text-emerald-200/80 hover:bg-emerald-900/50 hover:text-white'
                      }`}
                    >
                      <FileCode className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{key}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* How to run locally box */}
            <div className="p-3 bg-emerald-950/80 rounded-xl border border-emerald-700/40 text-xs space-y-2">
              <div className="flex items-center gap-1.5 text-emerald-300 font-bold">
                <Terminal className="w-4 h-4" />
                <span>Executar no VS Code:</span>
              </div>
              <code className="block bg-black/60 p-2 rounded text-[11px] text-emerald-400 font-mono">
                php -S localhost:8000 -t vetpet
              </code>
              <p className="text-[10px] text-emerald-200/70">
                Ou abra a pasta <code>/vetpet</code> no XAMPP / Wamp / Apache cPanel.
              </p>
            </div>
          </div>

          {/* Right: Code Viewer */}
          <div className="flex-1 flex flex-col bg-[#05140b] overflow-hidden">
            {/* File Path & Copy */}
            <div className="px-5 py-3 bg-[#081a0e] border-b border-emerald-900/60 flex items-center justify-between text-xs">
              <span className="font-mono text-emerald-300">
                {fileSnippets[selectedFile].path}
              </span>
              <button
                onClick={() =>
                  handleCopy(selectedFile, fileSnippets[selectedFile].code)
                }
                className="flex items-center gap-1.5 bg-emerald-700/60 hover:bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
              >
                {copiedFile === selectedFile ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar código</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Block */}
            <div className="flex-1 p-5 overflow-auto font-mono text-xs text-emerald-100/90 leading-relaxed bg-[#030e07]">
              <pre>
                <code>{fileSnippets[selectedFile].code}</code>
              </pre>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#06170d] border-t border-emerald-900/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-emerald-300">
          <span>
            Todos os arquivos estão salvos na pasta <strong>/vetpet</strong> do seu workspace.
          </span>
          <button
            onClick={onClose}
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-2 rounded-xl"
          >
            Fechar visualizador
          </button>
        </div>

      </div>
    </div>
  );
};
