import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/index.css';

import Header from './components/Header';
import Projects from './components/Project';
import Services from './components/Services';
import Contacts from './components/Contacts'
import Copyright from './components/CopyRight';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const header = ReactDOM.createRoot(document.querySelector('.top-container'))

header.render(
  <Header />
)

root.render(
  <React.StrictMode>
  <App />
  <Projects />
  <Services />
  <Contacts />
  <Copyright />
  </React.StrictMode>
);

