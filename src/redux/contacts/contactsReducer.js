import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContacts,
  fetchAddContact,
  fetchDeleteContact,
  fetchEditContact,
  changeFilter,
} from './contactsOperations';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [fetchAddContact.fulfilled]: (state, { payload }) => [...state, payload],
  [fetchDeleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [fetchEditContact.fulfilled]: (state, { payload }) =>
    state.map(el =>
      el.id === payload.id
        ? { ...el, name: payload.name, number: payload.number }
        : el,
    ),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,

  [fetchAddContact.pending]: () => true,
  [fetchAddContact.fulfilled]: () => false,
  [fetchAddContact.rejected]: () => false,

  [fetchDeleteContact.pending]: () => true,
  [fetchDeleteContact.fulfilled]: () => false,
  [fetchDeleteContact.rejected]: () => false,
});

export default combineReducers({ items, filter, isLoading });
