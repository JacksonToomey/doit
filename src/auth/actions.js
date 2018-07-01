import types from './types';

const initAuth = () => ({
  type: types.INIT_AUTH,
});

const setUser = user => ({
  type: types.SET_USER,
  payload: {
    user,
  },
});

const clearUser = () => setUser(null);

export default {
  initAuth,
  setUser,
  clearUser,
};
