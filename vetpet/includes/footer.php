<?php
/**
 * VetPet Clínica Veterinária & Pet Shop
 * Footer Component
 */
require_once __DIR__ . '/config.php';
?>
    <!-- Footer Premium -->
    <footer class="main-footer">
        <div class="container footer-container">
            <div class="footer-grid">
                
                <!-- Coluna 1: Identidade -->
                <div class="footer-col brand-col">
                    <div class="brand-logo footer-logo">
                        <img src="assets/images/logo/vetpet-logo.png" alt="VetPet Clínica Veterinária & Pet Shop" class="brand-footer-img" height="110" style="height: 110px; width: auto; object-fit: contain; margin-bottom: 12px;">
                    </div>
                    <p class="footer-bio">
                        Cuidado completo para o seu pet em Irecê/BA. Atendimento com afeto, respeito e produtos de alta qualidade para a saúde e alegria de cães e gatos.
                    </p>
                    <div class="footer-socials">
                        <a href="<?= VETPET_INSTAGRAM_URL ?>" target="_blank" rel="noopener noreferrer" class="social-link" title="Instagram VetPet">
                            📸 Instagram (<?= VETPET_INSTAGRAM ?>)
                        </a>
                        <a href="<?= WHATSAPP_LINK ?>" target="_blank" rel="noopener noreferrer" class="social-link" title="WhatsApp VetPet">
                            💬 WhatsApp (<?= VETPET_WHATSAPP_FMT ?>)
                        </a>
                    </div>
                </div>

                <!-- Coluna 2: Navegação -->
                <div class="footer-col">
                    <h4 class="footer-heading">Navegação</h4>
                    <ul class="footer-nav">
                        <li><a href="#inicio">Início</a></li>
                        <li><a href="#sobre">A VetPet</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a href="#petshop">Petshop</a></li>
                        <li><a href="#avaliacoes">Avaliações</a></li>
                        <li><a href="#duvidas">Dúvidas</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </div>

                <!-- Coluna 3: Dados Oficiais -->
                <div class="footer-col contacts-col">
                    <h4 class="footer-heading">Informações Oficiais</h4>
                    <ul class="footer-info-list">
                        <li>
                            <span class="icon">📍</span>
                            <a href="<?= htmlspecialchars(MAPS_URL) ?>" target="_blank" rel="noopener noreferrer" style="color: rgba(255,255,255,0.85);"><?= htmlspecialchars(VETPET_FULL_ADDRESS) ?></a>
                        </li>
                        <li>
                            <span class="icon">💬</span>
                            <span>WhatsApp: <a href="<?= htmlspecialchars(WHATSAPP_LINK) ?>" target="_blank" rel="noopener noreferrer" style="color: #4ade80; font-weight: 700;"><?= htmlspecialchars(VETPET_WHATSAPP_FMT) ?></a></span>
                        </li>
                        <li>
                            <span class="icon">📞</span>
                            <span>Telefone: <a href="<?= htmlspecialchars(PHONE_LINK) ?>" style="color: #ffffff; font-weight: 700; text-decoration: underline;"><?= htmlspecialchars(VETPET_PHONE_FMT) ?></a></span>
                        </li>
                        <li>
                            <span class="icon">✉️</span>
                            <span>E-mail: <a href="mailto:<?= htmlspecialchars(VETPET_EMAIL) ?>" style="color: #ffffff; text-decoration: underline;"><?= htmlspecialchars(VETPET_EMAIL) ?></a></span>
                        </li>
                        <li class="hours-tag">
                            <span>🕒 <?= VETPET_HOURS ?></span>
                        </li>
                    </ul>
                </div>

            </div>

            <!-- Rodapé inferior / Direitos e LGPD -->
            <div class="footer-bottom">
                <p>© 2026 VetPet Clínica Veterinária e Petshop. Todos os direitos reservados.</p>
                <div class="footer-links">
                    <a href="pages/privacidade.php">Política de Privacidade</a>
                    <span>|</span>
                    <a href="pages/termos.php">Termos de Uso</a>
                    <span>|</span>
                    <a href="pages/lgpd.php">LGPD</a>
                </div>
            </div>
        </div>
    </footer>

    <!-- Botão Flutuante do WhatsApp -->
    <a href="<?= WHATSAPP_LINK ?>" target="_blank" rel="noopener noreferrer" class="floating-whatsapp" id="floatingWhatsapp" title="Falar no WhatsApp da VetPet">
        <span class="ping-ring"></span>
        <svg viewBox="0 0 24 24" width="32" height="32" fill="#ffffff">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-5.46-4.45-9.91-9.91-9.91zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31c-.82-1.31-1.26-2.83-1.26-4.38 0-4.54 3.7-8.24 8.24-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.54-3.7 8.24-8.24 8.24zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z"/>
        </svg>
    </a>

    <!-- Scripts -->
    <script src="assets/js/main.js"></script>
    <script src="assets/js/navigation.js"></script>
    <script src="assets/js/animations.js"></script>
</body>
</html>
