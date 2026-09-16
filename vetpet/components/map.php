<?php
/**
 * VetPet - Componente Mapa 100% Full Width
 * Requisito Obrigatório: O mapa deve ocupar 100% da largura visual do site,
 * imediatamente antes do CTA final/rodapé.
 */
require_once __DIR__ . '/../includes/config.php';
$embedMapUrl = "https://maps.google.com/maps?q=" . urlencode(VETPET_FULL_ADDRESS) . "&t=&z=16&ie=UTF8&iwloc=&output=embed";
$directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=" . urlencode(VETPET_FULL_ADDRESS);
?>
<section class="full-width-map-section" id="mapa">
    <!-- Barra de Localização para Smartphones (evita obstrução da tela) -->
    <div class="mobile-map-header">
        <div class="mobile-map-header-inner">
            <div class="mobile-map-info">
                <span class="mobile-map-tag">Venha nos Visitar</span>
                <h3 class="mobile-map-title"><?= htmlspecialchars(APP_NAME) ?></h3>
                <p class="mobile-map-address"><?= htmlspecialchars(VETPET_FULL_ADDRESS) ?></p>
                <p class="mobile-map-phone">Telefone: <a href="<?= htmlspecialchars(PHONE_LINK) ?>"><?= htmlspecialchars(VETPET_PHONE_FMT) ?></a></p>
            </div>
            <div class="mobile-map-actions">
                <a href="<?= htmlspecialchars($directionsUrl) ?>" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                    <span>🧭 Como chegar</span>
                </a>
                <a href="<?= htmlspecialchars(MAPS_URL) ?>" target="_blank" rel="noopener noreferrer" class="btn btn-outline-sm">
                    <span>Abrir Maps ↗</span>
                </a>
            </div>
        </div>
    </div>

    <div class="map-wrapper-100">
        <!-- Google Maps Iframe 100% Largura -->
        <iframe
            title="Localização da VetPet no Google Maps"
            src="<?= htmlspecialchars($embedMapUrl) ?>"
            class="full-map-iframe"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        <!-- Card Flutuante de Localização sobre o Mapa (Desktop / Tablets) -->
        <div class="floating-map-card">
            <div class="card-header-flex">
                <div class="card-pin">📍</div>
                <div>
                    <span class="card-badge">Localização em Irecê</span>
                    <h3 class="card-title"><?= htmlspecialchars(APP_NAME) ?></h3>
                </div>
            </div>
            <div class="card-info">
                <p class="card-address"><?= htmlspecialchars(VETPET_FULL_ADDRESS) ?></p>
                <p class="card-phone">Telefone: <a href="<?= htmlspecialchars(PHONE_LINK) ?>" style="color:#ffffff; text-decoration: underline;"><?= htmlspecialchars(VETPET_PHONE_FMT) ?></a></p>
                <div class="card-actions" style="margin-top: 16px; display: flex; gap: 10px; align-items: center;">
                    <a href="<?= htmlspecialchars($directionsUrl) ?>" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="padding: 10px 20px; font-weight: 700;">
                        <span>🧭 Como chegar</span>
                    </a>
                    <a href="<?= htmlspecialchars(MAPS_URL) ?>" target="_blank" rel="noopener noreferrer" class="btn btn-outline-sm" style="padding: 10px 16px; color: #a7f3d0; border-color: rgba(167,243,208,0.4);">
                        <span>Ver no Google Maps ↗</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
