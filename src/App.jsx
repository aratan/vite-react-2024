import React, { useState } from 'react';
import { Home } from './pages/Home';
import { About } from './pages/About';
import {Api}  from './services/Api'; // Importa el componente Api
import {Cuadrado} from './pages/Cuadrado'; // Importa la página Cuadrado


import {Header} from './components/Header';
import {Sidebar} from './components/Sidebar';
import {Investor} from './pages/Investor';
import {Manager} from './pages/Manager';

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
    '/cuadrado': <Cuadrado />,
    '/header': <Header />,
    '/sidebar': <Sidebar />,
    '/investor': <Investor />,
    '/manager': <Manager />,
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
            {path === '/' ? 'INICIO' : 
            path === '/about' ? 'SOBRE NOSOTROS' : 
            path === '/api' ? 'API' : 
            path === '/cuadrado' ? 'CUADRADO' : 
            path === '/header' ? 'Header' : 
            path === '/sidebar' ? 'Sidebar' : 
            path === '/investor' ? 'Investor' : 
            path === '/manager' ? 'Manager' : ''}

          </button>
        ))}
      </nav>
    </div>

  );
}

export default App;
