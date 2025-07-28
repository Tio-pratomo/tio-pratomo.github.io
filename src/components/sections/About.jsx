import RevealOnScroll from '../RevealOnScroll';

function About() {
    const administrations = ['Microsoft World', 'Microsoft Excel', 'Microsoft Powerpoint'];
    const frontEndTools = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bulma', 'Bootstrap'];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        Tentang Saya
                    </h2>

                    <div className="rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-2 mt-6">
                            Dengan latar belakang sebagai Admin Proyek di Wulandari Lestari dan Indomarco Prismatama,
                            saya memiliki pengalaman dalam administrasi dan pemahaman dasar desain 3D via SketchUp. Saat
                            ini, saya sangat tertarik dan aktif belajar Front-End Development.
                        </p>
                        <p className="text-gray-300 mb-2">
                            Saya bersemangat untuk menggabungkan kemampuan pemahaman visualisai design dan ketelitian
                            yang saya miliki dengan keterampilan baru dalam menciptakan pengalaman pengguna yang menarik
                            dan efektif.
                        </p>
                        <p className="text-gray-300 mb-6">
                            Saya telah membangun pemahaman yang kuat dalam HTML dan CSS, dan saat ini fokus mendalami
                            React sebagai framework utama. Saya memiliki komitmen untuk terus mengembangkan keterampilan
                            saya dan mengadopsi teknologi Front-End lainnya yang relevan.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Administration Tool</h3>
                                <div className="flex flex-wrap gap-2">
                                    {administrations.map((administration, index) => (
                                        <span
                                            key={index}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                                        >
                                            {administration}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Front-end Web Tool</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontEndTools.map((frontEndTool, index) => (
                                        <span
                                            key={index}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                                        >
                                            {frontEndTool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">🎓 Pendidikan</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>
                                        <strong>D3 Teknik Sipil</strong> - Universitas Negeri Jakarta
                                    </li>

                                    <li>
                                        <strong>IPA</strong> - SMA Negeri 53 Jakarta
                                    </li>
                                </ul>
                            </div>

                            <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">💼 Pengalaman</h3>
                                <div className="space-y-4 text-gray-300 ">
                                    <div>
                                        <h4 className="text-left font-bold">PT Wulandari Lestari</h4>
                                        <div className="flex items-baseline justify-between mb-1">
                                            <h4 className="font-semibold">Administrasi Proyek</h4>
                                            <span className="text-sm text-gray-400">2015-2016</span>
                                        </div>
                                    </div>

                                    <hr className="border-gray-800" />

                                    <div>
                                        <h4 className="text-left font-bold">PT Indomarco Prismatama</h4>
                                        <div className="flex items-baseline justify-between mb-1">
                                            <h4 className="font-semibold">Clerk</h4>
                                            <span className="text-sm text-gray-400">2017</span>
                                        </div>
                                    </div>

                                    <hr className="border-gray-800" />

                                    <div>
                                        <h4 className="text-left font-bold">PT Wulandari Lestari</h4>
                                        <div className="flex items-baseline justify-between mb-1">
                                            <h4 className="font-semibold">Administrasi Proyek</h4>
                                            <span className="text-sm text-gray-400">2017</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}

export default About;
