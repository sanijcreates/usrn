import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { render } from "react-dom";                 // add this

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, document.getElementById('root')
);

