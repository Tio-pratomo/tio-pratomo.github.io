import photoProfile from '../../../images/Foto_profile.jpeg';
import { otomaticType } from '../../utility/otomatic-type';

class Intro extends HTMLElement {
    connectedCallback() {
        this.render();
        otomaticType('#typed');
    }

    render() {
        this.innerHTML = /* html */ `
            <section id="intro" class="intro">

                <div class="intro__container">
                    <div class="intro__container__description">
                        <div class="intro__describe animate__animated animate__backInLeft">
                            <h2 class="intro__describe__title">Hallo.</h2>
                            <h2 class="intro__describe__title">nama saya sulistio</h2>
                            <h3 class="intro__describe__title">Saya Seorang <span id="typed" class="intro__describe__typed"></span></h3>
                            <h3 class="intro__describe__paragraph">Saya seorang lulusan D3 Teknik Sipil pada salah satu Universitas di Jakarta.
                            Pengalaman kerja sebagai administrasi proyek.
                            Saat bekerja, saya interest di bidang design, terutama design interior, furniture.
                            Sekarang ini, saya lebih berfokus pada bidang pemrograman, terutama pada lingkup bagian Front-end Developer.</h3>
                        </div>
                    </div>
                    

                    <div class="intro__photo-profile">
                        <picture class="photo-profile">
                            <source
                                media="(max-width: 600px)"
                                srcset="${photoProfile}?width=400"
                                type="image/jpeg"
                                
                            />
                            <source
                                media="(max-width: 1000px)"
                                srcset="${photoProfile}?width=800"
                                type="image/jpeg"
                                
                            />
                            <img
                                src="${photoProfile}?width=1000"
                                class="photo-profile__img animate__animated animate__bounceInRight animate__slower"
                                alt="photo profile"
                                
                            />
                        </picture>
                    </div>
                </div>

                

            </section>
        `;
    }
}

customElements.define('intro-element', Intro);
