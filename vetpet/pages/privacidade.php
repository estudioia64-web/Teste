<?php
require_once __DIR__ . '/../includes/config.php';
$pageTitle = 'Política de Privacidade | VetPet Clínica Veterinária';
include __DIR__ . '/../includes/header.php';
?>
<main style="padding: 120px 20px 80px; max-width: 800px; margin: 0 auto; color: #1c2e24; line-height: 1.7;">
    <h1 style="font-family: var(--font-heading); font-size: 36px; margin-bottom: 24px; color: var(--color-primary-dark);">Política de Privacidade</h1>
    <p>A <strong><?= APP_NAME ?></strong>, sediada em <?= VETPET_FULL_ADDRESS ?>, valoriza a segurança e confidencialidade dos dados dos tutores e pacientes veterinários.</p>
    
    <h2 style="font-size: 22px; margin: 28px 0 12px; color: var(--color-primary);">1. Dados Coletados</h2>
    <p>Coletamos nome, telefone/WhatsApp, e-mail e dados do animal exclusivamente para viabilizar consultas, acompanhamentos clínicos e orçamentos do pet shop.</p>
    
    <h2 style="font-size: 22px; margin: 28px 0 12px; color: var(--color-primary);">2. Uso das Informações</h2>
    <p>Os dados nunca são comercializados com terceiros. O contato é realizado unicamente para fins assistenciais e informativos diretamente com a clínica.</p>

    <div style="margin-top: 40px;">
        <a href="../index.php" class="btn btn-primary">← Voltar para o início</a>
    </div>
</main>
<?php include __DIR__ . '/../includes/footer.php'; ?>
