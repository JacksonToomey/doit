import { createLogic } from 'redux-logic';
import { List } from 'immutable';
import actions from 'Upcoming/actions';
import notificationActions from 'Notifications/actions';
import models from 'Upcoming/models';


const fetchChoreLogic = createLogic({
  type: actions.types.FETCH_CHORES,
  process: async ({ api }, dispatch, done) => {
    const { data } = await api.get('/api/upcoming');
    const upcomingChores = new List(data.map(upcoming => new models.UpcomingChore({
      id: upcoming.id,
      name: upcoming.name,
      details: upcoming.details,
      dueDate: new Date(upcoming.dueDate),
    })));
    await dispatch(actions.creators.setUpcomingChores(upcomingChores));
    done();
  },
});


const completeChoreLogic = createLogic({
  type: actions.types.COMPLETE_CHORE,
  process: async ({ action, api }, dispatch, done) => {
    const { choreId } = action;
    await api.post(`/api/upcoming/${choreId}`);
    const { data } = await api.get('/api/upcoming');
    const upcomingChores = new List(data.map(upcoming => new models.UpcomingChore({
      id: upcoming.id,
      name: upcoming.name,
      details: upcoming.details,
      dueDate: new Date(upcoming.dueDate),
    })));
    await dispatch(actions.creators.setUpcomingChores(upcomingChores));
    await dispatch(notificationActions.creators.addNotification('Did it!'));
    done(action);
  },
});

export default [
  fetchChoreLogic,
  completeChoreLogic,
];
