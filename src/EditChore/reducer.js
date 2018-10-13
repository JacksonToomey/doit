import { Record } from 'immutable';
import { createReducer } from 'reduxsauce';
import commonModels from 'common/models';
import actions from 'EditChore/actions';


const State = Record({
  chore: new commonModels.Chore(),
});

const initial = new State();


const setChore = (state = initial, action) => {
  const { chore } = action;
  return state.set('chore', chore);
};

const handlers = {
  [actions.types.SET_CHORE]: setChore,
};

export default createReducer(initial, handlers);
