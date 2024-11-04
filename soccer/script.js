const imagen = document.getElementById('mi-imagen');

// Pausa la animación al hacer clic en la imagen
imagen.addEventListener('click', function() {
    const currentAnimation = getComputedStyle(imagen).animationPlayState;
    imagen.style.animationPlayState = (currentAnimation === 'running') ? 'paused' : 'running';
});
