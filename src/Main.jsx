// Importamos React, que es la biblioteca que nos permite crear componentes de React.
import React from 'react';

// Importamos ReactDOM desde 'react-dom/client', que nos proporciona métodos específicos del DOM.
import ReactDOM from 'react-dom/client';


// Aquí se importaría el componente App desde './aryaApp', pero está comentado.
import App from './App'

// Importamos el componente Header desde './header'.
//import { Header } from './Header'
// import estilos
import './Main.css';


// Creamos una raíz de React en el elemento con id 'root' y renderizamos el componente Header en modo estricto.
// <Header title="COCO"/> //props del padre al hijo
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

