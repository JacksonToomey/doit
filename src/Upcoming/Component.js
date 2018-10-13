import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import UpcomingChoreComponent from 'Upcoming/UpcomingChoreComponent';

class Component extends React.Component {
  static propTypes = {
    upcomingChores: PropTypes.instanceOf(List).isRequired,
    init: PropTypes.func.isRequired,
    onChoreComplete: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { init } = this.props;
    init();
  }

  render() {
    const { upcomingChores, onChoreComplete } = this.props;
    let chores = <div>No Chores</div>;
    if (upcomingChores.size > 0) {
      chores = upcomingChores.map(chore => (
        <UpcomingChoreComponent
          key={chore.id}
          chore={chore}
          onComplete={onChoreComplete}
        />
      ));
    }
    return (
      <div className="upcoming-chores">
        {chores}
      </div>
    );
  }
}

export default Component;
