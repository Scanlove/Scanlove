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
} else if (page === 'L_O') {
    images = ['d1.jpeg', 'd2.jpeg', 'd3.jpeg', 'd4.jpeg', 'd5.jpeg'];
}  else if (page === 'M_S') {
    images = ['m1.jpg', 'm2.jpg', 'm3.jpg', 'm4.jpg', 'm5.jpg'];
} else if (page === 'S_R') {
    images = ['car1.jpeg', 'car2.jpeg', 'car3.jpeg', 'car4.jpeg', 'car5.jpeg', 'car6.jpeg'];
} else if (page === 'aniversario') {
    images = ['boda1.jpeg', 'boda2.jpeg', 'boda3.jpeg', 'boda4.jpeg', 'boda5.jpeg', 'boda6.jpeg'];
}  else if (page === 'love') {
    images = ['love1.jpeg', 'love2.jpeg', 'love3.jpeg', 'love4.jpeg', 'love5.jpeg', 'love6.jpeg'];
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
