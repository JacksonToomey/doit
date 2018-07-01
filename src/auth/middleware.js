import { LOCATION_CHANGED, replace, push } from 'redux-little-router';
import types from './types';
import actions from './actions';
import selectors from './selectors';

export default authProvider => store => next => (action) => {
  switch (action.type) {
    case LOCATION_CHANGED:
      if (action.payload.result && action.payload.result.needsAuth) {
        if (!selectors.isLoggedIn(store.getState())) {
          authProvider.open();
          const path = encodeURIComponent(store.getState().router.pathname);
          return store.dispatch(replace(`/login?redirect=${path}`));
        }
        return next(action);
      }
      return next(action);
    case types.INIT_AUTH:
      authProvider.on('login', (user) => {
        authProvider.close();
        store.dispatch(actions.setUser(user));
        if (store.getState().router.query.redirect) {
          return store.dispatch(push(store.getState().router.query.redirect));
        }
        return store.dispatch(push('/'));
      });
      authProvider.on('logout', () => store.dispatch(actions.clearUser()));
      return store.dispatch(actions.setUser(authProvider.currentUser()));
    default:
      return next(action);
  }
};
