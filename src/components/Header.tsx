import React from 'react';

const navLinks = [
  { name: 'Inicio', path: '/#home' },
  { name: 'El Proyecto', path: '/#proyecto' },
  { name: 'Objetivos', path: '/#objetivos' },
  { name: 'Colaboradores', path: '/#colaboradores' },
  { name: 'Contacto', path: '/#contacto' },
];

const Header: React.FC = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-3 flex justify-center md:justify-between items-center">
        <a href="/#home" className="hover:opacity-80 transition-opacity">
          <img src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761021258073_Inspirando_el_futuro__celebrando_lo_nuestro.png?alt=media&token=b7a83ab1-7e5b-4739-892b-448ee4538834" alt="Jaén, Tierra de Talento Logo" className="h-12 md:h-16" />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-gray-600 hover:text-[#D4AF37] font-medium text-sm uppercase tracking-wide transition duration-300 border-b-2 border-transparent hover:border-[#D4AF37] pb-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu is handled by MobileNavBar at bottom of screen */}
      </div>
    </header>
  );
};

export default Header;