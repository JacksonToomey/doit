import { List } from 'immutable';
import { createReducer } from 'reduxsauce';
import actions from 'Notifications/actions';

const initial = new List();

const handlers = {
  [actions.types.ADD_NOTIFICATION]: (state = initial, action) => {
    const { text } = action;
    return state.push({ text });
  },
  [actions.types.CLEAR_NOTIFICATION]: (state = initial) => state.shift(),
};

export default createReducer(initial, handlers);
