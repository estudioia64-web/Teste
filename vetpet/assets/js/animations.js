/**
 * VetPet Clínica Veterinária & Pet Shop
 * Observer de Revelação ao Rolar a Página
 */

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const cardsToAnimate = document.querySelectorAll(
        '.service-card, .diff-item, .category-tile, .testimonial-card, .insta-post'
    );

    cardsToAnimate.forEach((card) => {
        revealObserver.observe(card);
    });
});
