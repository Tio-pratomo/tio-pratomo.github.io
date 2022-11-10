class PortoHeader extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = /* html */ `
        <header>
            <nav class="nav">
                <ul class="nav__list">
                    <li class="nav__list-item">
                        <a href="#">home</a>
                    </li>
                    <li class="nav__list-item">
                        <a href="#">experience</a>
                    </li>

                    <li class="nav__list-item">
                        <a href="#">tools</a>
                    </li>

                    <li class="nav__list-item">
                        <a href="#">contact</a>
                    </li>
                </ul>
            </nav>
        </header>
        `;
    }
}

customElements.define('porto-header', PortoHeader);
