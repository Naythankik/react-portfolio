import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/index.css';

import Header from './components/Header';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const header = ReactDOM.createRoot(document.querySelector('.top-container'))

header.render(
  <Header />
)

root.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>
);

