import React from 'react';
import {
  HashRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { render } from 'react-dom';

import RestaurantsPage from './pages/restaurants/RestaurantsPage';
import RestaurantDetailPage from './pages/restaurant-detail/RestaurantDetailPage';
import NotFoundPage from './pages/not-found/NotFoundPage';
import './styles/_common.scss';

render((
  <Router>
    <Switch>
      <Route path="/restaurants/:id" component={RestaurantDetailPage} />
      <Route exact path="/restaurants" component={RestaurantsPage} />
      <Route exact path="/" render={() => <Redirect to="/restaurants" />} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
), document.getElementById('root-app'));
