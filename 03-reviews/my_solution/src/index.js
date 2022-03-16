import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppClass from './classes_solution/AppClass';
import AppFunction from './functions_solution/AppFunction';

ReactDOM.render(
  <React.StrictMode>
    <AppClass />
    <AppFunction />
  </React.StrictMode>,
  document.getElementById('root')
);
