import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//Tout les document vont ver le root fait un rendue/ Render 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


