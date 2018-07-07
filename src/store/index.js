import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import auth from '../auth/reducer';
import routes from '../routes';


export default (router) => {
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
        thunk.withExtraArgument({}),
      ),
    ),
  );
};
