import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import RevealOnScroll from '../RevealOnScroll';

function Contact() {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        Hubungi Saya
                    </h2>
                    <div className="flex justify-center space-x-8">
                        <a
                            href="mailto:sulistiopratomo@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-500 transition duration-300"
                        >
                            <FaEnvelope size={32} />
                        </a>
                        <a
                            href="https://github.com/Tio-pratomo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-white transition duration-300"
                        >
                            <FaGithub size={32} />
                        </a>
                        <a
                            href="https://linkedin.com/in/sulis-ti0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-700 transition duration-300"
                        >
                            <FaLinkedin size={32} />
                        </a>
                        <a
                            href="https://shorturl.at/TxjdR"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-green-500 transition duration-300"
                        >
                            <FaWhatsapp size={32} />
                        </a>
                    </div>
                    <p className="mt-8 text-gray-500">
                        Jangan ragu untuk menghubungi saya melalui salah satu platform di atas!
                    </p>
                </div>
            </RevealOnScroll>
        </section>
    );
}

export default Contact;
