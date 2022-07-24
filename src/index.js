import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { GlobalStyles } from './global-styles';
import 'normalize.css';

import { FirebaseContext } from './context/firebase';
import { firebase } from './services/firebase';

import { BrowserRouter } from 'react-router-dom';


const root = createRoot(document.getElementById('root'));
root.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FirebaseContext.Provider>
);
