import wiwidStoreWebp from '../../../images/wiwid-store_clipperly.webp';
import wiwidStoreImg from '../../../images/wiwid-store.jpg';
import jodtechWebp from '../../../images/jodtech_clipperly.webp';
import jodtechImg from '../../../images/jodtech.jpg';
import bangunDatarWebp from '../../../images/bangun-datar-calculate_clipperly.webp';
import bangunDatarImg from '../../../images/bangun-datar-calculate.jpg';
import thisRestoWebp from '../../../images/thiss-resto_clipperly.webp';
import thisRestoImg from '../../../images/Thiss-Resto.jpg';

const portfolios = [
    {
        name: 'Wiwid Store',
        description:
            'Proyek ini merupakan hasil dari mengikut course BWA Fullstack designer dimana kita membuat prototype menggunakan adobe XD, kemudian dieksekusi menjadi website static dengan bantuan css framework bootstrap.',
        img: wiwidStoreImg,
        webp: wiwidStoreWebp,
        link: 'https://wiwitstore.netlify.app/',
    },
    {
        name: 'Jodtech',
        description:
            'Website ini merupakan latihan dari youtube freecodecamp. Jadi disini saya mencoba untuk menngubah sedikit beberapa hal seperti asset, tipografi, pemilihan kata dan lain-lain.',
        img: jodtechImg,
        webp: jodtechWebp,
        link: 'https://jodtech.netlify.app/',
    },
    {
        name: 'Bangun Datar',
        description:
            'Proyek ini tujuannya untuk mempermudah pada siswa mempelajari matematika dengan materi bangun datar. Tetapi seiring waktu, saya memuat fitur lagi bangun ruang dan faktorial untuk lebih mempermudah lagi hitung-hitungan pada materi tersebut.',
        img: bangunDatarImg,
        webp: bangunDatarWebp,
        link: 'https://tio-pratomo.github.io/bangun-datar/',
    },
    {
        name: "This's Resto",
        description: `Aplikasi ini merupakan sebuah website dengan fitur Progresive Web App. Sehingga, dapat dijalankan secara offline karena terdapat service worker untuk menangani service ketika user mengalami gangguan jaringan internet ataupun jaringannya mati.
        Kemudian, ada testing berupa like restoran dan unlike restoran untuk memastikan aplikasi ini berjalan dengan baik. Ada integration test menggunakan jasmine dan end to end test menggunakan codecept dan puppeter.`,
        img: thisRestoImg,
        webp: thisRestoWebp,
        link: 'https://thiss-resto.netlify.app/',
    },
];

export { portfolios };
