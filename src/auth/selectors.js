const getUser = ({ auth }) => auth.user;
const isLoggedIn = ({ auth }) => auth.user !== null;

export default {
  getUser,
  isLoggedIn,
};
