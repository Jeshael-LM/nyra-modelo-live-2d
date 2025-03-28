// Creamos una aplicación PIXI
const app = new PIXI.Application({
    view: document.getElementById('live2d-canvas'),
    autoStart: true,
    backgroundAlpha: 0,
    resizeTo: window
});

document.body.appendChild(app.view);

// Cargar el modelo de Nyra usando pixi-live2d-display
Live2DModel.from('https://cdn.jsdelivr.net/gh/Jeshael-LM/nyra-modelo-live-2d@main/akari_vts/akari.model3.json').then(model => {
    model.scale.set(0.5); // Escalamos el modelo
    model.x = app.screen.width / 2;
    model.y = app.screen.height / 2;
    model.anchor.set(0.5);

    // Añadir el modelo al escenario de PIXI
    app.stage.addChild(model);

    // Interactividad básica
    model.on('pointerdown', () => {
        console.log('Nyra ha sido tocada');
    });
}).catch(error => {
    console.error('Error al cargar el modelo:', error);
});

// Ajustar el tamaño del canvas al cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
    app.renderer.resize(window.innerWidth, window.innerHeight);
});
