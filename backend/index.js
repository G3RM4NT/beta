import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../frontend/src/App';
import './styles.css'; // Importa tus estilos globales

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

