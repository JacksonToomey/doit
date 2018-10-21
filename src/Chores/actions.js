import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  init: null,
  setChoreToDelete: ['chore'],
  deleteChore: ['choreId'],
  setChores: ['chores'],
}, { prefix: '@@CHORES_/' });

export default {
  types: Types,
  creators: Creators,
};
