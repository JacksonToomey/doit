import { createActions } from 'reduxsauce';


const { Types, Creators } = createActions({
  setUpcomingChores: ['upcomingChores'],
  completeChore: ['choreId'],
  fetchChores: null,
}, { prefix: '@UPCOMING_/' });

export default {
  types: Types,
  creators: Creators,
};
