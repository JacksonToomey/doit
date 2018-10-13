import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import { routerForBrowser } from 'redux-little-router';
import { createLogicMiddleware } from 'redux-logic';
import user from 'user/reducer';
import upcoming from 'Upcoming/reducer';
import upcomingLogic from 'Upcoming/logic';
import routes from 'router/routes';


export default () => {
  const { reducer, middleware, enhancer } = routerForBrowser({ routes });
  const logicMiddleware = createLogicMiddleware(upcomingLogic);
  const store = createStore(
    combineReducers({
      router: reducer,
      user,
      upcoming,
    }),
    {},
    compose(enhancer, applyMiddleware(middleware, logicMiddleware)),
  );
  return store;
};
