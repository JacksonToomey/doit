import { connect } from 'react-redux';
import { goBack } from 'redux-little-router';
import Component from 'EditChore/Component';
import selectors from 'EditChore/selectors';
import actions from 'EditChore/actions';

const mapStateToProps = state => ({
  showBack: selectors.getShowBackButton(state),
});

const mapDispatchToProps = dispatch => ({
  goBack: () => { dispatch(goBack()); },
  init: () => { dispatch(actions.creators.fetchChore()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
