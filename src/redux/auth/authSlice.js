import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
  userRejected,
} from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  isRejected: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, { payload: { user, token } }) {
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
      state.isRejected = false;
    },
    [register.rejected](state) {
      state.isRejected = true;
    },
    [logIn.fulfilled](state, { payload: { user, token } }) {
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
      state.isRejected = false;
    },
    [logIn.rejected](state) {
      state.isRejected = true;
    },
    [userRejected](state, _) {
      state.isRejected = false;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [fetchCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
