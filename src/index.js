import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import netlifyIdentity from 'netlify-identity-widget'

netlifyIdentity.init();

netlifyIdentity.open();

// Get the current user:
const user = netlifyIdentity.currentUser();

// Bind to events
netlifyIdentity.on("init", user => console.log(user));
netlifyIdentity.on("login", user => console.log(user));
netlifyIdentity.on("logout", () => console.log("Logged out"));
netlifyIdentity.on("error", err => console.error("Logged out"));
netlifyIdentity.on("open", () => console.log("Widget opened"));
netlifyIdentity.on("close", () => console.log("Widget closed"));

// Close the modal
// netlifyIdentity.close();

// Log out the user
netlifyIdentity.logout();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
