const countdown = () => {
    const endDate = new Date("2025-10-18T12:30:00");
    const now = new Date();
    const diff = endDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML = "";
        document.getElementById("countdown").setAttribute('style', 'display: none');
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