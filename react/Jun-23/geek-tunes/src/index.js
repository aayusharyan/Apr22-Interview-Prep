import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import slice from './slice';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore({ reducer: slice });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
