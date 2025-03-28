// Importamos PIXI y pixi-live2d-display desde un CDN
import * as PIXI from 'https://cdn.jsdelivr.net/npm/pixi.js@7/dist/pixi.mjs';
import { Live2DModel } from 'https://cdn.jsdelivr.net/npm/pixi-live2d-display@0.5.7/dist/index.min.mjs';

// Creamos una aplicación PIXI
const app = new PIXI.Application({
    view: document.getElementById('live2d-canvas'),
    autoStart: true,
    backgroundAlpha: 0,
    resizeTo: window
});

document.body.appendChild(app.view);

// Cargamos el modelo de Nyra
Live2DModel.from('https://cdn.jsdelivr.net/gh/Jeshael-LM/nyra-modelo-live-2d@main/akari_vts/akari.model3.json').then(model => {
    model.scale.set(0.5); // Escalamos el modelo
    model.x = app.screen.width / 2;
    model.y = app.screen.height / 2;
    model.anchor.set(0.5);
    
    app.stage.addChild(model);

    // Interactividad básica
    model.on('pointerdown', () => {
        console.log('Nyra ha sido tocada');
    });
});

// Ajustamos el tamaño del canvas al cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
    app.renderer.resize(window.innerWidth, window.innerHeight);
});
