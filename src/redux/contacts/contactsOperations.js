import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import {
  fetchAllContacts,
  postContact,
  deleteContactById,
} from 'services/contactsAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await fetchAllContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchAddContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const contact = await postContact(name, number);
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const contact = await deleteContactById(id);
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const changeFilter = createAction('contacts/filter');
