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
        const url = 'https://script.google.com/macros/s/AKfycbzB-DTKISdLGZZDFdfMGkHjxyVac3FXNU6TkIXRFDfWcHzLO-WUlvAreSH3eUtk2pco/exec';
        try {
            const response = await fetch(url, { 
                method: 'post', 
                body: JSON.stringify(data),
                headers: {'Content-type': 'application/json'}
            });
            if (response.ok) {
                alert('Gracias por confirmar tu asistencia!');
                form.reset();
                document.getElementById('popup').style.display = 'none';
            } else {
                alert('Error al enviar. Intenta más tarde.');
            }
        } catch (err) {
            alert('Fallo de red. Intenta más tarde.');
        }
    });
});



/*
  Logger.log(e)
 const sheet = SpreadsheetApp.getActiveSpreadsheet();
 const data = [
 e.nombre || '',
 e.acompanantes || '',
 e.autobus || '',
 e.intolerancias || '',
 e.detalle_intolerancias || '',
 e.comentarios || '',
 new Date()
 ];
*/