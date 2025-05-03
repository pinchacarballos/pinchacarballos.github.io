const inputMaterialElements = document.querySelectorAll('.input-material');

inputMaterialElements.forEach(container => {
    const input = container.querySelector('input');

    input.addEventListener('focus', () => {
        container.classList.add('focused');
    });

    input.addEventListener('blur', () => {
        container.classList.remove('focused');
        if (!input.value) {
        container.classList.remove('filled');
        }
    });

    input.addEventListener('input', () => {
        if (input.value) {
        container.classList.add('filled');
        } else {
        container.classList.remove('filled');
        }
    });

    if (input.value) {
        container.classList.add('filled');
    }
});

const textareaMaterialElements = document.querySelectorAll('.textarea-material');

textareaMaterialElements.forEach(container => {
    const textarea = container.querySelector('textarea');

    textarea.addEventListener('focus', () => {
        container.classList.add('focused');
    });

    textarea.addEventListener('blur', () => {
        container.classList.remove('focused');
        if (!textarea.value) {
        container.classList.remove('filled');
        }
    });

    textarea.addEventListener('input', () => {
        if (textarea.value) {
        container.classList.add('filled');
        } else {
        container.classList.remove('filled');
        }
    });

    // Comprobación inicial por si el textarea ya tiene valor al cargar la página
    if (textarea.value) {
        container.classList.add('filled');
    }
});