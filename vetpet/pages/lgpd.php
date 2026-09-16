<?php
require_once __DIR__ . '/../includes/config.php';
$pageTitle = 'LGPD | VetPet Clínica Veterinária';
include __DIR__ . '/../includes/header.php';
?>
<main style="padding: 120px 20px 80px; max-width: 800px; margin: 0 auto; color: #1c2e24; line-height: 1.7;">
    <h1 style="font-family: var(--font-heading); font-size: 36px; margin-bottom: 24px; color: var(--color-primary-dark);">Conformidade LGPD</h1>
    <p>A <strong><?= APP_NAME ?></strong> adota as medidas de segurança técnicas e administrativas aptas a proteger os dados pessoais contra acessos não autorizados, em estrita consonância com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).</p>
    
    <h2 style="font-size: 22px; margin: 28px 0 12px; color: var(--color-primary);">Canal de Atendimento ao Titular</h2>
    <p>Para exercer seus direitos de confirmação, retificação ou exclusão de dados, entre em contato através do e-mail <strong><?= VETPET_EMAIL ?></strong> ou pelo WhatsApp <strong><?= VETPET_WHATSAPP_FMT ?></strong>.</p>

    <div style="margin-top: 40px;">
        <a href="../index.php" class="btn btn-primary">← Voltar para o início</a>
    </div>
</main>
<?php include __DIR__ . '/../includes/footer.php'; ?>
