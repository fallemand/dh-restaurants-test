import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import SearchPage from './pages/search/SearchPage';
import ItemPage from './pages/item/ItemPage';

const App = () => (
  <Router>
    <App>
      <Switch>
        <Route path="/search" component={SearchPage} />
        <Route path="/items/:id" component={ItemPage} />
      </Switch>
    </App>
  </Router>
);

module.exports = App;
