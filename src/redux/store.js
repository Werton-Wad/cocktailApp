import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import { cocktailReducer } from './reducer';

const reducers = combineReducers({
  cocktail: cocktailReducer,
});

const middlewares = applyMiddleware(reduxThunk);

const store = createStore(reducers, middlewares);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;