import { Record } from 'immutable';
import { createReducer } from 'reduxsauce';
import actions from './actions';
import models from './models';

const State = Record({
  user: null,
});

const initial = new State();


const setUser = (state = initial, action) => {
  const { user } = action;
  return state.set('user', new models.User(user));
};

const handlers = {
  [actions.types.SET_USER]: setUser,
};

export default createReducer(initial, handlers);
