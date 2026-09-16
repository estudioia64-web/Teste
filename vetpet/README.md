# VetPet - Clínica Veterinária & Pet Shop

Website institucional de alta conversão (CRO), desenvolvido para **VetPet Clínica Veterinária & Pet Shop** em **Irecê - BA**.

## 📁 Estrutura do Projeto

```
/vetpet
├── index.php                 # Arquivo mestre de carregamento
├── includes/
│   ├── config.php            # Centralização de dados oficiais, SEO e links
│   ├── header.php            # TopBar, Navbar responsiva, Open Graph e Schema.org
│   └── footer.php            # Rodapé institucional, links e créditos
├── components/
│   ├── hero.php              # Dobra principal com cães/gatos e selo Google 5.0
│   ├── differentials.php     # Faixa de 4 diferenciais confirmados
│   ├── services.php          # Vitrine de serviços veterinários
│   ├── petshop.php           # Categorias e produtos do Pet Shop
│   ├── testimonials.php      # Avaliações reais verificadas do Google
│   ├── instagram.php         # Feed do Instagram oficial @vetpetclinica_
│   ├── location.php          # Seção Estamos em Irecê com dados e foto da clínica
│   ├── map.php               # Mapa Google ocupando 100% da largura visual
│   └── cta.php               # Barra de contato final (WhatsApp, Telefone, E-mail)
├── pages/
│   ├── privacidade.php       # Política de Privacidade
│   ├── termos.php            # Termos de Uso
│   └── lgpd.php              # Declaração LGPD
└── assets/
    ├── css/
    │   ├── style.css         # Estilos globais e paleta verde oficial
    │   ├── responsive.css    # Regras responsivas Mobile-first
    │   └── animations.css    # Animações e micro-interações
    └── js/
        ├── main.js           # Funções gerais
        ├── navigation.js     # Menu mobile e scroll spy
        └── animations.js     # IntersectionObserver de revelação
```

## 🚀 Como Executar no VS Code

1. Abra a pasta `/vetpet` no **Visual Studio Code**.
2. Abra o terminal integrado (`Ctrl + \`` ou `Cmd + \``).
3. Execute o servidor embutido do PHP:
   ```bash
   php -S localhost:8000
   ```
4. Acesse no navegador: `http://localhost:8000`

---
© 2026 VetPet Clínica Veterinária e Petshop. Todos os direitos reservados.
