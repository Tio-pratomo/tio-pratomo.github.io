class Intro extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = /* html */ `
            <section id="intro" class="intro">
                <div class="intro__describe">
                    <h2>nama saya sulistio</h2>
                    <h3>saya seorang coder</h3>
                </div>

                <picture>
                    <img src="" alt="">
                </picture>
            </section>
        `;
    }
}

customElements.define('intro-element', Intro);
