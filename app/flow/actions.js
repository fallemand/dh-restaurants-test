import { createAction } from 'redux-actions';
import restaurantsService from '../services/restaurants.service';

const asyncActionCreator = (name, asyncFunction) => {
  const actionPending = createAction(name);
  const actionSuccess = createAction(`${name}_SUCCESS`);
  const actionError = createAction(`${name}_ERROR`);
  const action = (...params) => (dispatch) => {
    dispatch(actionPending(...params));
    // Delay in order to show loading :D
    setTimeout(() => {
      asyncFunction(...params)
        .then(restaurant => dispatch(actionSuccess(restaurant)))
        .catch(error => dispatch(actionError(error)));
    }, 1000);
  };
  action.pending = actionPending;
  action.success = actionSuccess;
  action.error = actionError;
  return action;
};

const actions = {
  changePage: createAction('PAGE_CHANGE'),
  changeFilter: createAction('FILTER_CHANGE'),
  fetchRestaurants: asyncActionCreator(
    'RESTAURANTS_FETCH',
    queryParams => restaurantsService.getRestaurants(queryParams),
  ),
  fetchRestaurant: asyncActionCreator(
    'RESTAURANT_FETCH',
    restaurantId => restaurantsService.restaurantDetail(restaurantId),
  ),
};

export default actions;
