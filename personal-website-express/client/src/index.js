import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Set dark mode as default
try {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === null) {
    // No saved preference, set dark as default
    localStorage.setItem('theme', 'dark');
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  } else if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.setAttribute('data-theme', 'light');
  }
} catch (e) {
  // Fallback to dark mode if localStorage is not available
  document.documentElement.classList.add('dark');
  document.documentElement.setAttribute('data-theme', 'dark');
}

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
      <BrowserRouter basename="/personal-website">
        <App />
      </BrowserRouter>
    );
    console.log('App rendered successfully');
  } catch (error) {
    console.error('Error rendering app:', error);
    container.innerHTML = '<h1 style="color: white; padding: 20px;">Error loading app: ' + error.message + '</h1>';
  }
}
