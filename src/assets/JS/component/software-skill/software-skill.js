import AOS from 'aos';
import 'aos/dist/aos.css';

import { listSoftwareSkills } from './software-skills-item';

class Tools extends HTMLElement {
    connectedCallback() {
        this.render();
        AOS.init({
            startEvent: 'DOMContentLoaded',
            delay: 100,
        });
    }

    render() {
        this.innerHTML = /* html */ `
        <section class="skill">
            <div class="skill__intro">
                <h2 class="skill__intro__title">
                    Berikut ini adalah bahasa pemrograman, markup ataupun tools yang saya kuasai, untuk pengembangan web khususnya bidang front-end developer.
                </h2>
            </div>
            <div class="skill-mastered">
                ${listSoftwareSkills.map((element) => element).join(' ')}
            </div>
        </section>
        `;
    }
}

customElements.define('software-tool', Tools);
