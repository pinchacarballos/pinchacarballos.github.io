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

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('rsvp-form')
    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        const formData = new FormData(form);
        const data = {}
        for (var [key, value] of formData.entries()) { 
            data[key] = value
        }
        const url = 'https://script.google.com/macros/s/AKfycbxscxgntDQ-rhfpI26M7MnaVndDKqg1L05N4gmBpzslqq8TtlqqUFjE1oYixuacElVb/exec';
        try {
            const response = await fetch(url, { 
                method: 'post',
                body: formData,
                redirect: 'follow'
            });
            console.log(await response.text())
            if (response.ok) {
                alert('Gracias por confirmar tu asistencia!');
            } else {
                alert('Error al enviar. Intenta más tarde.');
            }
        } catch (err) {
            alert('Fallo de red. Intenta más tarde.');
        }
    });
});
