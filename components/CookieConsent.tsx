import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent !== 'true') {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#333333] text-white p-4 z-[100]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-sm mb-4 md:mb-0 md:mr-4">
          Utilizamos cookies para mejorar tu experiencia en nuestra web. Al continuar navegando, aceptas nuestro uso de cookies. Para más información, consulta nuestra{' '}
          <Link to="/legal" className="underline hover:text-[#D4AF37] transition duration-300">
            Política de Privacidad
          </Link>.
        </p>
        <button
          onClick={handleAccept}
          className="bg-[#D4AF37] text-white font-bold py-2 px-6 rounded-full uppercase tracking-wider hover:bg-opacity-90 transition duration-300 whitespace-nowrap"
          aria-label="Aceptar el uso de cookies"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;