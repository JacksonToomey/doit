import { connect } from 'react-redux';
import Component from 'Upcoming/Component';
import selectors from 'Upcoming/selectors';
import actions from 'Upcoming/actions';

const mapStateToProps = state => ({
  upcomingChores: selectors.getUpcomingChores(state),
});

const mapDispatchToProps = dispatch => ({
  init: () => { dispatch(actions.creators.fetchChores()); },
  onChoreComplete: (choreId) => { dispatch(actions.creators.completeChore(choreId)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
