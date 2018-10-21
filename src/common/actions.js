import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  apiError: null,
}, { prefix: '$$COMMON_/' });

export default {
  types: Types,
  creators: Creators,
};
