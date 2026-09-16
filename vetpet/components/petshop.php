<?php
/**
 * VetPet - Componente Petshop
 */
require_once __DIR__ . '/../includes/config.php';

$petshopCategories = [
    ['name' => 'Alimentação', 'icon' => '🥣', 'desc' => 'Rações super premium, premium e dietas especiais.'],
    ['name' => 'Higiene', 'icon' => '✨', 'desc' => 'Shampoos, colônias, lenços umedecidos e escovas.'],
    ['name' => 'Petiscos', 'icon' => '🦴', 'desc' => 'Snacks saborosos, bifinhos e petiscos funcionais.'],
    ['name' => 'Brinquedos', 'icon' => '🎾', 'desc' => 'Bolinhas, cordas, mordedores e pelúcias resistentes.'],
    ['name' => 'Cuidados', 'icon' => '💊', 'desc' => 'Antipulgas, carrapaticidas e suplementos vitamínicos.'],
    ['name' => 'Acessórios', 'icon' => '🎒', 'desc' => 'Coleiras, guias, caminhas e caixas de transporte.'],
];
?>
<section class="petshop-section" id="petshop">
    <div class="container">
        <div class="petshop-card-wrapper">
            <div class="petshop-grid">
                
                <!-- Coluna de Texto -->
                <div class="petshop-info">
                    <span class="badge-pill-dark">Petshop</span>
                    <h2 class="petshop-heading">Produtos para <br><span class="text-green-light">o seu pet</span></h2>
                    <p class="petshop-desc">
                        Alimentação, higiene, petiscos, brinquedos e muito mais. Tudo com qualidade e as melhores marcas.
                    </p>
                    <a href="<?= WHATSAPP_LINK ?>" target="_blank" rel="noopener noreferrer" class="btn btn-green-solid">
                        <span>Ver produtos</span>
                        <span class="arrow">→</span>
                    </a>
                </div>

                <!-- 6 Categorias Circulares -->
                <div class="petshop-categories-grid">
                    <?php foreach ($petshopCategories as $cat): ?>
                        <div class="category-tile" title="<?= htmlspecialchars($cat['desc']) ?>">
                            <div class="tile-icon-circle"><?= $cat['icon'] ?></div>
                            <span class="tile-label"><?= htmlspecialchars($cat['name']) ?></span>
                        </div>
                    <?php endforeach; ?>
                </div>

                <!-- Imagem com Badge -->
                <div class="petshop-photo-col">
                    <div class="photo-badge">Mais conforto e felicidade! 🐾</div>
                    <img
                        src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=600&q=80"
                        alt="Pet feliz com produtos da VetPet"
                        class="petshop-img"
                        loading="lazy"
                    >
                </div>

            </div>
        </div>
    </div>
</section>
