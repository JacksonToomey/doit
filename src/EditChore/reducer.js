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

const setChoreValue = (state = initial, action) => {
  const { field, value } = action;
  return state.setIn(['chore', field], value);
};

const handlers = {
  [actions.types.SET_CHORE]: setChore,
  [actions.types.SET_CHORE_VALUE]: setChoreValue,
};

export default createReducer(initial, handlers);
