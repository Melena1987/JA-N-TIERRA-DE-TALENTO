import React from 'react';

// Helper Components
const PillarCard: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
        <div className="flex justify-center items-center mb-6 text-[#556B2F]">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-4 text-[#556B2F] uppercase">{title}</h3>
        <p className="text-gray-600 flex-grow leading-relaxed">{text}</p>
    </div>
);

const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
    <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#556B2F]">{title}</h2>
        <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4"></div>
    </div>
);

const LogoCard: React.FC<{ src: string; alt: string; size: 'large' | 'medium' }> = ({ src, alt, size }) => {
    const sizeClass = size === 'large' ? 'h-24 md:h-32' : 'h-16 md:h-20';
    return (
        <div className="p-4 bg-white rounded-lg shadow-md flex justify-center items-center">
            <img src={src} alt={alt} className={`${sizeClass} grayscale hover:grayscale-0 transition duration-300 object-contain`} />
        </div>
    );
};

const SocialIcon: React.FC<{ children: React.ReactNode; href: string }> = ({ children, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#556B2F] hover:text-[#D4AF37] transition duration-300">
    {children}
  </a>
);

// Main Home Page Component
const HomePage: React.FC = () => {
  return (
    <div className="bg-[#F9F9F9]">
      {/* Hero Section */}
      <section 
        id="home"
        className="relative h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{ 
          backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1760774201983_descarga.jpg?alt=media&token=15f97a16-6a29-444e-a2bd-4c84e5e4b5a0')",
          backgroundAttachment: 'fixed' 
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-60"></div>
        <div className="relative z-10 text-center p-4 flex flex-col items-center">
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761021258073_Inspirando_el_futuro__celebrando_lo_nuestro.png?alt=media&token=b7a83ab1-7e5b-4739-892b-448ee4538834"
            alt="Jaén, Tierra de Talento Logo"
            className="w-full max-w-3xl px-4 [filter:drop-shadow(0_0_10px_rgba(0,0,0,0.3))]"
          />
          <a 
            href="#proyecto"
            className="mt-8 inline-block bg-[#D4AF37] text-white font-bold py-3 px-10 rounded-full uppercase tracking-wider hover:bg-opacity-90 transition duration-300 shadow-lg"
          >
            Conoce el Proyecto
          </a>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#556B2F] mb-4 uppercase">JAÉN, TIERRA DE TALENTO</h2>
          <p className="text-xl text-[#D4AF37] font-semibold mb-6">Conectando a nuestros jóvenes con nuestros referentes.</p>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-10"></div>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            "Jaén, Tierra de Talento" es una iniciativa social y formativa liderada por el ex-deportista de élite Alfonso Sánchez. El proyecto consiste en un ciclo de conferencias inspiracionales diseñadas específicamente para jóvenes de 10 a 22 años, con el objetivo de conectarles directamente con los deportistas de élite de nuestra provincia. Damos la oportunidad a los deportistas de compartir sus historias —sus victorias, anécdotas y aprendizajes— convirtiéndose en modelos a seguir tangibles y cercanos.
          </p>
        </div>
      </section>

      {/* Pillars Section (Objetivos) */}
      <section id="objetivos" className="py-20 bg-[#F9F9F9]">
        <div className="container mx-auto px-6">
          <SectionTitle title="Nuestros Objetivos" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PillarCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>}
                title="GENERAR REFERENTES"
                text="Crear modelos a seguir positivos, accesibles y reales para los jóvenes de Jaén, demostrando que el éxito es posible naciendo y creciendo aquí."
            />
            <PillarCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                title="FOMENTAR VALORES"
                text="Utilizar las historias de superación personal para transmitir valores fundamentales como la disciplina, la constancia, la resiliencia y la cultura del esfuerzo."
            />
            <PillarCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>}
                title="VISIBILIZAR EL TALENTO"
                text="Ofrecer un altavoz de prestigio a los deportistas de Jaén para que reciban el reconocimiento social que merecen."
            />
            <PillarCard
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}
                title="SENTIMIENTO DE PERTENENCIA"
                text="Fortalecer el vínculo de la sociedad y los jóvenes con la identidad deportiva de Jaén."
            />
          </div>
        </div>
      </section>

      {/* Project Leadership Section */}
      <section id="proyecto" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle title="Dirección del Proyecto: Alfonso Sánchez" />
          <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
            <div className="md:w-1/3">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1760775189990_Alfonso_S_nchez_THE_EMBASSY.jpg?alt=media&token=f7b09ca3-25b6-4b5b-ae4c-a7950b9aca18" 
                alt="Alfonso Sánchez"
                className="rounded-lg shadow-2xl w-full object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-3xl font-bold text-[#556B2F] mb-6">Del deporte de élite a la formación.</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                El proyecto está diseñado y dirigido por Alfonso Sánchez, figura del deporte jiennense. Como ex-deportista de élite y siendo el jugador nacido en Jaén con más partidos disputados en la ACB, Alfonso conoce de primera mano el camino del sacrificio y la gestión del éxito.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                En "Jaén, Tierra de Talento", actúa como presentador y moderador, facilitando un diálogo cercano y auténtico entre los ponentes y los estudiantes, asegurando que el mensaje llegue con fuerza e impacto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Format Section (Replaces specific Events) */}
      <section className="py-20 bg-[#F9F9F9]">
        <div className="container mx-auto px-6 text-center">
          <SectionTitle title="Nuestro Formato" />
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              El proyecto se articula como un ciclo de conferencias en espacios emblemáticos de la provincia y centros educativos. Cada jornada tiene una duración aproximada de <strong>90 a 120 minutos</strong>, creando un ambiente dinámico donde los estudiantes no solo escuchan, sino que pueden preguntar directamente a sus referentes.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-8">
               <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                   <h4 className="text-[#556B2F] font-bold text-xl mb-2">Espacios Emblemáticos</h4>
                   <p className="text-gray-600">Teatros y auditorios para grandes encuentros.</p>
               </div>
               <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                   <h4 className="text-[#556B2F] font-bold text-xl mb-2">Centros Educativos</h4>
                   <p className="text-gray-600">Visitas directas a colegios e institutos.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborators Section */}
      <section id="colaboradores" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
              <SectionTitle title="Impulsan este proyecto" />
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
                Una iniciativa posible gracias al apoyo de instituciones y empresas comprometidas con el futuro de Jaén y el desarrollo de nuestros jóvenes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-20">
                <LogoCard src="https://picsum.photos/seed/ayuntamiento-lg/300/150" alt="Ayuntamiento de Jaén" size="large" />
                <LogoCard src="https://picsum.photos/seed/diputacion-lg/300/150" alt="Diputación de Jaén" size="large" />
              </div>
          </div>
          <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#556B2F] mb-8">Partners</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <LogoCard src="https://picsum.photos/seed/partner1/200/100" alt="Partner 1" size="medium" />
                <LogoCard src="https://picsum.photos/seed/partner2/200/100" alt="Partner 2" size="medium" />
                <LogoCard src="https://picsum.photos/seed/partner3/200/100" alt="Partner 3" size="medium" />
                <LogoCard src="https://picsum.photos/seed/partner4/200/100" alt="Partner 4" size="medium" />
              </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-[#556B2F] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Únete a la iniciativa</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            ¿Eres un centro educativo y quieres participar? ¿O una empresa que comparte nuestros valores y quiere apoyar el talento de Jaén? Escríbenos, queremos contar contigo.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-12">
            <div className="flex items-center space-x-4 bg-white bg-opacity-10 p-4 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <a href="mailto:contacto@jaentalento.es" className="text-xl hover:text-[#D4AF37] transition duration-300 font-semibold">contacto@jaentalento.es</a>
            </div>
             <div className="flex items-center space-x-4 bg-white bg-opacity-10 p-4 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <a href="tel:+34618725333" className="text-xl hover:text-[#D4AF37] transition duration-300 font-semibold">+34 618 72 53 33</a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#D4AF37]">Síguenos en redes</h3>
            <div className="flex justify-center space-x-6">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#D4AF37] transition duration-300 transform hover:scale-110">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#D4AF37] transition duration-300 transform hover:scale-110">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0-2a7 7 0 110 14 7 7 0 010-14zm6.406-2.34a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;