import { useEffect } from 'react';

function MobileMenu({ menuOpen, setMenuOpen }) {
    return (
        <div
            className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-evenly transition-all duration-300 ease-in-out ${
                menuOpen ? 'h-screen opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'
            }`}
        >
            <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
            >
                &times;
            </button>

            <a
                href="#home"
                className={`text-2xl font-semibold text-white my-4 transition-transform duration-300 ease-in-out ${
                    menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                onClick={() => setMenuOpen(false)}
            >
                Beranda
            </a>
            <a
                href="#about"
                className={`text-2xl font-semibold text-white my-4 transition-transform duration-300 ease-in-out ${
                    menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                onClick={() => setMenuOpen(false)}
            >
                Tentang Saya
            </a>
            <a
                href="#projects"
                className={`text-2xl font-semibold text-white my-4 transition-transform duration-300 ease-in-out ${
                    menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                onClick={() => setMenuOpen(false)}
            >
                proyek
            </a>

            <a
                href="#portfolio"
                className={`text-2xl font-semibold text-white my-4 transition-transform duration-300 ease-in-out ${
                    menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                onClick={() => setMenuOpen(false)}
            >
                Portfolio
            </a>

            <a
                href="#contact"
                className={`text-2xl font-semibold text-white my-4 transition-transform duration-300 ease-in-out ${
                    menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                onClick={() => setMenuOpen(false)}
            >
                Kontak
            </a>
        </div>
    );
}

export default MobileMenu;
