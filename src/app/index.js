import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './containers/Route.js';

const App = () => {
  return (
    <div>
      <h1>Main Application</h1>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default App;