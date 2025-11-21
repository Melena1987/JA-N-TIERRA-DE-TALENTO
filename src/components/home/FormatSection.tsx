import React from 'react';
import FadeIn from '../ui/FadeIn';

const FormatSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#2C3E2C] text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4AF37] opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#556B2F] opacity-20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
            <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Formato</h2>
                <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-10"></div>
                <p className="text-xl text-gray-300 leading-relaxed mb-16 max-w-4xl mx-auto">
                El proyecto se articula como un ciclo de conferencias dinámicas. Los estudiantes no solo escuchan, sino que participan activamente.
                </p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <FadeIn delay={100} className="h-full">
                    <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition duration-300 h-full">
                        <div className="text-4xl mb-4 text-[#D4AF37]">⏱</div>
                        <h3 className="text-xl font-bold mb-2">90-120 Minutos</h3>
                        <p className="text-gray-400">Duración optimizada para mantener la atención y profundidad.</p>
                    </div>
                </FadeIn>
                <FadeIn delay={200} className="h-full">
                    <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition duration-300 h-full">
                        <div className="text-4xl mb-4 text-[#D4AF37]">🏛</div>
                        <h3 className="text-xl font-bold mb-2">Espacios Emblemáticos</h3>
                        <p className="text-gray-400">Teatros y auditorios para crear un ambiente solemne e inspirador.</p>
                    </div>
                </FadeIn>
                <FadeIn delay={300} className="h-full">
                    <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition duration-300 h-full">
                        <div className="text-4xl mb-4 text-[#D4AF37]">🎓</div>
                        <h3 className="text-xl font-bold mb-2">Centros Educativos</h3>
                        <p className="text-gray-400">Acercamos a los referentes directamente a las aulas.</p>
                    </div>
                </FadeIn>
            </div>
        </div>
    </section>
  );
};

export default FormatSection;