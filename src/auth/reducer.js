import { Record } from 'immutable';
import types from './types';

const State = Record({
  user: null,
});

export default (state = new State(), action) => {
  switch (action.type) {
    case types.SET_USER:
      return state.withMutations((s) => {
        const { user } = action.payload;
        return s.set('user', user);
      });
    default:
      return state;
  }
};
