import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { Card, CardText } from 'react-md';

class Component extends React.Component {
  static propTypes = {
    upcomingChores: PropTypes.instanceOf(List).isRequired,
    init: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { init } = this.props;
    init();
  }

  render() {
    const { upcomingChores } = this.props;
    console.log(upcomingChores.toJS());
    return (
      <div>
        <Card>
          <CardText>
            Test
          </CardText>
        </Card>
      </div>
    );
  }
}

export default Component;
