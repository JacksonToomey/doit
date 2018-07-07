import React, { Component } from 'react';
import { Fragment } from 'redux-little-router';
import { NavigationDrawer } from 'react-md';
import './App.scss';

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        <Fragment forRoute="/">
          <NavigationDrawer
            mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
            tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
            desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
            toolbarTitle="Gruntwrk"
            navItems={[]}
          >
            <div>
              <Fragment forRoute="/">
                <div />
              </Fragment>
              <Fragment forNoMatch>
                <span>
                  Not Found
                </span>
              </Fragment>

            </div>
          </NavigationDrawer>
        </Fragment>
      </div>
    );
  }
}

export default App;
