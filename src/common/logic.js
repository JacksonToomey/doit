import { createLogic } from 'redux-logic';
import actions from 'common/actions';
import notificationActions from 'Notifications/actions';


const errorLogic = createLogic({
  type: actions.types.API_ERROR,
  process: async (deps, dispatch, done) => {
    dispatch(notificationActions.creators.addNotification('Oops, something went wrong.'));
    done();
  },
});


export default [
  errorLogic,
];
