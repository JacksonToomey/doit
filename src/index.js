import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { initializeCurrentLocation } from 'redux-little-router';
import netlifyIdentity from 'netlify-identity-widget';
import createStore from './store';


import './main.scss';

netlifyIdentity.init();

const Comp = ({ email }) => (
  <div>{email}</div>
);

const load = (user) => {
  const store = createStore();
  const initialLocation = store.getState().router;
  if (initialLocation) {
    store.dispatch(initializeCurrentLocation(initialLocation));
  }
  render(
    <Provider store={store}>
      <Comp email={user.email} />
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
