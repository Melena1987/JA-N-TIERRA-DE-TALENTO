import React from 'react';
import FadeIn from '../ui/FadeIn';

const IntroSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#F9F9F9] to-white"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <FadeIn>
            <h2 className="text-4xl md:text-5xl font-black text-[#556B2F] mb-4 uppercase tracking-tight">
              Jaén, Tierra de Talento
            </h2>
            <p className="text-xl md:text-2xl text-[#D4AF37] font-serif italic mb-8">
              "Conectando a nuestros jóvenes con nuestros referentes."
            </p>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#556B2F] to-[#D4AF37] mx-auto mb-12 rounded-full"></div>
        </FadeIn>
        
        <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              <strong className="font-bold text-gray-800">Jaén, Tierra de Talento</strong> es una iniciativa social y formativa liderada por el ex-deportista de élite <strong className="text-[#556B2F]">Alfonso Sánchez</strong>. El proyecto consiste en un ciclo de conferencias inspiracionales diseñadas específicamente para jóvenes de 10 a 22 años, con el objetivo de conectarles directamente con los deportistas de élite de nuestra provincia. Damos la oportunidad a los deportistas de compartir sus historias —sus victorias, anécdotas y aprendizajes— convirtiéndose en modelos a seguir tangibles y cercanos.
            </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default IntroSection;