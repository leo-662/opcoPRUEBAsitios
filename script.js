// script.js (Contiene el scroll suave y opcionalmente el tracking)

document.addEventListener('DOMContentLoaded', () => {
    
    // Función para Scroll Suave en todos los enlaces ancla
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
