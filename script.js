/* script.js */

/* Funciones para abrir y cerrar los modales */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        // Desactivar scroll en el body
        document.body.classList.add('overflow-hidden');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
        // Activar scroll en el body
        document.body.classList.remove('overflow-hidden');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar Feather Icons
    feather.replace();

    // Obtener todos los modales
    const modals = document.querySelectorAll('.fixed.inset-0.bg-black.bg-opacity-50');

    modals.forEach(modal => {
        modal.addEventListener('click', function(event) {
            // Verificar si el clic fue en el overlay y no en el contenido del modal
            if (event.target === modal) {
                closeModal(modal.id);
            }
        });
    });

    // Funcionalidad del menú móvil
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Cerrar el menú móvil al hacer clic en un enlace (opcional pero recomendado)
    if (mobileMenu) {
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
});
