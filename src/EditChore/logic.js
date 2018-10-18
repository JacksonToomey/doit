import { createLogic } from 'redux-logic';
import { push } from 'redux-little-router';
import actions from 'EditChore/actions';
import routerSelectors from 'router/selectors';
import selectors from 'EditChore/selectors';
import commonActions from 'common/actions';
import models from 'common/models';

const fetchChoreLogic = createLogic({
  type: actions.types.FETCH_CHORE,
  process: async ({ getState }, dispatch, done) => {
    const state = getState();
    const params = routerSelectors.getParams(state);
    if (params.choreId) {
      // Get Chore
      done();
      return;
    }
    dispatch(actions.creators.setChore(new models.Chore()));
    done();
  },
});


const persistChoreLogic = createLogic({
  type: actions.types.PERSIST_CHORE,
  process: async ({ getState, api }, dispatch, done) => {
    const state = getState();
    const chore = selectors.getChore(state);
    try {
      const resp = await api.post('/api/chores', chore);
      console.log(resp);
    } catch (err) {
      dispatch(commonActions.creators.apiError(err));
      return;
    }
    await dispatch(push('/chores'));
    done();
  },
  processOptions: {
    failType: commonActions.types.API_ERROR,
  },
});

export default [
  fetchChoreLogic,
  persistChoreLogic,
];
