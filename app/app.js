import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';

import SearchPage from './pages/search/SearchPage';
import ItemPage from './pages/item/ItemPage';

render((
  <Router>
    <Switch>
      <Route path="/search" component={SearchPage} />
      <Route path="/items/:id" component={ItemPage} />
    </Switch>
  </Router>
), document.getElementById('root-app'));
