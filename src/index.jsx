import React from 'react'
import App from './App'

import './index.css'
import './resources/GeneralStyles.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import {BrowserRouter as Router} from 'react-router-dom';
import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 👇️ wrap App in Router

root.render(
  <Router>
    <App />
  </Router>
);