export const getUserName = state => state.auth.user.name;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getIsRejected = state => state.auth.isRejected;
export const getIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
