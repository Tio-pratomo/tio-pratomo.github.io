import 'animate.css';

import { App } from './views/app';

const app = new App(document.getElementById('app'));

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
});
