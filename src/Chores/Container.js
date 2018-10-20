import { connect } from 'react-redux';
import Component from 'Chores/Component';
import actions from 'Chores/actions';

const mapStateToProps = state => ({
  chores: state.chores.chores,
  choreToDelete: state.chores.choreToDelete,
});

const mapDispatchToProps = dispatch => ({
  init: () => { dispatch(actions.creators.init()); },
  onModalHide: () => { dispatch(actions.creators.setChoreToDelete(null)); },
  onModalOk: (choreId) => { dispatch(actions.creators.deleteChore(choreId)); },
  onDeleteClick: (chore) => { dispatch(actions.creators.setChoreToDelete(chore)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
