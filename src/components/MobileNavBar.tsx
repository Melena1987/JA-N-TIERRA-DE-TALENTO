import React from 'react';
import { useLocation } from 'react-router-dom';

const MobileNavBar: React.FC = () => {
  const location = useLocation();
  
  // Only show on home page or adjust logic as needed
  if (location.pathname !== '/' && location.pathname !== '/legal') return null;

  const NavItem: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
    <a href={href} className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-[#D4AF37] active:text-[#556B2F] transition-colors group">
      <div className="mb-1 group-hover:-translate-y-1 transition-transform duration-200">
        {icon}
      </div>
      <span className="text-[10px] uppercase font-bold tracking-wider">{label}</span>
    </a>
  );

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-20 bg-white/90 backdrop-blur-lg border-t border-gray-200 md:hidden shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
      <div className="grid h-full grid-cols-4 mx-auto">
        <NavItem 
            href="#home" 
            label="Inicio" 
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>} 
        />
        <NavItem 
            href="#proyecto" 
            label="Proyecto" 
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>} 
        />
        <NavItem 
            href="#objetivos" 
            label="Objetivos" 
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>} 
        />
        <NavItem 
            href="#contacto" 
            label="Contacto" 
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>} 
        />
      </div>
    </div>
  );
};

export default MobileNavBar;