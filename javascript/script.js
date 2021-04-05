function cvSupport() {
    const isHitButton = confirm(
        '!!!!!!PERHATIAN!!!!!! \n' +
            'Berkas pendukung hanya di peruntukan untuk melamar kerja. ' +
            'Berkas tersebut ditujukan agar perusahaan/divisi HRD dapat mencari lebih lanjut ' +
            'latar belakang, dan kemampuan pelamar.' +
            'Tidak dibenarkan untuk memanipulasi, atau ' +
            'memanfaatkan berkas tersebut untuk kepentingan pribadi,' +
            'karena melanggar hukum. \n' +
            'Terima kasih atas perhatiannya. \n' +
            '\nKlik OK untuk melihat berkas atau cancel untuk batal.'
    );

    if (isHitButton) {
        return window.open('berkas_pendukung.pdf', '_blank');
    }
}

function copyrightYear() {
    const year = new Date();
    return year.getFullYear();
}

document.querySelector('li.nav-link').onclick = cvSupport;
document.querySelector('footer span').innerHTML = copyrightYear();

// membuat link untuk print versi pdf
const pdfVersion = document.querySelector('.nav-item a[href="#"]');
pdfVersion.addEventListener('click', function (event) {
    location.href = 'CV_1.pdf';
    event.preventDefault();
});
