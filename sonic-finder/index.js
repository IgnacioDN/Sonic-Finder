import React from 'react';
import ReactDOM from 'react-dom/client'; // Usamos el nuevo método para crear el root
import App from '../src/App';  // Asegúrate de que la ruta esté correcta

const root = ReactDOM.createRoot(document.getElementById('root')); // Creación del root

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
