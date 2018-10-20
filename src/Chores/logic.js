import { createLogic } from 'redux-logic';
import actions from 'Chores/actions';
import models from 'common/models';
import { List } from 'immutable';


const fetchChores = async (dispatch, api) => {
  const { data } = await api.get('/api/chores');
  await dispatch(actions.creators.setChores(new List(data.map(c => new models.Chore(c)))));
};

const initChoresLogic = createLogic({
  type: actions.types.INIT,
  process: async ({ api }, dispatch, done) => {
    await fetchChores(dispatch, api);
    done();
  },
});

const deleteChoreLogic = createLogic({
  type: actions.types.DELETE_CHORE,
  process: async ({ action, api }, dispatch, done) => {
    const { choreId } = action;
    await api.delete(`/api/chores/${choreId}`);
    await fetchChores(dispatch, api);
    await dispatch(actions.creators.setChoreToDelete(null));
    done();
  },
});

export default [
  initChoresLogic,
  deleteChoreLogic,
];
