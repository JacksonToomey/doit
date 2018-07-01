import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import auth from '../auth/reducer';
import authMiddleware from '../auth/middleware';
import routes from '../routes';


export default (router, netlifyIdentity) => {
  const { reducer, middleware, enhancer } = router({
    routes,
  });

  return createStore(
    combineReducers({
      auth,
      router: reducer,
    }),
    compose(
      enhancer,
      applyMiddleware(
        middleware,
        authMiddleware(netlifyIdentity),
        thunk.withExtraArgument({
          netlifyIdentity,
        }),
      ),
    ),
  );
};
