import { handleActions } from 'redux-actions';
import actions from './actions';

const reducer = handleActions({
  [actions.changePage]: (state, action) => (state),
  [actions.clickRestaurant]: (state, action) => (state),
  [actions.clickRestaurantBack]: (state, action) => (state),
  [actions.fetchRestaurants.error]: (state, action) => (state),
  [actions.fetchRestaurants.success]: (state, action) => ({
    ...state,
    restaurants: action.payload,
  }),
  [actions.fetchRestaurant.error]: (state, action) => {
    return {
      ...state,
      restaurant: action.payload,
    };
  },
  [actions.fetchRestaurant.success]: (state, action) => {
    return {
      ...state,
      restaurant: action.payload,
    };
  },
}, {});

export default reducer;
