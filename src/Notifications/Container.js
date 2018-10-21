import { connect } from 'react-redux';
import Component from 'Notifications/Component';
import actions from 'Notifications/actions';

const mapStateToProps = state => ({
  notifications: state.notifications,
});

const mapDispatchToProps = dispatch => ({
  clear: () => { dispatch(actions.creators.clearNotification()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
