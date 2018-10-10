import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { initializeCurrentLocation } from 'redux-little-router';
import netlifyIdentity from 'netlify-identity-widget';
import createStore from './store';
import App from './App/Container';
import actions from './user/actions';

import './main.scss';

netlifyIdentity.init();

const load = (u) => {
  const store = createStore();
  const initialLocation = store.getState().router;
  if (initialLocation) {
    store.dispatch(initializeCurrentLocation(initialLocation));
  }
  store.dispatch(actions.creators.setUser(u));
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app'),
  );
};

const user = netlifyIdentity.currentUser();
if (user) {
  netlifyIdentity.close();
  load(user);
} else {
  netlifyIdentity.on('login', async (u) => {
    netlifyIdentity.close();
    load(u);
  });
  netlifyIdentity.open();
}
