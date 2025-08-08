
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'react-zoom-pan-pinch'; // This import is for build tools; a CDN is used in index.html for this environment.

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
