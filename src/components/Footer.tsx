

import React from 'react';

function Footer() {
  return (
    <footer className=" flex items-center justify-center p-4 bg-gray-800 text-white z-20">
      <p className="text-sm">
        © {new Date().getFullYear()} De Moya Group & Asociados. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;