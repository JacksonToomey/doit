import { connect } from 'react-redux';
import { goBack } from 'redux-little-router';
import Component from 'EditChore/Component';
import selectors from 'EditChore/selectors';
import actions from 'EditChore/actions';

const mapStateToProps = state => ({
  showBack: selectors.getShowBackButton(state),
  chore: selectors.getChore(state),
  frequencySelect: selectors.getFrequencySelect(state),
});

const mapDispatchToProps = dispatch => ({
  goBack: () => { dispatch(goBack()); },
  init: () => { dispatch(actions.creators.fetchChore()); },
  changeValue: (field, value) => { dispatch(actions.creators.setChoreValue(field, value)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
