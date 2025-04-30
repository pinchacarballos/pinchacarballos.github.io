const countdown = () => {
    const endDate = new Date("2025-10-18T12:30:00");
    const now = new Date();
    const diff = endDate - now;

    if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "¡Ya está disponible!";
    return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
};

const toggleIntolerancias = (mostrar) => {
    const campo = document.getElementById('intolerancias-texto');
    campo.style.display = mostrar ? 'block' : 'none';
    campo.querySelector('input').required = mostrar;
};

document.addEventListener('DOMContentLoaded', function () {

    countdown();
    setInterval(countdown, 500);
  
    
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
});
