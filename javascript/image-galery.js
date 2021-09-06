const bigImg = document.getElementById('big-image');
const containerThumb = document.querySelector('.image-thumb');
const thumb = document.querySelectorAll('.thumb');

containerThumb.addEventListener('click', function (event) {
    if (event.target.alt === 'gambar thumbnail') {
        if (/Gambar-1/.test(event.target.src)) {
            bigImg.src = `gambar/sertifikat/Gambar-1-2x.png`;
        } else if (/Gambar-2/.test(event.target.src)) {
            bigImg.src = `gambar/sertifikat/Gambar-2-2x.png`;
        } else if (/Gambar-3/.test(event.target.src)) {
            bigImg.src = `gambar/sertifikat/Gambar-3-2x.png`;
        } else if (/Gambar-4/.test(event.target.src)) {
            bigImg.src = `gambar/sertifikat/Gambar-4-2x.png`;
        } else if (/Gambar-5/.test(event.target.src)) {
            bigImg.src = `gambar/sertifikat/Gambar-5-2x.png`;
        } else if (/Gambar-6/.test(event.target.src)) {
            bigImg.src = `gambar/sertifikat/Gambar-6-2x.png`;
        } else if (/Gambar-7/.test(event.target.src)) {
            bigImg.src = `gambar/sertifikat/Gambar-7-2x.png`;
        } else if (/Gambar-8/.test(event.target.src)) {
            bigImg.src = `gambar/sertifikat/Gambar-8-2x.png`;
        } else if (/Gambar-9/.test(event.target.src)) {
            bigImg.src = `gambar/sertifikat/Gambar-9-2x.png`;
        }

        bigImg.classList.add('fade');
        setTimeout(function () {
            bigImg.classList.remove('fade');
        }, 500);

        thumb.forEach(function (e) {
            if (event.target === e) {
                e.classList.add('active');
            } else {
                e.classList.remove('active');
            }
        });
    }
});
