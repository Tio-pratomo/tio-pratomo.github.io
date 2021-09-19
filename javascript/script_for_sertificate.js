const copyrightYear = function () {
    const year = new Date();
    return year.getFullYear();
};

// buat tahun copyright
const currentYear = document.querySelector('.currrent-year');
currentYear.innerText = copyrightYear();
