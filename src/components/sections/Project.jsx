import RevealOnScroll from '../RevealOnScroll';

function Project() {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        Proyek
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                            <h3 className="text-2xl font-bold mb-2">Thiss Resto</h3>
                            <p className="text-gray-300 mb-4">
                                Ini merupakan Webapp Resto sederhana yang dibuat menggunakan Vanilla Javascript. Disini
                                memiliki fitur untuk memilih tempat makan favorit kita.
                            </p>
                            <div className="flex gap-4 flex-wrap sm:flex-none">
                                {['HTML', 'CSS', 'Javascript'].map((item, i) => (
                                    <span
                                        key={i}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 mx-2 inline-block rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <a
                                        href="https://thiss-resto.netlify.app"
                                        className="mt-4 inline-block text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        Lihat Proyek 🔎
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                            <h3 className="text-2xl font-bold mb-2">Wiwit Store</h3>
                            <p className="text-gray-300 mb-4">
                                Wiwit Store ini merupakan webapp yang diaplikasikan dari course Build With Angga.
                                Desainnya sederhana dengan latar belakang krem, menonjolkan teks promosi dan foto model.
                                Navigasi di bagian atas cukup jelas, dan terdapat indikasi jumlah item di keranjang
                                belanja. Tampilan produk terdiri dari gambar, judul, dan harga.
                            </p>
                            <div className="flex gap-4 flex-wrap sm:flex-none">
                                {['HTML', 'CSS', 'Javascript'].map((item, i) => (
                                    <span
                                        key={i}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 mx-2 inline-block rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <a
                                        href="https://wiwitstore.netlify.app/"
                                        className="mt-4 inline-block text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        Lihat Proyek 🔎
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                            <h3 className="text-2xl font-bold mb-2">Bangun Datar</h3>
                            <p className="text-gray-300 mb-4">
                                Ini merupakan Webapp tentang matematika bertema bangun datar. Disini kita akan
                                menghitung bangun datar dengan sangat mudah. Kalian tinggal masukkan angka dalam kolom
                                hitungan, kemudian klik hitung. Setelah itu kita akan dapat penjelasan dari cara
                                menghitung bangun datar tersebut.
                            </p>
                            <div className="flex gap-4 flex-wrap sm:flex-none">
                                {['HTML', 'CSS', 'Javascript', 'Bootstrap'].map((item, i) => (
                                    <span
                                        key={i}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 mx-2 inline-block rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <a
                                        href="https://tio-pratomo.github.io/bangun-datar/"
                                        className="mt-4 inline-block text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        Lihat Proyek 🔎
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                            <h3 className="text-2xl font-bold mb-2">Jodtech</h3>
                            <p className="text-gray-300 mb-4">
                                Ini merupakan Mockup dari freecodecamp. Webapp ini diberi nama Jodtech. Ceritanya,
                                Jodtech adalah webapp yang menawarkan jasa pembuatan software ERP berbasis cloud. Tampil
                                dengan desain modern dan cerah didominasi warna ungu, webapp ini menonjolkan kemudahan
                                dan fitur-fitur yang ditawarkan untuk membantu operasional bisnis sehari-hari, seperti
                                Point of Sales dan Payroll. Ajakan bertindak yang jelas mendorong pengunjung untuk
                                segera menghubungi atau memesan layanan
                            </p>
                            <div className="flex gap-4 flex-wrap sm:flex-none">
                                {['HTML', 'CSS', 'Javascript', 'SASS'].map((item, i) => (
                                    <span
                                        key={i}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 mx-2 inline-block rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <a
                                        href="https://jodtech.netlify.app/"
                                        className="mt-4 inline-block text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        Lihat Proyek 🔎
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}

export default Project;
