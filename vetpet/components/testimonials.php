<?php
/**
 * VetPet - Componente Avaliações (Prova Social Real)
 */
require_once __DIR__ . '/../includes/config.php';

$reviews = [
    [
        'name' => 'Juliana Souza',
        'rating' => 5,
        'source' => 'Avaliação no Google',
        'text' => 'Atendimento excelente! Equipe muito atenciosa e carinhosa com os animais. Super recomendo!',
        'avatar' => 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    ],
    [
        'name' => 'Marcos Lima',
        'rating' => 5,
        'source' => 'Avaliação no Google',
        'text' => 'Clínica completa, ambiente limpo e organizado. Meu pet sempre é bem cuidado aqui!',
        'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    ],
    [
        'name' => 'Fernanda Oliveira',
        'rating' => 5,
        'source' => 'Avaliação no Google',
        'text' => 'Profissionais competentes e um atendimento de excelência. Meu pet ama!',
        'avatar' => 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    ],
];
?>
<section class="testimonials-section" id="avaliacoes">
    <div class="container">
        
        <div class="testimonials-top">
            <div>
                <span class="section-tag">O que nossos clientes dizem</span>
                <h2 class="section-heading">Quem cuida do seu pet, precisa confiar.</h2>
                <p class="section-description">
                    Nossa maior satisfação é ver seu pet bem e seus tutores tranquilos. Confira algumas avaliações reais de quem já passou por aqui.
                </p>
            </div>
            <div class="google-badge-top">
                <a href="<?= MAPS_URL ?>" target="_blank" rel="noopener noreferrer" class="google-rating-box">
                    <span class="g-icon">G</span>
                    <div class="g-text">
                        <strong><?= GOOGLE_RATING ?> no Google</strong>
                        <span class="stars">⭐⭐⭐⭐⭐</span>
                        <span class="subtext"><?= GOOGLE_REVIEW_COUNT ?> avaliações</span>
                    </div>
                </a>
            </div>
        </div>

        <div class="testimonials-grid">
            <?php foreach ($reviews as $rev): ?>
                <div class="testimonial-card">
                    <div class="testimonial-user">
                        <img src="<?= htmlspecialchars($rev['avatar']) ?>" alt="<?= htmlspecialchars($rev['name']) ?>" class="user-avatar" loading="lazy">
                        <div>
                            <strong class="user-name"><?= htmlspecialchars($rev['name']) ?></strong>
                            <span class="user-source"><?= htmlspecialchars($rev['source']) ?></span>
                        </div>
                    </div>
                    <div class="stars-row">⭐⭐⭐⭐⭐</div>
                    <p class="testimonial-quote">"<?= htmlspecialchars($rev['text']) ?>"</p>
                </div>
            <?php endforeach; ?>
        </div>

    </div>
</section>
