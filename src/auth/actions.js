import types from './types';

const setUser = user => ({
  type: types.SET_USER,
  payload: {
    user,
  },
});

const clearUser = () => setUser(null);

export default {
  setUser,
  clearUser,
};
