import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import { routerForBrowser } from 'redux-little-router';
import user from './user/reducer';

const routes = {};

export default () => {
  const { reducer, middleware, enhancer } = routerForBrowser({ routes });
  const store = createStore(combineReducers(
    {
      router: reducer,
      user,
    },
    compose(enhancer, applyMiddleware(middleware)),
  ));
  return store;
};
