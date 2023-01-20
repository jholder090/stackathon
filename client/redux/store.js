import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from './authSlice';
import allNotebooksReducer from './notebooksSlice';
import allNotesReducer from './notesSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    allNotebooks: allNotebooksReducer,
    allNotes: allNotesReducer
   },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from './authSlice';
