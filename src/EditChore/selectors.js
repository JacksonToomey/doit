import { createSelector } from 'reselect';
import routerSelectors from 'router/selectors';

const getShowBackButton = createSelector(
  [routerSelectors.getPrevious],
  previous => previous !== undefined,
);

export default {
  getShowBackButton,
};
