import RevealOnScroll from '../RevealOnScroll';
import { FaFilePdf } from 'react-icons/fa'; // Import ikon PDF

function Portfolio() {
    const pdfPortfolioFurnitureUrl = '/Portfolio Furniture Compress.pdf'; // Ganti dengan path atau URL PDF Anda

    return (
        <section id="portfolio" className="min-h-screen flex items-center justify-center py-20">
            <div className="container mx-auto px-4 text-center">
                <RevealOnScroll>
                    <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        Portofolio
                    </h2>
                    <p className="mb-8 text-gray-300">
                        Lihat ringkasan lengkap proyek dan pengalaman saya dalam format PDF.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {/* <a
                            href={pdfPortfolioUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
                        >
                            <FaFilePdf className="mr-2" size={24} />
                            Portofolio WebDev
                        </a> */}

                        <a
                            href={pdfPortfolioFurnitureUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
                        >
                            <FaFilePdf size={24} />
                            Portofolio Furniture
                        </a>
                    </div>
                </RevealOnScroll>
                {/* Anda juga bisa menambahkan preview singkat atau daftar proyek di sini jika diinginkan */}
            </div>
        </section>
    );
}

export default Portfolio;
