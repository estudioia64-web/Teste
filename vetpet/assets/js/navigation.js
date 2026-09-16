/**
 * VetPet Clínica Veterinária & Pet Shop
 * Gerenciador de Navegação e Menu Mobile
 */

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    const mainHeader = document.getElementById('mainHeader');

    // Toggle menu mobile
    if (mobileMenuToggle && mobileDrawer) {
        mobileMenuToggle.addEventListener('click', () => {
            const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
            mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
            mobileDrawer.classList.toggle('active');
        });

        // Fechar ao clicar em um link
        mobileLinks.forEach((link) => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Scroll Spy e Header Shadow
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            mainHeader.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.08)';
        } else {
            mainHeader.style.boxShadow = 'none';
        }
    });
});
