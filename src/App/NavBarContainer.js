import { connect } from 'react-redux';
import { push } from 'redux-little-router';
import NavBarComponent from 'App/NavBarComponent';
import routerSelectors from 'router/selectors';
import userSelectors from 'user/selectors';

const mapStateToProps = state => ({
  title: routerSelectors.getTitle(state),
  user: userSelectors.getUser(state),
});

const mapDispatchToProps = dispatch => ({
  navigate: (path) => { dispatch(push(path)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBarComponent);
