import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
    constructor(content) {
        this._content = content;
    }

    renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = page.render();
    }
}

export { App };
