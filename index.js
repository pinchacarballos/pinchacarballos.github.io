const showForm = () => {
    const content = document.getElementById('body');
    content.scrollIntoView({ behavior: 'instant', block: 'start' });
    content.style.overflow = 'hidden';
    document.getElementById('popup').style.display = 'block';
}

const hideForm = () => {
    const content = document.getElementById('body');
    content.style.overflow = 'auto';
    document.getElementById('popup').style.display = 'none';
}

const toggleIntolerancias = (mostrar) => {
    const campo = document.getElementById('intolerancias-texto');
    campo.style.display = mostrar ? 'block' : 'none';
    campo.querySelector('input').required = mostrar;
};

function copyToClipboard(elementId) {
    const textElement = document.getElementById(elementId);
    const textToCopy = textElement.textContent;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          showToast('IBAN copiado al portapapeles');
        })
        .catch(err => {
          console.error('Error al copiar al portapapeles:', err);
          alert('No se pudo copiar el IBAN.');
        });
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('IBAN copiado al portapapeles');
    }
  }

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('rsvp-form')
    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        const formData = new FormData(form);
        const url = 'https://script.google.com/macros/s/AKfycbxscxgntDQ-rhfpI26M7MnaVndDKqg1L05N4gmBpzslqq8TtlqqUFjE1oYixuacElVb/exec';
        try {
            const response = await fetch(url, { 
                method: 'post',
                body: formData,
                redirect: 'follow'
            });
            if (response.ok) {
                showToast('Gracias por confirmar tu asistencia');
                form.reset();
                hideForm();
            } else {
                showToast('Error al enviar. Intentalo de nuevo más tarde.');
            }
        } catch (err) {
            showToast('Fallo de red. Intenta más tarde.');
        }
    });
});
