import { createActions } from 'reduxsauce';

const setUpcomingChores = ['upcomingChores'];

const { Types, Creators } = createActions({
  setUpcomingChores,
}, { prefix: '@UPCOMING_/' });

export default {
  types: Types,
  creators: Creators,
};
