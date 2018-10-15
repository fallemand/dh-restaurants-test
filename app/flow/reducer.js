import { handleActions } from 'redux-actions';
import actions from './actions';

const reducer = handleActions({
  [actions.changePage]: (state, action) => (state),
  [actions.changeFilter]: (state, action) => ({
    ...state,
    filter: action.payload.filter,
    value: action.payload.value,
  }),
  [actions.fetchRestaurants.pending]: (state, action) => ({
    ...state,
    loading: true,
    ...action.payload,
  }),
  [actions.fetchRestaurants.error]: (state, action) => ({
    ...state,
    error: action.payload.toString(),
  }),
  [actions.fetchRestaurants.success]: (state, action) => ({
    ...state,
    restaurants: action.payload.restaurants,
    loading: false,
    total: action.payload.total,
  }),
  [actions.fetchRestaurant.error]: (state, action) => ({
    ...state,
    error: action.payload.toString(),
  }),
  [actions.fetchRestaurant.success]: (state, action) => ({
    ...state,
    restaurant: action.payload,
  }),
}, {
  page: 1,
});

export default reducer;
