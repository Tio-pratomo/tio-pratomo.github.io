// Can also be included with a regular script tag
import Typed from 'typed.js';

const otomaticType = (element) => {
    const options = {
        strings: ['Web Developer', 'Front-End Developer', 'Back-End Developer', 'Pengguna Javascript'],
        typeSpeed: 100,
        loop: true,
    };

    new Typed(element, options);
};

export { otomaticType };
