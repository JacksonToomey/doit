import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { routerForBrowser, initializeCurrentLocation } from 'redux-little-router';
import netlifyIdentity from 'netlify-identity-widget';
import App from './App';
import createStore from './store';
import authActions from './auth/actions';
import '../node_modules/react-md/dist/react-md.grey-blue.min.css';
import './index.scss';

netlifyIdentity.init();

const store = createStore(routerForBrowser, netlifyIdentity);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

store.dispatch(authActions.initAuth());

const initialLocation = store.getState().router;
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation));
}
