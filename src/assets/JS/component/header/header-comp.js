class PortoHeader extends HTMLElement {
    connectedCallback() {
        this.render();
        this.toogleMenuList();
    }

    toogleMenuList() {
        const buttonNav = document.querySelector('.nav__menu-button');
        const menuList = document.querySelector('.nav__list');

        buttonNav.addEventListener('click', () => {
            menuList.classList.toggle('active--menu');
            buttonNav.classList.toggle('open--bar');
        });
    }

    render() {
        this.innerHTML = /* html */ `
            <nav class="nav">
                <ul class="nav__list">
                    <li class="nav__list-item">
                        <a href="#/home">home</a>
                    </li>
                    <li class="nav__list-item">
                        <a href="#/experience">experience</a>
                    </li>

                    <li class="nav__list-item">
                        <a href="#/tool">tools</a>
                    </li>

                    <li class="nav__list-item">
                        <a href="#/portfolio">portoflio</a>
                    </li>

                    <li class="nav__list-item">
                        <a href="#/contact">contact</a>
                    </li>
                </ul>

                <div class="nav__menu-button">
                    <div class="bar bar-1"></div>
                    <div class="bar bar-2"></div>
                    <div class="bar bar-3"></div>
                </div>
            </nav>
        `;
    }
}

customElements.define('porto-header', PortoHeader);
