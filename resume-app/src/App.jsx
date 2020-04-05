import React from 'react';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { reduxStore } from './reduxStore';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './fontawesomeSetup';

import Resume from './components/Resume';
import LanguageSelection from './components/LaguageSelection';

function App() {
  const store = reduxStore();
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/:locale" component={Resume} />
          <Route exact path="/" component={LanguageSelection} />
          {/* <Route component={Error404Component} /> */}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;