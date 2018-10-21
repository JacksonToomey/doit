import { createSelector } from 'reselect';
import routerSelectors from 'router/selectors';

const getChore = ({ editChore }) => editChore.chore;

const getShowBackButton = createSelector(
  [routerSelectors.getPrevious],
  previous => previous !== undefined,
);

const getFrequencySelect = createSelector(
  [getChore],
  (chore) => {
    if (chore.frequencyType === '') {
      return '';
    }

    if (chore.frequencyAmount !== 1) {
      return 'custom';
    }

    return chore.frequencyType;
  },
);

export default {
  getShowBackButton,
  getChore,
  getFrequencySelect,
};
