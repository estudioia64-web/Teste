<?php
require_once __DIR__ . '/../includes/config.php';
$pageTitle = 'Termos de Uso | VetPet Clínica Veterinária';
include __DIR__ . '/../includes/header.php';
?>
<main style="padding: 120px 20px 80px; max-width: 800px; margin: 0 auto; color: #1c2e24; line-height: 1.7;">
    <h1 style="font-family: var(--font-heading); font-size: 36px; margin-bottom: 24px; color: var(--color-primary-dark);">Termos de Uso</h1>
    <p>O website da <strong><?= APP_NAME ?></strong> destina-se a apresentar os serviços clínicos veterinários e produtos disponíveis na loja física em Irecê/BA.</p>
    
    <h2 style="font-size: 22px; margin: 28px 0 12px; color: var(--color-primary);">1. Informações Institucionais</h2>
    <p>Os conteúdos e artigos deste site não substituem o diagnóstico ou prescrição emitidos presencialmente por médico veterinário habilitado.</p>

    <div style="margin-top: 40px;">
        <a href="../index.php" class="btn btn-primary">← Voltar para o início</a>
    </div>
</main>
<?php include __DIR__ . '/../includes/footer.php'; ?>
