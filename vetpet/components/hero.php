<?php
/**
 * VetPet - Componente Hero
 */
require_once __DIR__ . '/../includes/config.php';
?>
<section class="hero-section" id="inicio">
    <div class="hero-background-pattern"></div>
    <div class="container hero-container">
        
        <!-- Conteúdo do Hero -->
        <div class="hero-content">
            <div class="hero-badge">
                <span class="badge-dot"></span>
                <span>CLÍNICA VETERINÁRIA E PET SHOP</span>
            </div>

            <h1 class="hero-title">
                Cuidado completo <br>
                <span class="text-highlight">para o seu pet.</span>
            </h1>

            <p class="hero-subtitle">
                Na VetPet, seu pet recebe atendimento veterinário completo e todo o carinho que ele merece. Aqui, saúde, bem-estar e qualidade de vida caminham juntos.
            </p>

            <div class="hero-ctas">
                <a href="<?= WHATSAPP_LINK ?>" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                    <span class="btn-icon">📅</span>
                    <span>Agendar atendimento</span>
                </a>
                <a href="<?= WHATSAPP_LINK ?>" target="_blank" rel="noopener noreferrer" class="btn btn-outline-white">
                    <span class="btn-icon">💬</span>
                    <span>Falar pelo WhatsApp</span>
                </a>
            </div>

            <div class="phone-notice">
                <span>📞 Atendimento telefônico direto: <a href="<?= htmlspecialchars(PHONE_LINK) ?>" style="color: #ffffff; text-decoration: underline; font-weight: 700;"><?= htmlspecialchars(VETPET_PHONE_FMT) ?></a></span>
            </div>

            <!-- Prova Social Google no Hero -->
            <div class="google-rating-card">
                <div class="google-badge-pill">
                    <span class="g-letter">G</span>
                    <span class="score"><?= GOOGLE_RATING ?> no Google</span>
                    <span class="stars">⭐⭐⭐⭐⭐</span>
                    <span class="reviews-count"><?= GOOGLE_REVIEW_COUNT ?> avaliações</span>
                </div>
            </div>
        </div>

        <!-- Mídia do Hero -->
        <div class="hero-media">
            <div class="hero-image-wrapper">
                <div class="handwritten-sticker">
                    <span>Aqui tem amor em forma de cuidado!</span>
                    <span class="paw">🐾</span>
                </div>
                <img
                    src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1000&q=80"
                    alt="Cão e Gato saudáveis - VetPet Clínica Veterinária e Pet Shop"
                    class="hero-img"
                    loading="eager"
                >
            </div>
        </div>

    </div>
</section>
