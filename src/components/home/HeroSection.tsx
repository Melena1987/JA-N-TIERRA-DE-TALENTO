import React from 'react';
import FadeIn from '../ui/FadeIn';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed transform scale-105"
        style={{ 
          backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1760774201983_descarga.jpg?alt=media&token=15f97a16-6a29-444e-a2bd-4c84e5e4b5a0')",
        }}
      ></div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-[#F9F9F9]"></div>

      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center justify-center h-full pt-16">
        <FadeIn direction="down">
            <img 
                src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761021258073_Inspirando_el_futuro__celebrando_lo_nuestro.png?alt=media&token=b7a83ab1-7e5b-4739-892b-448ee4538834"
                alt="Jaén, Tierra de Talento Logo"
                className="w-full max-w-3xl drop-shadow-2xl mb-8 filter brightness-110 contrast-125"
            />
        </FadeIn>
        
        <FadeIn delay={300}>
            <a 
            href="#proyecto"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-[#D4AF37] font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-xl hover:bg-[#c5a028] hover:-translate-y-1"
            >
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-900"></span>
            <span className="relative uppercase tracking-widest">Conoce el Proyecto</span>
            <svg className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </a>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;