import React from 'react';
import ReactDOM from 'react-dom/client';  // Note /client import for React 18
import App from './App';
import { CartProvider } from './components/CartContext'; // if you use this context

// Create root container for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your app wrapped in any providers needed
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
