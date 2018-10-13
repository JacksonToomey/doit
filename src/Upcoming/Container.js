import { connect } from 'react-redux';
import Component from 'Upcoming/Component';
import selectors from 'Upcoming/selectors';

const mapStateToProps = state => ({
  upcomingChores: selectors.getUpcomingChores(state),
});

const mapDispatchToProps = dispatch => ({
  init: () => {},
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
