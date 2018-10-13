import { Record } from 'immutable';

const Chore = Record({
  id: '',
  name: '',
  details: '',
  frequencyType: '',
  frequencyAmount: 0,
  startDate: null,
});

export default {
  Chore,
};
