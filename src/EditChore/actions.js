import { createActions } from 'reduxsauce';


const { Types, Creators } = createActions({
  fetchChore: null,
  setChore: ['chore'],
  setChoreValue: ['field', 'value'],
  persistChore: null,
}, { prefix: '@EDIT_CHORE_/' });

export default {
  types: Types,
  creators: Creators,
};
