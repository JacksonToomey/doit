import { Record, List } from 'immutable';
import { createReducer } from 'reduxsauce';
import actions from 'Upcoming/actions';


const State = Record({
  upcomingChores: List(),
});

const initial = new State();


const setUpcomingChores = (state = initial, action) => {
  const { upcomingChores } = action;
  return state.set('upcomingChores', upcomingChores);
};

const handlers = {
  [actions.types.SET_UPCOMING_CHORES]: setUpcomingChores,
};

export default createReducer(initial, handlers);
