<?php
/**
 * VetPet Clínica Veterinária & Pet Shop
 * Header Component (HTML5 / SEO / TopBar / Nav)
 */
require_once __DIR__ . '/config.php';
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($pageTitle ?? 'VetPet | Clínica Veterinária & Pet Shop em Irecê - BA') ?></title>
    <meta name="description" content="<?= htmlspecialchars($pageDescription ?? 'VetPet Clínica Veterinária & Pet Shop em Irecê/BA. Cuidado completo para o seu pet com consultas, atendimento clínico e produtos selecionados.') ?>">
    <meta name="keywords" content="Clínica veterinária em Irecê, Veterinário em Irecê, Pet Shop em Irecê, Clínica veterinária Irecê BA, vacinas cães gatos Irecê">
    
    <!-- Open Graph / Redes Sociais -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="<?= htmlspecialchars($pageTitle ?? 'VetPet | Clínica Veterinária & Pet Shop') ?>">
    <meta property="og:description" content="<?= htmlspecialchars($pageDescription ?? 'Cuidado completo para o seu pet em Irecê/BA.') ?>">
    <meta property="og:locale" content="pt_BR">
    <meta name="twitter:card" content="summary_large_image">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Caveat:wght@600;700&display=swap" rel="stylesheet">

    <!-- CSS -->
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/responsive.css">
    <link rel="stylesheet" href="assets/css/animations.css">

    <!-- Schema.org LocalBusiness -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": ["VeterinaryCare", "PetStore"],
      "name": "<?= APP_NAME ?>",
      "telephone": "+<?= VETPET_PHONE_RAW ?>",
      "email": "<?= VETPET_EMAIL ?>",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "<?= VETPET_STREET ?>",
        "addressLocality": "<?= VETPET_CITY ?>",
        "addressRegion": "<?= VETPET_STATE ?>",
        "addressCountry": "BR"
      },
      "openingHours": "Mo-Sa 08:00-18:00"
    }
    </script>
</head>
<body>

    <!-- 1. TopBar Informativa -->
    <div class="top-bar" id="topBar">
        <div class="container top-bar-container">
            <div class="top-bar-item">
                <a href="<?= MAPS_URL ?>" target="_blank" rel="noopener noreferrer" class="top-link">
                    <span class="icon">📍</span>
                    <span><?= VETPET_FULL_ADDRESS ?></span>
                </a>
            </div>
            <div class="top-bar-right">
                <a href="<?= WHATSAPP_LINK ?>" target="_blank" rel="noopener noreferrer" class="top-link" style="color: #4ade80;">
                    <span class="icon">💬</span>
                    <span>WhatsApp: <?= htmlspecialchars(VETPET_WHATSAPP_FMT) ?></span>
                </a>
                <a href="<?= PHONE_LINK ?>" class="top-link">
                    <span class="icon">📞</span>
                    <span>Tel: <?= htmlspecialchars(VETPET_PHONE_FMT) ?></span>
                </a>
                <div class="top-bar-item">
                    <span class="icon">🕒</span>
                    <span><?= htmlspecialchars(VETPET_HOURS) ?></span>
                </div>
            </div>
        </div>
    </div>

    <!-- 2. Header / Navbar Principal -->
    <header class="main-header" id="mainHeader">
        <div class="container header-container">
            <!-- Logo Oficial VetPet -->
            <a href="#inicio" class="logo-link" aria-label="VetPet Página Inicial">
                <img src="assets/images/logo/vetpet-logo-horizontal.png" alt="VetPet Clínica Veterinária & Pet Shop" class="brand-logo-img" height="48" style="height: 48px; width: auto; object-fit: contain;">
            </a>

            <!-- Menu Desktop -->
            <nav class="desktop-menu" id="desktopMenu" aria-label="Navegação Principal">
                <a href="#inicio" class="nav-item active">Início</a>
                <a href="#sobre" class="nav-item">A VetPet</a>
                <a href="#servicos" class="nav-item">Serviços</a>
                <a href="#petshop" class="nav-item">Petshop</a>
                <a href="#avaliacoes" class="nav-item">Avaliações</a>
                <a href="#duvidas" class="nav-item">Dúvidas</a>
                <a href="#contato" class="nav-item">Contato</a>
            </nav>

            <!-- Ações -->
            <div class="header-cta">
                <a href="<?= WHATSAPP_LINK ?>" target="_blank" rel="noopener noreferrer" class="btn btn-schedule">
                    <span class="btn-icon">📅</span>
                    <span>Agendar atendimento</span>
                </a>

                <!-- Hamburger Trigger Mobile -->
                <button class="hamburger-btn" id="mobileMenuToggle" aria-label="Menu Mobile" aria-expanded="false">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>

        <!-- Menu Mobile Drawer -->
        <div class="mobile-drawer" id="mobileDrawer">
            <nav class="mobile-nav">
                <a href="#inicio" class="mobile-nav-link">Início</a>
                <a href="#sobre" class="mobile-nav-link">A VetPet</a>
                <a href="#servicos" class="mobile-nav-link">Serviços</a>
                <a href="#petshop" class="mobile-nav-link">Petshop</a>
                <a href="#avaliacoes" class="mobile-nav-link">Avaliações</a>
                <a href="#duvidas" class="mobile-nav-link">Dúvidas</a>
                <a href="#contato" class="mobile-nav-link">Contato</a>
            </nav>
            <div class="mobile-actions">
                <a href="<?= WHATSAPP_LINK ?>" target="_blank" class="btn btn-schedule w-100">
                    📅 Agendar atendimento
                </a>
                <a href="<?= PHONE_LINK ?>" class="btn btn-secondary w-100 mt-2">
                    📞 Ligar: <?= VETPET_PHONE_FMT ?>
                </a>
            </div>
        </div>
    </header>
