import React from 'react';
import { Provider } from 'react-redux';
import {
  HashRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { render } from 'react-dom';

import RestaurantsPage from './pages/restaurants/RestaurantsPage';
import RestaurantDetailPage from './pages/restaurant-detail/RestaurantDetailPage';
import NotFoundPage from './pages/not-found/NotFoundPage';
import ErrorPage from './pages/error/ErrorPage';
import authService from './services/auth.service';
import store from './flow/store';
import './styles/_common.scss';

/**
 * Get token and then render SPA
 * If can't get token, show error page
 */
authService()
  .then(() => {
    // Render SPA
    render((
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/restaurants/:id" component={RestaurantDetailPage} />
            <Route exact path="/restaurants" component={RestaurantsPage} />
            <Route exact path="/" render={() => <Redirect to="/restaurants" />} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </Provider>
    ), document.getElementById('root-app'));
  })
  .catch(() => {
    render(
      <ErrorPage message="You're not authorized to enter!" />,
      document.getElementById('root-app'),
    );
  });
