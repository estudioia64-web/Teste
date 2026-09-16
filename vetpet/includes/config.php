<?php
/**
 * VetPet Clínica Veterinária & Pet Shop
 * Arquivo de Configuração e Constantes Oficiais
 * Local: Irecê - BA
 */

// Informações Institucionais
define('APP_NAME', 'VetPet Clínica Veterinária & Pet Shop');
define('APP_SHORTNAME', 'VetPet');
define('APP_SLOGAN', 'Cuidado completo para o seu pet.');
define('APP_URL', 'https://vetpet.com.br');

// Canais Oficiais de Contato (DISTINTOS)
define('VETPET_WHATSAPP_RAW', '5575998452544');
define('VETPET_WHATSAPP_FMT', '+55 75 99845-2544');
define('VETPET_PHONE_RAW', '5574999154388');
define('VETPET_PHONE_FMT', '+55 74 99915-4388');
define('VETPET_EMAIL', 'vetpetclinica2026@gmail.com');
define('VETPET_INSTAGRAM', '@vetpetclinica_');
define('VETPET_INSTAGRAM_URL', 'https://www.instagram.com/vetpetclinica_/');

// Endereço e Localização Oficial
define('VETPET_STREET', 'Rua Ângelo França Dourado, 94 - Loja');
define('VETPET_NEIGHBORHOOD', 'Centro');
define('VETPET_CITY', 'Irecê');
define('VETPET_STATE', 'BA');
define('VETPET_FULL_ADDRESS', 'Rua Ângelo França Dourado, 94 - Loja - Centro - Irecê/BA');
define('VETPET_HOURS', 'Seg a Sáb - 08h às 18h');

// Links Dinâmicos
define('WHATSAPP_LINK', 'https://wa.me/' . VETPET_WHATSAPP_RAW . '?text=' . urlencode('Olá, gostaria de agendar um atendimento na VetPet Clínica Veterinária!'));
define('PHONE_LINK', 'tel:+' . VETPET_PHONE_RAW);
define('MAPS_URL', 'https://www.google.com/maps/search/?api=1&query=' . urlencode(VETPET_FULL_ADDRESS));

// Avaliações Google
define('GOOGLE_RATING', '5,0');
define('GOOGLE_REVIEW_COUNT', 11);
?>
