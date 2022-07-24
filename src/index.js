import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { GlobalStyles } from './global-styles';
import 'normalize.css';

import { BrowserRouter } from 'react-router-dom';


const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);
