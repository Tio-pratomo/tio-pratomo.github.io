function copyrightYear() {
    const year = new Date();
    return year.getFullYear();
}

document.querySelector('footer span').innerHTML = copyrightYear();

// membuat link untuk print versi pdf
const pdfVersion = document.querySelector('.nav-item a[href="#"]');
pdfVersion.addEventListener('click', function (event) {
    location.href = 'CV_1.pdf';
    event.preventDefault();
});
