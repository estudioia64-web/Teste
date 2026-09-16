<?php
/**
 * VetPet - Componente Localização (Estamos em Irecê)
 */
require_once __DIR__ . '/../includes/config.php';
$directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=" . urlencode(VETPET_FULL_ADDRESS);
?>
<section class="location-section" id="localizacao">
    <div class="container">
        
        <div class="location-banner">
            <div class="location-text-col">
                <span class="location-pill">📍 Localização</span>
                <h2 class="location-title">Estamos em Irecê</h2>
                
                <div class="location-details">
                    <p class="address-main"><strong><?= htmlspecialchars(VETPET_STREET) ?></strong></p>
                    <p class="address-sub"><?= htmlspecialchars(VETPET_NEIGHBORHOOD) ?> – <?= htmlspecialchars(VETPET_CITY) ?>/<?= htmlspecialchars(VETPET_STATE) ?></p>
                    <p class="hours-sub">🕒 Atendimento: <?= htmlspecialchars(VETPET_HOURS) ?></p>
                </div>

                <div class="location-buttons">
                    <a href="<?= htmlspecialchars($directionsUrl) ?>" target="_blank" rel="noopener noreferrer" class="btn btn-dark">
                        <span>🧭 Como chegar</span>
                        <span class="arrow">→</span>
                    </a>
                    <a href="<?= htmlspecialchars(PHONE_LINK) ?>" class="btn btn-outline-dark">
                        <span>📞 <?= htmlspecialchars(VETPET_PHONE_FMT) ?></span>
                    </a>
                </div>
            </div>

            <div class="location-photo-col">
                <img
                    src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=800&q=80"
                    alt="Fachada e estrutura da VetPet Clínica Veterinária em Irecê"
                    class="location-facade-img"
                    loading="lazy"
                >
            </div>
        </div>

    </div>
</section>
