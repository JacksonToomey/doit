import { createLogic } from 'redux-logic';
import actions from 'EditChore/actions';
import routerSelectors from 'router/selectors';

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

    done();
  },
});

export default [
  fetchChoreLogic,
];
