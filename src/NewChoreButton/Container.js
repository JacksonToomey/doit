import { connect } from 'react-redux';
import { push } from 'redux-little-router';
import Component from 'NewChoreButton/Component';
import routerSelectors from 'router/selectors';

const mapStateToProps = state => ({
  pathname: routerSelectors.getPathName(state),
});

const mapDispatchToProps = dispatch => ({
  onClick: () => { dispatch(push('/chore')); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
