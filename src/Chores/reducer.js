import { Record, List } from 'immutable';
import { createReducer } from 'reduxsauce';
import actions from 'Chores/actions';


const State = Record({
  chores: List(),
  choreToDelete: null,
});

const initial = new State();

const handlers = {
  [actions.types.SET_CHORE_TO_DELETE]: (state = initial, { chore }) => state.set('choreToDelete', chore),
  [actions.types.SET_CHORES]: (state = initial, { chores }) => state.set('chores', chores),
};

export default createReducer(initial, handlers);
