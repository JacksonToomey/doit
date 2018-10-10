import { createActions } from 'reduxsauce';

const setUser = ['user'];

const { Types, Creators } = createActions({
  setUser,
}, { prefix: '@USER_/' });

export default {
  types: Types,
  creators: Creators,
};
