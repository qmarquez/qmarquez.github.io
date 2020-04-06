import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import { reduxStore } from './reduxStore';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './fontawesomeSetup';

import Switch from './Switch';

function App() {
  const store = reduxStore();
  return (
    <Provider store={store}>
      <Router>
        <Switch/>
      </Router>
    </Provider>
  );
}

export default App;