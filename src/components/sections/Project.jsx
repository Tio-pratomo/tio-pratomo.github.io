import RevealOnScroll from '../RevealOnScroll';
import ItemProject from './ItemProject';

function Project() {
  const dataProject = [
    {
      title: 'Thiss Resto',
      desc: 'Ini merupakan Webapp Resto sederhana yang dibuat menggunakan Vanilla Javascript. Disini memiliki fitur untuk memilih tempat makan favorit kita.',
      tech: ['HTML', 'CSS', 'Javascript'],
      link: 'https://thiss-resto.netlify.app',
      buttonText: 'Lihat Proyek 🔎',
    },
    {
      title: 'Wiwit Store',
      desc: 'Wiwit Store ini merupakan webapp yang diaplikasikan dari course Build With Angga. Desainnya sederhana dengan latar belakang krem, menonjolkan teks promosi dan foto model. Navigasi di bagian atas cukup jelas, dan terdapat indikasi jumlah item di keranjang belanja. Tampilan produk terdiri dari gambar, judul, dan harga.',
      tech: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
      link: 'https://wiwitstore.netlify.app',
      buttonText: 'Lihat Proyek 🔎',
    },
    {
      title: 'Bangun Datar',
      desc: 'Ini merupakan Webapp tentang matematika bertema bangun datar. Disini kita akan menghitung bangun datar dengan sangat mudah. Kalian tinggal masukkan angka dalam kolom hitungan, kemudian klik hitung. Setelah itu kita akan dapat penjelasan dari cara menghitung bangun datar tersebut.',
      tech: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
      link: 'https://tio-pratomo.github.io/bangun-datar',
      buttonText: 'Lihat Proyek 🔎',
    },
    {
      title: 'Jodtech',
      desc: 'Ini merupakan Mockup dari freecodecamp. Webapp ini diberi nama Jodtech. Ceritanya, Jodtech adalah webapp yang menawarkan jasa pembuatan software ERP berbasis cloud. Tampil dengan desain modern dan cerah didominasi warna ungu, webapp ini menonjolkan kemudahan dan fitur-fitur yang ditawarkan untuk membantu operasional bisnis sehari-hari, seperti Point of Sales dan Payroll. Ajakan bertindak yang jelas mendorong pengunjung untuk segera menghubungi atau memesan layanan.',
      tech: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'SaaS'],
      link: 'https://jodtech.netlify.app',
      buttonText: 'Lihat Proyek 🔎',
    },
    {
      title: 'Culinary Delights App',
      desc: 'Aplikasi web sederhana yang dibangun sebagai bagian dari Capstone Project untuk mencoba penggunaan API publik. Aplikasi ini memungkinkan pengguna untuk menjelajahi resep berdasarkan kategori dan melihat detail lengkap dari resep yang dipilih.',
      tech: [
        'Node.js',
        'Express.js',
        'EJS',
        'Morgan',
        'Winston',
        'Redaxios',
        'Tailwind CSS',
        'DaisyUI',
        'Nodemon',
        'Concurrently',
        'Jest',
        'Supertest',
      ],
      link: 'https://capstone-meal-api.vercel.app/',
      buttonText: 'Lihat Proyek 🔎',
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Proyek
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dataProject.map(({ title, desc, tech, link, buttonText }) => (
              <ItemProject
                key={title}
                title={title}
                desc={desc}
                tech={tech}
                link={link}
                buttonText={buttonText}
              />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Project;
