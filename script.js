let progress = 0;
let loader = document.getElementById('loader');
let content = document.getElementById('content');
let progressText = document.getElementById('progress');
let batteryLevel = document.getElementById('battery-level');
let gallery = document.getElementById('gallery');

// Identificar la página
let page = document.querySelector('script[data-page]').getAttribute('data-page');

// Lista de imágenes específica para cada página
let images = [];

if (page === 'index') {
    images = ['foto1.jpg', 'foto2.jpg', 'foto3.jpg', 'foto4.jpg', 'foto5.jpg'];
} else if (page === 'loveF&F') {
    images = ['ff1.jpg', 'ff2.jpg', 'ff3.jpg', 'ff4.jpg', 'ff5.jpg', 'ff6.jpg'];
}

function simulateLoading() {
    if (progress < 100) {
        progress++;
        progressText.innerText = progress;
        batteryLevel.style.width = progress + '%'; // Incrementa el ancho de la "batería"
        setTimeout(simulateLoading, 50); // Velocidad de la animación
    } else {
        loader.style.display = 'none';
        content.style.display = 'flex';
        showImages();
    }
}

function showImages() {
    images.forEach((src, index) => {
        setTimeout(() => {
            let img = document.createElement('img');
            img.src = src;
            gallery.appendChild(img);
        }, index * 500); // Retraso de aparición para cada imagen
    });
}

window.onload = simulateLoading;
