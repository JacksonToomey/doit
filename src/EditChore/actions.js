import { createActions } from 'reduxsauce';


const { Types, Creators } = createActions({
  fetchChore: null,
  setChore: ['chore'],
}, { prefix: '@EDIT_CHORE_/' });

export default {
  types: Types,
  creators: Creators,
};
