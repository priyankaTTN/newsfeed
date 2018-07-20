import React from 'react';
import { render } from 'react-dom';
import App from './app';
import store from './app/store';
import { Provider } from 'react-redux';

const app = document.querySelector('#app');

// Render main application
render(<Provider store={store}><App /></Provider>, app);