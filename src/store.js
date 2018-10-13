import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import { routerForBrowser } from 'redux-little-router';
import { createLogicMiddleware } from 'redux-logic';
import api from 'api';
import user from 'user/reducer';
import upcoming from 'Upcoming/reducer';
import upcomingLogic from 'Upcoming/logic';
import editChore from 'EditChore/reducer';
import editChoreLogic from 'EditChore/logic';
import notifications from 'Notifications/reducer';
import routes from 'router/routes';


export default () => {
  const { reducer, middleware, enhancer } = routerForBrowser({ routes });
  const logicMiddleware = createLogicMiddleware([
    ...upcomingLogic,
    ...editChoreLogic,
  ], { api });
  const store = createStore(
    combineReducers({
      router: reducer,
      user,
      upcoming,
      notifications,
      editChore,
    }),
    {},
    compose(enhancer, applyMiddleware(middleware, logicMiddleware)),
  );
  return store;
};
