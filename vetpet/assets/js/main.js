/**
 * VetPet Clínica Veterinária & Pet Shop
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('VetPet Clínica Veterinária & Pet Shop initialized.');

    // Rastreio de cliques no WhatsApp para conversão (CRO)
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach((link) => {
        link.addEventListener('click', () => {
            console.log('Conversão WhatsApp iniciada');
        });
    });
});
