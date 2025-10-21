import React from 'react';
import { Link } from 'react-router-dom';


const SocialIcon: React.FC<{ children: React.ReactNode; href: string }> = ({ children, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D4AF37] transition duration-300">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#333333] text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <a href="/#home">
              <img src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761021258073_Inspirando_el_futuro__celebrando_lo_nuestro.png?alt=media&token=b7a83ab1-7e5b-4739-892b-448ee4538834" alt="Jaén, Tierra de Talento Logo" className="w-56 mx-auto md:mx-0" />
            </a>
          </div>
          <div>
            <h4 className="font-semibold uppercase text-gray-200">Navegación</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="/#home" className="text-gray-400 hover:text-[#D4AF37] transition duration-300">Inicio</a></li>
              <li><a href="/#proyecto" className="text-gray-400 hover:text-[#D4AF37] transition duration-300">El Proyecto</a></li>
              <li><a href="/#eventos" className="text-gray-400 hover:text-[#D4AF37] transition duration-300">Eventos</a></li>
              <li><a href="/#colaboradores" className="text-gray-400 hover:text-[#D4AF37] transition duration-300">Colaboradores</a></li>
              <li><a href="/#contacto" className="text-gray-400 hover:text-[#D4AF37] transition duration-300">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold uppercase text-gray-200">Síguenos</h4>
            <div className="flex justify-center md:justify-start mt-4 space-x-4">
              <SocialIcon href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
              </SocialIcon>
              <SocialIcon href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0-2a7 7 0 110 14 7 7 0 010-14zm6.406-2.34a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd"></path></svg>
              </SocialIcon>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Jaén, Tierra de Talento. Todos los derechos reservados.</p>
          <p className="mt-2">
            <Link to="/legal#aviso-legal" className="hover:text-[#D4AF37] transition duration-300">Aviso Legal</Link>
            <span className="mx-2">|</span>
            <Link to="/legal#politica-privacidad" className="hover:text-[#D4AF37] transition duration-300">Política de Privacidad</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
