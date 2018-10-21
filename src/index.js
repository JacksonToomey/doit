import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { initializeCurrentLocation } from 'redux-little-router';
import { CircularProgress } from 'react-md';
import netlifyIdentity from 'netlify-identity-widget';
import App from 'App/Container';
import actions from 'user/actions';
import createStore from 'store';
import api from 'api';

import 'react-md/dist/react-md.blue_grey-indigo.min.css';

import './main.scss';

netlifyIdentity.init();

render(
  <div><CircularProgress id="main-app-loader" /></div>,
  document.getElementById('app'),
);

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

const bootstrap = async () => {
  const user = netlifyIdentity.currentUser();
  if (user) {
    const token = await user.jwt();
    const { data } = await api.post('/login', { token });
    api.setUser(user);
    api.setToken(data.token);
    load(user);
  } else {
    netlifyIdentity.on('login', async (u) => {
      netlifyIdentity.close();
      const { token } = u;
      const { data } = await api.post('/login', { token: token.access_token });
      api.setUser(u);
      api.setToken(data.token);
      load(u);
    });
    netlifyIdentity.open();
  }
};

bootstrap().then(() => {});
