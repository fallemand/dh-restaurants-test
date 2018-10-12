import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

const store = createStore(
  reducer,
  {
    value: 0,
  },
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
