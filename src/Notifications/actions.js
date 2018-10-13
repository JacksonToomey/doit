import { createActions } from 'reduxsauce';


const { Types, Creators } = createActions({
  addNotification: ['text'],
  clearNotification: null,
}, { prefix: '@NOTIFICATIONS_/' });

export default {
  types: Types,
  creators: Creators,
};
