// function
// function untuk mengambil tahun saat ini
const copyrightYear = function () {
    const year = new Date();
    return year.getFullYear();
};
// *akhir function untuk mengambil tahun saat ini

// membuat link untuk print versi pdf
const pdfVersion = document.querySelector('.nav-item a[href="#"]');
pdfVersion.addEventListener('click', function (event) {
    event.preventDefault();
    location.href = 'CV_1.pdf';
});

// buat tahun copyright
const footer = document.getElementsByTagName('footer')[0];
const spanForCurrentYear = footer.children[0].children[0];

spanForCurrentYear.innerHTML = copyrightYear();
