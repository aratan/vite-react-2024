import React, { useState } from 'react';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Api } from './services/Api'; // Importa el componente Api

function App() {
  const [currentPage, setCurrentPage] = useState('/');

  const handleNavigation = (path) => {
    setCurrentPage(path);
    window.history.pushState({}, '', path); // Usa window.history para cambiar la URL
  };

  // Objeto de rutas estático
  const routeComponents = {
    '/': <Home />,
    '/about': <About />,
    '/api': <Api />, // Asocia la ruta '/api' con el componente Api
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Renderizar el componente correspondiente a la página actual */}
      {routeComponents[currentPage]}

      <nav style={{ marginTop: '20px' }}>
        {/* Renderizar los enlaces de navegación */}
        {Object.keys(routeComponents).map((path) => (
          <button
            key={path}
            onClick={() => handleNavigation(path)}
            style={{
              marginRight: '10px',
              padding: '8px 16px',
              backgroundColor: currentPage === path ? '#007bff' : '#e9ecef',
              color: currentPage === path ? '#fff' : '#000',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {path === '/' ? 'INICIO' : path === '/about' ? 'SOBRE NOSOTROS' : 'API'}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default App;
