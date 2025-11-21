import React from 'react';
import FadeIn from '../ui/FadeIn';

const LogoCard: React.FC<{ src: string; alt: string; size: 'large' | 'medium' }> = ({ src, alt, size }) => {
    const sizeClass = size === 'large' ? 'h-24 md:h-32' : 'h-16 md:h-20';
    return (
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 flex justify-center items-center hover:shadow-md transition-shadow duration-300">
            <img src={src} alt={alt} className={`${sizeClass} grayscale hover:grayscale-0 transition duration-300 object-contain opacity-70 hover:opacity-100`} />
        </div>
    );
};

const CollaboratorsSection: React.FC = () => {
  return (
    <section id="colaboradores" className="py-24 bg-[#F9F9F9]">
        <div className="container mx-auto px-6">
            
            {/* Instituciones */}
            <div className="text-center mb-20">
                <FadeIn>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#556B2F] mb-6">Impulsan este proyecto</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
                        Una iniciativa posible gracias al apoyo de instituciones y empresas comprometidas con el futuro de Jaén.
                    </p>
                </FadeIn>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    <FadeIn delay={100}>
                        <LogoCard src="https://picsum.photos/seed/ayuntamiento-lg/300/150" alt="Ayuntamiento de Jaén" size="large" />
                    </FadeIn>
                    <FadeIn delay={200}>
                        <LogoCard src="https://picsum.photos/seed/diputacion-lg/300/150" alt="Diputación de Jaén" size="large" />
                    </FadeIn>
                </div>
            </div>

            {/* Partners */}
            <div className="text-center">
                 <FadeIn>
                    <div className="flex items-center justify-center mb-10">
                        <div className="h-px bg-gray-300 w-24"></div>
                        <h3 className="text-xl font-bold text-gray-400 uppercase px-4">Partners</h3>
                        <div className="h-px bg-gray-300 w-24"></div>
                    </div>
                </FadeIn>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                        <FadeIn key={i} delay={100 * i}>
                            <LogoCard src={`https://picsum.photos/seed/partner${i}/200/100`} alt={`Partner ${i}`} size="medium" />
                        </FadeIn>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default CollaboratorsSection;