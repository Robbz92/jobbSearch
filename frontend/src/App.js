import './style.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/register"><Register /></Route>
          <Route path="/"><Login /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
