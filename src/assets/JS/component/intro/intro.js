import './intro-comp.js';

const renderIntro = () => {
    const introEl = document.createElement('intro-element');

    document.body.firstChild.insertAdjacentElement('afterend', introEl);
};

export { renderIntro };
