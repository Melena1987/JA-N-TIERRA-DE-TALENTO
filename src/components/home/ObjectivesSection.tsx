import React from 'react';
import FadeIn from '../ui/FadeIn';

const PillarCard: React.FC<{ icon: React.ReactNode; title: string; text: string; delay: number }> = ({ icon, title, text, delay }) => (
    <FadeIn delay={delay} className="h-full">
        <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 border-t-4 border-t-[#D4AF37] transform transition-all duration-300 hover:-translate-y-2 h-full flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[#556B2F] opacity-5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            
            <div className="flex justify-center items-center mb-6 text-[#556B2F] group-hover:text-[#D4AF37] transition-colors duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-[#556B2F] uppercase tracking-wider">{title}</h3>
            <p className="text-gray-600 flex-grow leading-relaxed text-sm md:text-base">{text}</p>
        </div>
    </FadeIn>
);

const ObjectivesSection: React.FC = () => {
  return (
    <section id="objetivos" className="py-24 bg-[#F0F2F5] relative">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#556B2F 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                <FadeIn>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#556B2F] uppercase">Nuestros Objetivos</h2>
                    <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
                </FadeIn>
            </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PillarCard 
                delay={0}
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>}
                title="Generar Referentes"
                text="Crear modelos a seguir positivos, accesibles y reales para los jóvenes de Jaén, demostrando que el éxito es posible naciendo y creciendo aquí."
            />
            <PillarCard 
                delay={100}
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                title="Fomentar Valores"
                text="Utilizar las historias de superación personal para transmitir valores fundamentales como la disciplina, la constancia, la resiliencia y la cultura del esfuerzo."
            />
            <PillarCard 
                delay={200}
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>}
                title="Visibilizar el Talento"
                text="Ofrecer un altavoz de prestigio a los deportistas de Jaén para que reciban el reconocimiento social que merecen."
            />
            <PillarCard
                delay={300}
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}
                title="Sentimiento de Pertenencia"
                text="Fortalecer el vínculo de la sociedad y los jóvenes con la identidad deportiva de Jaén."
            />
          </div>
        </div>
    </section>
  );
};

export default ObjectivesSection;