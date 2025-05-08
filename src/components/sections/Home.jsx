import RevealOnScroll from '../RevealOnScroll';

function Home() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Hallo Saya Sulistio
                    </h1>

                    <p className="text-gray-400 text-xl max-w-lg mx-auto mb-8">
                        Saya seorang yang senang belajar mengenai hal baru. Sekarang ini, menggeluti bidang pemrograman,
                        terutama pada lingkup bagian Front-end Developer.
                    </p>

                    <div className="flex justify-center space-x-4">
                        <a
                            href="#projects"
                            className="bg-blue-500 py-3 px-6 rounded-lg font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                        >
                            Lihat proyek
                        </a>

                        <a
                            href="#contact"
                            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2) hover:bg-blue-500/10"
                        >
                            Kontak Saya
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}

export default Home;
