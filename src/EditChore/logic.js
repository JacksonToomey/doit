import { createLogic } from 'redux-logic';
import { push } from 'redux-little-router';
import actions from 'EditChore/actions';
import routerSelectors from 'router/selectors';
import selectors from 'EditChore/selectors';
import commonActions from 'common/actions';
import models from 'common/models';

const fetchChoreLogic = createLogic({
  type: actions.types.FETCH_CHORE,
  process: async ({ getState, api }, dispatch, done) => {
    const state = getState();
    const params = routerSelectors.getParams(state);
    if (params.choreId) {
      // Get Chore
      const { choreId } = params;
      try {
        const { data } = await api.get(`/api/chores/${choreId}`);
        dispatch(actions.creators.setChore(new models.Chore(data)));
        done();
      } catch (err) {
        if (err.response.status === 404) {
          await dispatch(push('/NotFound'));
          done();
        } else {
          throw err;
        }
      }
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
      await api.post('/api/chores', chore);
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
