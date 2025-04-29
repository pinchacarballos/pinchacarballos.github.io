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

  countdown();
  setInterval(countdown, 500);
  
  function toggleIntolerancias(mostrar) {
const campo = document.getElementById('intolerancias-texto');
campo.style.display = mostrar ? 'block' : 'none';
campo.querySelector('input').required = mostrar;
}
document.getElementById('rsvp-form').addEventListener('submit', async function (e) {
e.preventDefault();
const form = e.target;
const data = new FormData(form);
const url = 'https://script.google.com/macros/s/AKfycbzB-DTKISdLGZZDFdfMGkHjxyVac3FXNU6TkIXRFDfWcHzLO-WUlvAreSH3eUtk2pco/exec';
try {
const response = await fetch(url, { method: 'POST', body: data });
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