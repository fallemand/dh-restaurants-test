import { createAction } from 'redux-actions';
import restaurantsService from '../services/restaurants.service';

const asyncActionCreator = (name, asyncFunction) => {
  const actionSuccess = createAction(`${name}_SUCCESS`);
  const actionError = createAction(`${name}_ERROR`);
  const action = (...params) => (dispatch) => {
    asyncFunction(...params)
      .then(restaurant => dispatch(actionSuccess(restaurant)))
      .catch(error => dispatch(actionError(error)));
  };
  action.success = actionSuccess;
  action.error = actionError;
  return action;
};

const actions = {
  changePage: createAction('PAGE_CHANGE'),
  clickRestaurant: createAction('RESTAURANT_CLICK'),
  clickRestaurantBack: createAction('RESTAURANT-BACK_CLICK'),
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
