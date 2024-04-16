import React, { useState } from 'react';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Api } from './services/Api';
import { Cuadrado } from './components/Cuadrado';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Investor } from './pages/Investor';
import { Manager } from './pages/Manager';

function App() {
  const [currentPage, setCurrentPage] = useState('/');

  const handleNavigation = (path) => {
    setCurrentPage(path);
  };

  const routeComponents = {
    '/': <Home />,
    '/about': <About />,
    '/api': <Api />,
    '/cuadrado': <Cuadrado />,
    '/header': <Header />,
    '/sidebar': <Sidebar />,
    '/investor': <Investor />,
    '/manager': <Manager />,
  };

  return (
    <>
      {/* Header con fondo verde */}
      <div style={{ backgroundColor: 'green', padding: '10px', color: 'white', textAlign: 'center' }}>
        <h1>Header - Fondo Verde</h1>
      </div>

      {/* Sidebar con fondo azul */}
      <div style={{ display: 'flex', fontFamily: 'Arial, sans-serif' }}>
        <div style={{ backgroundColor: 'blue', color: 'white', width: '200px', padding: '20px' }}>
          <h2>Sidebar - Fondo Azul</h2>
          <ul>
            <li onClick={() => handleNavigation('/')}>Inicio</li>
            <li onClick={() => handleNavigation('/about')}>Sobre Nosotros</li>
            <li onClick={() => handleNavigation('/api')}>API</li>
            <li onClick={() => handleNavigation('/cuadrado')}>Cuadrado</li>
            <li onClick={() => handleNavigation('/header')}>Header</li>
            <li onClick={() => handleNavigation('/sidebar')}>Sidebar</li>
            <li onClick={() => handleNavigation('/investor')}>Inversor</li>
            <li onClick={() => handleNavigation('/manager')}>Gestor</li>
          </ul>
        </div>

        {/* Contenido principal */}
        <div style={{ flex: 1, padding: '20px' }}>
          {/* Renderizar el componente correspondiente a la página actual */}
          {routeComponents[currentPage]}
        </div>
      </div>

      {/* Barra de navegación */}
      <nav style={{ marginTop: '20px', textAlign: 'center' }}>
        {/* Renderizar los botones de navegación */}
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
                    path === '/header' ? 'HEADER' :
                      path === '/sidebar' ? 'SIDEBAR' :
                        path === '/investor' ? 'INVERSOR' :
                          path === '/manager' ? 'GESTOR' : ''}
          </button>
        ))}
      </nav>
    </>
  );
}

export default App;
