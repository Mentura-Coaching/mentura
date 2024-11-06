
/* script.js */

/* Funciones para abrir y cerrar los modales */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    // Desactivar scroll en el body
    document.body.classList.add('overflow-hidden');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('flex');
    modal.classList.add('hidden');
    // Activar scroll en el body
    document.body.classList.remove('overflow-hidden');
}

document.addEventListener('DOMContentLoaded', function() {
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
});
