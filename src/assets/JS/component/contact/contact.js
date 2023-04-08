import { socialMedia } from './contact-detail';
import { CONFIG } from '../../globals/config';
import swal from 'sweetalert';

class Contact extends HTMLElement {
    connectedCallback() {
        this.render();
        this._submitForm();
    }

    _mappSocialMedia() {
        return socialMedia.map(({ icon, link, id }) => {
            if (id === 6) {
                return /* html */ `<a class="media-social" href="mailto:${link}">${icon}</a>`;
            } else {
                return /* html */ `<a class="media-social" href=${link} target="_blank" rel="noopener noreferrer">${icon}</a>`;
            }
        });
    }

    _mediaSocialList() {
        let mediaSocial = '';
        this._mappSocialMedia().forEach((list) => {
            mediaSocial += list;
        });

        return mediaSocial;
    }

    _submitForm() {
        const loader = document.querySelector('.loader');
        const submit = document.querySelector("button[type='submit']");
        const form = document.querySelector('.form');

        form.addEventListener('submit', (ev) => {
            ev.preventDefault();
            loader.style.display = 'inline-block';
            const request = new Request(CONFIG.FORM_URL_ID, {
                method: 'POST',
                body: new FormData(form, submit),
            });

            fetch(request)
                .then((response) => {
                    loader.style.display = 'none';
                    if (response.ok) {
                        form.reset();

                        swal({
                            icon: 'success',
                            title: 'Pesan Terkirim',
                            buttons: false,
                            timer: 2000,
                        });
                    } else {
                        throw new Error('periksa kembali internet anda');
                    }
                })
                .catch((err) => {
                    loader.style.display = 'none';
                    swal({
                        icon: 'error',
                        title: 'Pesan Gagal',
                        text: `
                        ${err.message}
                        periksa kembali internet anda
                        `,
                        button: false,
                        timer: 2000,
                    });
                });
        });
    }

    render() {
        this.innerHTML = /* html */ `
            <section class="contact">
                <div class="contact__media-social">
                    <h2 class="contact__title">Jika anda tertarik untuk merekrut atau bekerjasama dengan saya dapat terhubung di</h2>
                    <div class="contact__media-social__container">
                        ${this._mediaSocialList()}
                    </div>
                </div>
                <div class="contact__form">
                    <h2 class="contact__form__title">Jika ada saran atau ingin menyampaikan sesuatu silahkan isi pada formulir berikut</h2>
                    <form class="form">
                        <div class="form__input">
                            <label for="name" class="form__input__label-name">masukkan nama anda</label>
                            <input class="form__input__name" type="text" name="name" id="name" placeholder="cth. dicky">
                        </div>
                            
                        <div class="form__input">
                            <label for="body" class="form__input__label-name">masukkan pesan yang ingin disampaikan</label>
                            <textarea class="form__input__body" name="body" id="body" cols="30" rows="10" placeholder="cth. saya ingin bekerja sama"></textarea>
                        </div>
                        
                        <button class="button" type="submit">
                            <span class="button__shadow"></span>
                            <span class="button__edge"></span>
                            <span class="button__front">Submit</span>                            
                        </button>
                        <span class="loader"></span>
                    </form>
                    
                </div>
            </section>
        `;
    }
}

customElements.define('contact-me', Contact);
