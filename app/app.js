import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { render } from 'react-dom';

import RestaurantsPage from './pages/restaurants/RestaurantsPage';
import RestaurantPage from './pages/restaurant/RestaurantPage';
import './styles/_common.scss';

render((
  <Router>
    <Switch>
      <Route path="/restaurants/:id" component={RestaurantPage} />
      <Route exact path="/restaurants" component={RestaurantsPage} />
      <Route exact path="/" render={() => <Redirect to="/restaurants" />} />
    </Switch>
  </Router>
), document.getElementById('root-app'));
