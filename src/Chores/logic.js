import { createLogic } from 'redux-logic';
import actions from 'Chores/actions';
import models from 'common/models';
import { List } from 'immutable';

const initChoresLogic = createLogic({
  type: actions.types.INIT,
  process: async (deps, dispatch, done) => {
    console.log('here');
    dispatch(actions.creators.setChores(new List([
      new models.Chore({
        name: 'Test Chore 1',
        id: 1,
      }),
    ])));
    done();
  },
});

const deleteChoreLogic = createLogic({
  type: actions.types.DELETE_CHORE,
  process: async ({ action }, dispatch, done) => {
    const { choreId } = action;
    console.log(choreId);
    done();
  },
});

export default [
  initChoresLogic,
  deleteChoreLogic,
];
