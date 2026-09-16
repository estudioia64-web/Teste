<?php
/**
 * VetPet - Componente CTA Final
 */
require_once __DIR__ . '/../includes/config.php';
?>
<section class="final-cta-section" id="contato">
    <div class="container">
        <div class="cta-bar-layout">
            
            <div class="cta-brand-tag">
                <span class="cta-heart-icon">🐾</span>
                <div class="cta-texts">
                    <p class="cta-title">Seu pet merece cuidado.</p>
                    <p class="cta-sub">Vamos conversar?</p>
                </div>
            </div>

            <div class="cta-contacts-list">
                <a href="<?= htmlspecialchars(WHATSAPP_LINK) ?>" target="_blank" rel="noopener noreferrer" class="contact-pill">
                    <span class="icon">💬</span>
                    <div class="info">
                        <small>WhatsApp</small>
                        <strong><?= htmlspecialchars(VETPET_WHATSAPP_FMT) ?></strong>
                    </div>
                </a>

                <a href="<?= htmlspecialchars(PHONE_LINK) ?>" class="contact-pill">
                    <span class="icon">📞</span>
                    <div class="info">
                        <small>Telefone</small>
                        <strong><?= htmlspecialchars(VETPET_PHONE_FMT) ?></strong>
                    </div>
                </a>

                <a href="mailto:<?= htmlspecialchars(VETPET_EMAIL) ?>" class="contact-pill">
                    <span class="icon">✉️</span>
                    <div class="info">
                        <small>E-mail</small>
                        <strong><?= htmlspecialchars(VETPET_EMAIL) ?></strong>
                    </div>
                </a>
            </div>

            <div class="cta-action-btn">
                <a href="<?= WHATSAPP_LINK ?>" target="_blank" rel="noopener noreferrer" class="btn btn-green-pulse">
                    <span>Agendar atendimento</span>
                    <span class="arrow">→</span>
                </a>
            </div>

        </div>
    </div>
</section>
