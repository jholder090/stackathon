import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from './authSlice';
import allNotebooksReducer from './allNotebooksSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    allNotebooks: allNotebooksReducer
   },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from './authSlice';
