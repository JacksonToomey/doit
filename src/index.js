import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { routerForBrowser, initializeCurrentLocation } from 'redux-little-router';
import netlifyIdentity from 'netlify-identity-widget';
import App from './App';
import createStore from './store';
import api from './api';
import authActions from './auth/actions';
import '../node_modules/react-md/dist/react-md.grey-blue.min.css';
import './index.scss';

netlifyIdentity.init();

const loadApp = (currentUser) => {
  const store = createStore(routerForBrowser);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );

  store.dispatch(authActions.setUser(currentUser));
  const initialLocation = store.getState().router;
  if (initialLocation) {
    store.dispatch(initializeCurrentLocation(initialLocation));
  }
};

const user = netlifyIdentity.currentUser();

if (user) {
  loadApp(user);
} else {
  netlifyIdentity.on('login', async (usr) => {
    netlifyIdentity.close();
    const jwt = await usr.jwt();
    try {
      await api.post('/auth/login', {
        token: jwt,
      });
      window.location.reload();
    } catch (error) {
      netlifyIdentity.logout();
      // eslint-disable-next-line no-alert
      await alert('Error logging in');
      window.location.reload();
    }
  });
  netlifyIdentity.open();
}
