import React from 'https://esm.sh/react@18.3.1';
import { createRoot } from 'https://esm.sh/react-dom@18.3.1/client';
import { HelmetProvider } from 'https://esm.sh/react-helmet-async@2.0.5';
import { App } from './App.js';

createRoot(document.getElementById('root')).render(
  React.createElement(HelmetProvider, null, React.createElement(App)),
);
