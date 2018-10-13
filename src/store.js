import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import { routerForBrowser } from 'redux-little-router';
import { createLogicMiddleware } from 'redux-logic';
import api from 'api';
import user from 'user/reducer';
import upcoming from 'Upcoming/reducer';
import upcomingLogic from 'Upcoming/logic';
import notifications from 'Notifications/reducer';
import routes from 'router/routes';


export default () => {
  const { reducer, middleware, enhancer } = routerForBrowser({ routes });
  const logicMiddleware = createLogicMiddleware(upcomingLogic);
  logicMiddleware.addDeps({ api });
  const store = createStore(
    combineReducers({
      router: reducer,
      user,
      upcoming,
      notifications,
    }),
    {},
    compose(enhancer, applyMiddleware(middleware, logicMiddleware)),
  );
  return store;
};
