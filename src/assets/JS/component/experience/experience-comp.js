import { listExperienceWork } from './experience-item-comp';

class Experience extends HTMLElement {
    connectedCallback() {
        this.render();
        this.animationList();
    }

    render() {
        this.innerHTML = /* html */ `
        <div class="container">
            <div class="wrapper">
                <h2 class="title">Di bawah ini merupakan pengalaman kerja saya di perusahaan. Sekarang ini saya berdagang membantu ibu saya.</h2>
                <ul class="sessions">
                    ${listExperienceWork.map((listWork) => listWork).join(' ')}
                </ul>
            </div>
        </div> 
        `;
    }

    animationList() {
        document.querySelectorAll('.point').forEach((elementLi, index) => {
            index > 0
                ? elementLi.classList.add('animate__fadeInLeft', `animate__delay-${index}s`)
                : elementLi.classList.add('animate__fadeInLeft');
        });
    }
}

customElements.define('experience-comp', Experience);
