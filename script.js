let progress = 0;
let loader = document.getElementById('loader');
let content = document.getElementById('content');
let progressText = document.getElementById('progress');
let batteryLevel = document.getElementById('battery-level');

function simulateLoading() {
    if (progress < 100) {
        progress++;
        progressText.innerText = progress;
        batteryLevel.style.width = progress + '%'; // Incrementa el ancho de la "batería"
        setTimeout(simulateLoading, 50); // Velocidad de la animación
    } else {
        loader.style.display = 'none';
        content.style.display = 'block';
    }
}

window.onload = simulateLoading;
