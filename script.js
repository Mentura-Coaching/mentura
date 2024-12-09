/* script.js */

/* Funciones para abrir y cerrar los modales */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        // Desactivar scroll en el body
        document.body.classList.add('overflow-hidden');
        console.log(`Modal "${modalId}" abierto`);
    } else {
        console.error(`Modal con id "${modalId}" no encontrado`);
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
        // Activar scroll en el body
        document.body.classList.remove('overflow-hidden');
        console.log(`Modal "${modalId}" cerrado`);
    } else {
        console.error(`Modal con id "${modalId}" no encontrado`);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar Feather Icons
    if (typeof feather !== 'undefined') {
        feather.replace();
        console.log('Feather Icons inicializados');
    } else {
        console.warn('Feather Icons no están definidos');
    }

    // Obtener todos los modales
    const modals = document.querySelectorAll('.fixed.inset-0.bg-black.bg-opacity-50');

    modals.forEach(modal => {
        // Cerrar modal al hacer clic en el overlay (fondo oscuro)
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal(modal.id);
            }
        });

        // Cerrar modal al hacer clic en el botón de cierre dentro del modal
        const closeButton = modal.querySelector('.modal-header button');
        if (closeButton) {
            closeButton.addEventListener('click', function() {
                closeModal(modal.id);
            });
        } else {
            console.warn(`No se encontró el botón de cierre en el modal "${modal.id}"`);
        }
    });

    // Funcionalidad del menú móvil
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            console.log('Menú móvil alternado');
        });
    } else {
        console.warn('Botón de menú móvil o menú móvil no encontrado');
    }

    // Cerrar el menú móvil al hacer clic en un enlace dentro del menú
    if (mobileMenu) {
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                console.log('Menú móvil cerrado al hacer clic en un enlace');
            });
        });
    }

    // Cerrar cualquier modal abierto al presionar la tecla "Escape"
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            modals.forEach(modal => {
                if (!modal.classList.contains('hidden')) {
                    closeModal(modal.id);
                }
            });
            console.log('Modal(s) cerrado(s) al presionar "Escape"');
        }
    });
});