import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import FAQ from './components/FAQ';

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/faq" component={ FAQ }/>
    </div>
  </Router>
);

export default Routes;
