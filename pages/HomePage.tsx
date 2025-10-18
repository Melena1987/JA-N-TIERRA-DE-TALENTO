import React from 'react';

// Helper Components from other pages
const PillarCard: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
        <div className="flex justify-center items-center mb-4 text-[#556B2F]">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-[#556B2F]">{title}</h3>
        <p className="text-gray-600">{text}</p>
    </div>
);

const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
    <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#556B2F]">{title}</h2>
        <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4"></div>
    </div>
);

interface EventProps {
  title: string;
  speakers: string[];
  date: string;
  location: string;
  description: string;
  audience: string;
}

const EventCard: React.FC<EventProps> = ({ title, speakers, date, location, description, audience }) => (
  <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-12 transform hover:scale-105 transition-transform duration-300">
    <div className="p-8">
      <div className="flex items-baseline">
        <span className="inline-block bg-[#556B2F] text-white text-xs px-2 rounded-full uppercase font-semibold tracking-wide">Evento</span>
      </div>
      <h3 className="mt-2 text-2xl font-bold text-[#556B2F]">{title}</h3>
      <p className="mt-2 text-lg text-[#D4AF37] font-semibold">{speakers.join(' y ')}</p>
      <div className="mt-4 text-gray-600">
        <p><span className="font-bold">Fecha y Hora:</span> {date}</p>
        <p><span className="font-bold">Lugar:</span> {location}</p>
        <p><span className="font-bold">Público:</span> {audience}</p>
      </div>
      <p className="mt-4 text-gray-700">{description}</p>
    </div>
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
  const events: EventProps[] = [
    {
      title: 'Charla Inaugural: "El camino de la superación"',
      speakers: ['Alfonso Sánchez'],
      date: '15 de Octubre, 2025 - 11:00h',
      location: 'Salón de Actos de la Universidad de Jaén',
      description: 'Charla sobre la resiliencia, la gestión de las lesiones y la cultura del esfuerzo en el deporte de élite.',
      audience: 'Alumnos de 3º y 4º de ESO',
    },
    {
      title: 'Talento Oculto: Historias de Jaén en la élite',
      speakers: ['María Pérez (Atleta)', 'Carlos García (Futbolista)'],
      date: '22 de Noviembre, 2025 - 11:00h',
      location: 'Teatro Darymelia',
      description: 'Un diálogo abierto sobre los desafíos y éxitos de los deportistas de Jaén que compiten al más alto nivel.',
      audience: 'Alumnos de 1º y 2º de ESO',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
  };

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
            src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1760773929932_ja_n_Tirra_de_talento_logo.png?alt=media&token=1ad550b3-5cd5-4f28-b6b5-a4b28fc6f829"
            alt="Jaén, Tierra de Talento Logo"
            className="h-80 md:h-[30rem] [filter:drop-shadow(0_0_10px_rgba(255,255,255,0.7))]"
          />
          <a 
            href="#proyecto"
            className="mt-4 inline-block bg-[#D4AF37] text-white font-bold py-3 px-8 rounded-full uppercase tracking-wider hover:bg-opacity-90 transition duration-300"
          >
            Descubre el Proyecto
          </a>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#556B2F] mb-4">Conectando a nuestros jóvenes con nuestros referentes.</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            "JAÉN, TIERRA DE TALENTO" es una iniciativa social y formativa liderada por el ex-deportista de élite Alfonso Sánchez. Organizamos un ciclo de conferencias inspiradoras para jóvenes de 12 a 16 años, donde damos a conocer y ponemos en valor a los deportistas de nuestra tierra. No es un homenaje, es un altavoz para construir el futuro.
          </p>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 bg-[#F9F9F9]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PillarCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>}
                title="GENERAR REFERENTES"
                text="Creamos modelos a seguir positivos y accesibles para la juventud de Jaén."
            />
            <PillarCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                title="FOMENTAR VALORES"
                text="Usamos el deporte como herramienta para educar en la cultura del esfuerzo, la resiliencia y la superación."
            />
            <PillarCard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>}
                title="VISIBILIZAR EL TALENTO"
                text="Damos voz a las historias de éxito y superación de los deportistas locales."
            />
            <PillarCard
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}
                title="CREAR PERTENENCIA"
                text="Fortalecemos el orgullo y el vínculo de la sociedad con los equipos y deportistas de Jaén."
            />
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section id="proyecto" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle title="Creemos en el talento de nuestra tierra." />
          <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center leading-relaxed mb-20">
            El proyecto nace de la necesidad de mostrar a los más jóvenes que el éxito es posible sin salir de casa, que en Jaén hay historias increíbles de esfuerzo y superación. Queremos que cada joven encuentre su inspiración en un referente cercano, en alguien que ha recorrido su mismo camino.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/3">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1760775189990_Alfonso_S_nchez_THE_EMBASSY.jpg?alt=media&token=f7b09ca3-25b6-4b5b-ae4c-a7950b9aca18" 
                alt="Alfonso Sánchez"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-3xl font-bold text-[#556B2F] mb-4">Alfonso Sánchez, el altavoz del talento.</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                "Tras una larga carrera como deportista de élite y ser el jugador nacido en Jaén con más partidos en ACB, mi objetivo ahora es devolver a mi tierra todo lo que me ha dado. Actúo como presentador y moderador de estas jornadas, conectando las historias de nuestros deportistas con las inquietudes de nuestros jóvenes."
              </p>
            </div>
          </div>
          <SectionTitle title="¿Cómo lo hacemos?" />
          <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center leading-relaxed">
            Realizamos un ciclo de 2 a 4 grandes conferencias por temporada en espacios emblemáticos de la ciudad. Invitamos a deportistas locales (atletas, futbolistas, jugadores de baloncesto...) para que compartan sus historias en un formato dinámico y participativo, dirigido a estudiantes de ESO de los centros educativos de Jaén.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section id="eventos" className="py-20 bg-[#F9F9F9]">
        <div className="container mx-auto px-6">
          <SectionTitle title="Agenda de Eventos 2025-2026" />
          <div className="max-w-4xl mx-auto mb-20">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
          <div className="bg-white py-16 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-bold text-[#556B2F] mb-4">¿Quieres que tu colegio participe?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Si eres un centro educativo de Jaén y estás interesado en que tus alumnos asistan a nuestras jornadas formativas, ponte en contacto con nosotros.
            </p>
            <a 
              href="#contacto" 
              className="inline-block bg-[#D4AF37] text-white font-bold py-3 px-8 rounded-full uppercase tracking-wider hover:bg-opacity-90 transition duration-300"
            >
              Contactar
            </a>
          </div>
        </div>
      </section>

      {/* Collaborators Section */}
      <section id="colaboradores" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
              <SectionTitle title="Gracias por creer en Jaén" />
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
                Este proyecto no sería posible sin el apoyo fundamental de las instituciones y empresas que apuestan por el futuro de nuestra juventud y el talento de nuestra provincia.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-20">
                <LogoCard src="https://picsum.photos/seed/ayuntamiento-lg/300/150" alt="Ayuntamiento de Jaén" size="large" />
                <LogoCard src="https://picsum.photos/seed/diputacion-lg/300/150" alt="Diputación de Jaén" size="large" />
              </div>
          </div>
          <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-[#556B2F]">Nuestros Partners</h2>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4 mb-12"></div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <LogoCard src="https://picsum.photos/seed/partner1/200/100" alt="Partner 1" size="medium" />
                <LogoCard src="https://picsum.photos/seed/partner2/200/100" alt="Partner 2" size="medium" />
                <LogoCard src="https://picsum.photos/seed/partner3/200/100" alt="Partner 3" size="medium" />
                <LogoCard src="https://picsum.photos/seed/partner4/200/100" alt="Partner 4" size="medium" />
              </div>
          </div>
           <div className="bg-[#F9F9F9] py-16 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-bold text-[#556B2F] mb-4">¿Quieres ser parte del cambio?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Si eres una empresa o entidad y compartes nuestros valores, contacta con nosotros para explorar vías de colaboración.
            </p>
            <a 
              href="#contacto" 
              className="inline-block bg-[#D4AF37] text-white font-bold py-3 px-8 rounded-full uppercase tracking-wider hover:bg-opacity-90 transition duration-300"
            >
              Quiero Colaborar
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-[#F9F9F9]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#556B2F] mb-2">Hablemos</h2>
              <div className="w-16 h-1 bg-[#D4AF37] mb-6"></div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Para consultas sobre asistencia de colegios, propuestas de patrocinio o entrevistas de prensa, puedes rellenar este formulario o escribirnos directamente.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#556B2F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <a href="mailto:contacto@jaentalento.es" className="text-gray-700 hover:text-[#D4AF37]">contacto@jaentalento.es</a>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-[#556B2F] mb-4">Redes Sociales</h3>
                <div className="flex justify-start mt-4 space-x-6">
                  <SocialIcon href="#">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
                  </SocialIcon>
                  <SocialIcon href="#">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0-2a7 7 0 110 14 7 7 0 010-14zm6.406-2.34a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd"></path></svg>
                  </SocialIcon>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                  <input type="text" id="name" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37]" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37]" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono <span className="text-xs text-gray-500">(Opcional)</span></label>
                  <input type="tel" id="phone" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37]" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Asunto</label>
                  <select id="subject" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37]">
                    <option>Centros Educativos</option>
                    <option>Patrocinio</option>
                    <option>Prensa</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                  <textarea id="message" rows={5} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37]"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-[#D4AF37] text-white font-bold py-3 px-8 rounded-full uppercase tracking-wider hover:bg-opacity-90 transition duration-300">
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;