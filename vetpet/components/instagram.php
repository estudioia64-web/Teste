<?php
/**
 * VetPet - Componente Instagram
 */
require_once __DIR__ . '/../includes/config.php';
?>
<section class="instagram-section" id="instagram">
    <div class="container">
        
        <div class="instagram-header">
            <div class="instagram-title-area">
                <span class="instagram-badge">📸 Acompanhe a VetPet</span>
                <p class="instagram-desc">
                    Nosso dia a dia, dicas, cuidados e muito amor pelos animais. Siga nosso Instagram e fique por dentro de tudo!
                </p>
            </div>
            <div class="instagram-cta-area">
                <a href="<?= VETPET_INSTAGRAM_URL ?>" target="_blank" rel="noopener noreferrer" class="btn btn-green-solid">
                    <span>Ver Instagram</span>
                </a>
                <span class="instagram-handle"><?= VETPET_INSTAGRAM ?></span>
            </div>
        </div>

        <div class="instagram-feed-grid">
            <a href="<?= VETPET_INSTAGRAM_URL ?>" target="_blank" class="insta-post">
                <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=400&q=80" alt="Pet na VetPet" loading="lazy">
            </a>
            <a href="<?= VETPET_INSTAGRAM_URL ?>" target="_blank" class="insta-post">
                <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400&q=80" alt="Gato na VetPet" loading="lazy">
            </a>
            <a href="<?= VETPET_INSTAGRAM_URL ?>" target="_blank" class="insta-post">
                <img src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=400&q=80" alt="Estrutura VetPet" loading="lazy">
            </a>
            <a href="<?= VETPET_INSTAGRAM_URL ?>" target="_blank" class="insta-post">
                <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=400&q=80" alt="Veterinária e cãozinho" loading="lazy">
            </a>
            <a href="<?= VETPET_INSTAGRAM_URL ?>" target="_blank" class="insta-post insta-promo-tile">
                <div class="insta-tile-content">
                    <span class="icon">📸</span>
                    <strong class="title">Mais conteúdo no nosso Instagram</strong>
                    <span class="handle"><?= VETPET_INSTAGRAM ?></span>
                </div>
            </a>
        </div>

    </div>
</section>
