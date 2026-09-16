<?php
/**
 * VetPet - Clínica Veterinária & Pet Shop
 * Página Principal (Index)
 * Desenvolvido para uso em VS Code / Servidor PHP
 */
require_once __DIR__ . '/includes/config.php';

// Parâmetros SEO
$pageTitle = 'VetPet | Clínica Veterinária & Pet Shop em Irecê - BA';
$pageDescription = 'Cuidado completo para o seu pet com consultas, atendimento clínico, cuidados preventivos e pet shop em Irecê/BA. Fale conosco no WhatsApp!';

// Header
include __DIR__ . '/includes/header.php';

// Dobras e Componentes Modulares
include __DIR__ . '/components/hero.php';
include __DIR__ . '/components/differentials.php';
include __DIR__ . '/components/services.php';
include __DIR__ . '/components/petshop.php';
include __DIR__ . '/components/testimonials.php';
include __DIR__ . '/components/instagram.php';
include __DIR__ . '/components/location.php';
include __DIR__ . '/components/map.php';
include __DIR__ . '/components/cta.php';

// Footer
include __DIR__ . '/includes/footer.php';
?>
