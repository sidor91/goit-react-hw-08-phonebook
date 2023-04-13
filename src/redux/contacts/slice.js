import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import {
  fetchContacts,
  addContact,
  deleteContact,
  patchContact,
} from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
  isModalOpen: false,
  editedContact: {
    editedName: '',
    editedPhone: '',
    editedId: '',
    isContactEdited: false,
  },
};

const handlePending = state => {
  state.contacts.isLoading = true;
};
const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
    toggleModal: state => {
      state.isModalOpen = !state.isModalOpen;
    },
    addNameToEdit: (state, action) => {
      state.editedContact.editedName = action.payload;
    },
    addPhoneToEdit: (state, action) => {
      state.editedContact.editedPhone = action.payload;
    },
    addEditedId: (state, action) => {
      state.editedContact.editedId = action.payload;
    },
    isContactEdited: (state, action) => {
      state.editedContact.isContactEdited =
        action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isModalOpen = !state.isModalOpen;
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        console.log(action.payload)
        state.contacts.isLoading = false;
        state.contacts.error = null;
        const index = state.contacts.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(patchContact.fulfilled, (state, action) => {
        const index = state.contacts.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.items.splice(index, 1, action.payload);
        state.isModalOpen = !state.isModalOpen;
        state.editedContact.isContactEdited =
          !state.editedContact.isContactEdited;
        state.editedContact.editedName = '';
        state.editedContact.editedPhone = '';
        state.editedContact.editedId = '';
      })
      .addDefaultCase(state => state);
  },
});

// const persistConfig = {
//   key: 'contacts',
//   version: 1,
//   storage,
// blacklist: ['filter'],
// };

// export const persistedReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

export const {
  addFilter,
  toggleModal,
  addNameToEdit,
  addPhoneToEdit,
  isContactEdited,
  addEditedId,
} = contactsSlice.actions;
export default contactsSlice.reducer;
