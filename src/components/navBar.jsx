// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';  // Si vas a usar React Router para las rutas

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/explore">Explorar</Link></li>
        <li><Link to="/about">Acerca de</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
