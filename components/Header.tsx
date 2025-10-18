import React, { useState } from 'react';

const navLinks = [
  { name: 'Inicio', path: '/#home' },
  { name: 'El Proyecto', path: '/#proyecto' },
  { name: 'Eventos', path: '/#eventos' },
  { name: 'Colaboradores', path: '/#colaboradores' },
  { name: 'Contacto', path: '/#contacto' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <a href="/#home">
          <img src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1760774446775_Inspirando_el_futuro__celebrando_lo_nuestro__1_.png?alt=media&token=af64f4d8-ece6-4e49-a834-924e2ef90b63" alt="Jaén, Tierra de Talento Logo" className="h-16" />
        </a>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-gray-600 hover:text-[#D4AF37] transition duration-300 pb-1"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#556B2F] focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-[#D4AF37] transition duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;