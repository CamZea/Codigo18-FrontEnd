import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
//index.css cargaremos los componentes de tailwind
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
