import React from 'react';
import { Fragment } from 'redux-little-router';
import NavBarContainer from 'App/NavBarContainer';
import Upcoming from 'Upcoming/Container';
import Chores from 'Chores/Container';
import EditChore from 'EditChore/Container';
import NewChoreButton from 'NewChoreButton/Container';
import Notifications from 'Notifications/Container';
import NotFound from 'NotFound';


class Component extends React.Component {
  static propTypes = {
  };

  componentDidMount() {
  }

  render() {
    return (
      <NavBarContainer>
        <Fragment forRoute="/">
          <div>
            <Fragment forRoute="/">
              <Upcoming />
            </Fragment>
            <Fragment forRoute="/chores">
              <Chores />
            </Fragment>
            <Fragment forRoute="/chore">
              <EditChore />
            </Fragment>
            <Fragment forNoMatch>
              <NotFound />
            </Fragment>
            <NewChoreButton />
            <Notifications />
          </div>
        </Fragment>
      </NavBarContainer>
    );
  }
}

export default Component;
