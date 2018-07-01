import React, { Component } from 'react';
import { Fragment } from 'redux-little-router';
import './App.scss';

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Fragment forRoute="/">
          <div>
            <Fragment forRoute="/">
              <span>
                Main Page
              </span>
            </Fragment>
            <Fragment forRoute="/Foo">
              <span>
                Foo
              </span>
            </Fragment>
            <Fragment forRoute="/login">
              <span>
                Logging In
              </span>
            </Fragment>
            <Fragment forNoMatch>
              <span>
                Not Found
              </span>
            </Fragment>

          </div>
        </Fragment>
      </div>
    );
  }
}

export default App;
