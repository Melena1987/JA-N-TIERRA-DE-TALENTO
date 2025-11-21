import React from 'react';
import FadeIn from '../ui/FadeIn';

const ContactSection: React.FC = () => {
  return (
    <section 
        id="contacto" 
        className="relative py-24 bg-fixed bg-cover bg-center text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
    >
        <div className="absolute inset-0 bg-[#556B2F] bg-opacity-90"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
            <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Únete a la iniciativa</h2>
                <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-10"></div>
                <p className="text-xl mb-16 max-w-3xl mx-auto leading-relaxed font-light">
                    ¿Eres un centro educativo y quieres participar? ¿O una empresa que comparte nuestros valores? Escríbenos.
                </p>
            </FadeIn>
            
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
                <FadeIn delay={100}>
                    <a href="mailto:contacto@jaentalento.es" className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition duration-300 flex flex-col items-center w-full md:w-80">
                        <div className="bg-[#D4AF37] p-4 rounded-full mb-6 group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        <span className="text-xl font-bold mb-2">Email</span>
                        <span className="text-lg opacity-90">contacto@jaentalento.es</span>
                    </a>
                </FadeIn>
                
                <FadeIn delay={200}>
                    <a href="tel:+34618725333" className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition duration-300 flex flex-col items-center w-full md:w-80">
                         <div className="bg-[#D4AF37] p-4 rounded-full mb-6 group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        </div>
                        <span className="text-xl font-bold mb-2">Teléfono</span>
                        <span className="text-lg opacity-90">+34 618 72 53 33</span>
                    </a>
                </FadeIn>
            </div>

            <FadeIn delay={300}>
                <div className="inline-block">
                    <h3 className="text-lg font-semibold mb-6 text-[#D4AF37] uppercase tracking-widest">Redes Sociales</h3>
                    <div className="flex justify-center space-x-8">
                        <a href="#" className="text-white hover:text-[#D4AF37] transition duration-300 transform hover:-translate-y-1">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
                        </a>
                        <a href="#" className="text-white hover:text-[#D4AF37] transition duration-300 transform hover:-translate-y-1">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0-2a7 7 0 110 14 7 7 0 010-14zm6.406-2.34a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </FadeIn>
        </div>
    </section>
  );
};

export default ContactSection;