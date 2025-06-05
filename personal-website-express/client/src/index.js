import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

console.log('React app starting...');

const container = document.getElementById('root');
console.log('Root container:', container);

if (!container) {
  console.error('Root container not found!');
  document.body.innerHTML = '<h1 style="color: white; padding: 20px;">Error: Root container not found</h1>';
} else {
  try {
    const root = createRoot(container);
    console.log('Root created, rendering app...');
    root.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    console.log('App rendered successfully');
  } catch (error) {
    console.error('Error rendering app:', error);
    container.innerHTML = '<h1 style="color: white; padding: 20px;">Error loading app: ' + error.message + '</h1>';
  }
}
