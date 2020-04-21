import React from 'react';
import { Provider } from 'react-redux';
import { reduxStore } from './reduxStore';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './fontawesomeSetup';

import Resume from './components/Resume';

function App() {
  const store = reduxStore();
  return (
    <Provider store={store}>
      <Resume />
    </Provider>
  );
}

export default App;