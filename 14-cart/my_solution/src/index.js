import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppFunction from './functions_solution/AppFunction';
import { AppProvider } from './functions_solution/context';
import Ap
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <AppFunction />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
