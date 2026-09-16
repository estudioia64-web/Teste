<?php
/**
 * VetPet - Componente Serviços
 */
require_once __DIR__ . '/../includes/config.php';

// Array modular de serviços para fácil manutenção futura
$services = [
    [
        'title' => 'Consultas veterinárias',
        'desc' => 'Avaliação e acompanhamento de saúde do seu pet.',
        'image' => 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=800&q=80',
        'icon' => '🩺',
    ],
    [
        'title' => 'Cuidados preventivos',
        'desc' => 'Prevenção e acompanhamento para manter seu animal sempre saudável.',
        'image' => 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80',
        'icon' => '🛡️',
    ],
    [
        'title' => 'Atendimento clínico',
        'desc' => 'Avaliação de sinais, sintomas e necessidades do animal.',
        'image' => 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80',
        'icon' => '🏥',
    ],
    [
        'title' => 'Petshop',
        'desc' => 'Produtos para alimentação, higiene e cuidados.',
        'image' => 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80',
        'icon' => '🛍️',
    ],
];
?>
<section class="services-section" id="servicos">
    <div class="container">
        <div class="services-layout">
            
            <!-- Coluna da Esquerda: Introdução -->
            <div class="services-intro">
                <span class="section-tag">Nossos serviços</span>
                <h2 class="section-heading">Tudo o que seu pet precisa, em um só lugar.</h2>
                <p class="section-description">
                    Da consulta ao cuidado preventivo, passando pelo atendimento clínico e tudo para o dia a dia no petshop. Aqui, seu pet recebe um cuidado completo.
                </p>
                <div class="intro-cta">
                    <a href="<?= WHATSAPP_LINK ?>" target="_blank" rel="noopener noreferrer" class="btn btn-dark">
                        <span>Conheça todos os serviços</span>
                        <span class="arrow">→</span>
                    </a>
                </div>
            </div>

            <!-- Coluna da Direita: 4 Cards -->
            <div class="services-grid">
                <?php foreach ($services as $service): ?>
                    <div class="service-card">
                        <div class="service-card-media">
                            <img src="<?= htmlspecialchars($service['image']) ?>" alt="<?= htmlspecialchars($service['title']) ?>" loading="lazy">
                        </div>
                        <div class="service-card-body">
                            <div class="service-icon-box"><?= $service['icon'] ?></div>
                            <h3 class="service-title"><?= htmlspecialchars($service['title']) ?></h3>
                            <p class="service-desc"><?= htmlspecialchars($service['desc']) ?></p>
                            <a href="<?= WHATSAPP_LINK ?>" target="_blank" rel="noopener noreferrer" class="service-link">
                                <span>Agendar atendimento</span>
                                <span>→</span>
                            </a>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>

        </div>
    </div>
</section>
