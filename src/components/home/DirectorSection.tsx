import React from 'react';
import FadeIn from '../ui/FadeIn';

const DirectorSection: React.FC = () => {
  return (
    <section id="proyecto" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                
                <div className="lg:w-1/2 relative group">
                    <FadeIn direction="right">
                        <div className="absolute inset-0 bg-[#D4AF37] rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-20"></div>
                        <div className="absolute inset-0 bg-[#556B2F] rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500 opacity-20"></div>
                        <img 
                            src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1760775189990_Alfonso_S_nchez_THE_EMBASSY.jpg?alt=media&token=f7b09ca3-25b6-4b5b-ae4c-a7950b9aca18" 
                            alt="Alfonso Sánchez"
                            className="relative rounded-2xl shadow-2xl w-full object-cover z-10 grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                        {/* Badge */}
                        <div className="absolute bottom-8 left-8 z-20 bg-white/90 backdrop-blur p-4 rounded-lg shadow-lg border-l-4 border-[#556B2F]">
                            <p className="text-sm text-gray-500 uppercase tracking-wide font-bold">Director del Proyecto</p>
                            <p className="text-xl font-bold text-[#556B2F]">Alfonso Sánchez</p>
                        </div>
                    </FadeIn>
                </div>

                <div className="lg:w-1/2">
                    <FadeIn direction="left">
                        <h4 className="text-[#D4AF37] font-bold tracking-widest uppercase mb-2">Dirección</h4>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#556B2F] mb-8 leading-tight">Del deporte de élite a la formación de futuro.</h2>
                        
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                El proyecto está diseñado y dirigido por <strong className="text-gray-800">Alfonso Sánchez</strong>, figura del deporte jiennense. Como ex-deportista de élite y siendo el jugador nacido en Jaén con más partidos disputados en la ACB, Alfonso conoce de primera mano el camino del sacrificio y la gestión del éxito.
                            </p>
                            <p>
                                En "Jaén, Tierra de Talento", actúa como <span className="bg-[#D4AF37]/20 px-2 py-1 rounded">presentador y moderador</span>, facilitando un diálogo cercano y auténtico entre los ponentes y los estudiantes, asegurando que el mensaje llegue con fuerza e impacto.
                            </p>
                        </div>
                        
                        <div className="mt-10 flex items-center space-x-4">
                             <div className="h-px bg-gray-300 flex-1"></div>
                             <span className="text-[#556B2F] font-serif italic">Liderazgo y Pasión</span>
                             <div className="h-px bg-gray-300 flex-1"></div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    </section>
  );
};

export default DirectorSection;