import { portfolios } from './portfolio-detail';

class Portfolio extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = /* html */ `
            <section class="portfolio">
                <h2 class="portfolio__title">Berikut ini portfolio website yang saya kerjakan</h2>
                <div class="portfolio__list">
                    ${portfolios
                        .map(
                            ({ name, description, img, webp, link }) => /* html */ `
                        <div class="card">
                            <div class="card__image">
                                <img class="image" src=${img} alt="site" srcset=${webp}>
                            </div>
                            <div class="card__title">
                                <h3 class="title">${name}</h3>
                            </div>
                            <div class="card__body">    
                                <p class="text">${description}</p>
                                <a class="button" href=${link} target="_blank" rel="noopener noreferrer">kunjungi situs</a>
                            </div>
                        </div>
                        `
                        )
                        .join(' ')}
                </div>
            </section>
        `;
    }
}

customElements.define('my-portfolio', Portfolio);
