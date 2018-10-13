import { createLogic } from 'redux-logic';
import { List } from 'immutable';
import actions from 'Upcoming/actions';
import models from 'Upcoming/models';


const fetchChoreLogic = createLogic({
  type: actions.types.FETCH_CHORES,
  process: async (deps, dispatch, done) => {
    dispatch(actions.creators.setUpcomingChores(new List([
      new models.UpcomingChore({
        id: '2',
        name: 'Test 2',
        details: 'Test 2 desc',
        dueDate: new Date('2018-10-10'),
      }),
      new models.UpcomingChore({
        id: '1',
        name: 'Test 1',
        details: 'Test 1 desc',
        dueDate: new Date('2018-10-15'),
      }),
    ])));
    done();
  },
});


const completeChoreLogic = createLogic({
  type: actions.types.COMPLETE_CHORE,
  process: async ({ action }, dispatch, done) => {
    done();
  },
});

export default [
  fetchChoreLogic,
  completeChoreLogic,
];
