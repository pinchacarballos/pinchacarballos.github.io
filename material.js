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

    if (textarea.value) {
        container.classList.add('filled');
    }
});

function showToast(mensaje, accionTexto, accionCallback) {
  const toast = document.getElementById('toast-container');
  const mensajeElemento = toast.querySelector('.toast-message');
  const accionBoton = toast.querySelector('.toast-action');

  mensajeElemento.textContent = mensaje;

  if (accionTexto && accionCallback) {
    accionBoton.textContent = accionTexto;
    accionBoton.style.display = 'inline-block';
    accionBoton.onclick = accionCallback;
  } else {
    accionBoton.style.display = 'none';
    accionBoton.onclick = null;
  }

  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}