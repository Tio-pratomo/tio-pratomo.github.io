import './header-comp.js';

const renderHeader = () => {
    const portoHeader = document.createElement('porto-header');
    document.body.insertAdjacentElement('afterbegin', portoHeader);
};

export { renderHeader };
