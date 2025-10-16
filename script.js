// script.js (Debe ser un archivo externo con el atributo 'defer')

document.addEventListener('DOMContentLoaded', () => {
    
    // Función para Scroll Suave en todos los enlaces ancla
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Evitar el salto brusco
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll con animación suave
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 🔑 Opcional: Validación simple del formulario antes de enviar
    const contactForm = document.querySelector('.simple-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // Aquí puedes agregar lógica de validación extra si es necesario
            console.log("Formulario de contacto enviado. Esperando respuesta de Formspree.");
        });
    }

});
