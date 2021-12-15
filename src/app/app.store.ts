import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './app.reducers';

export const store = configureStore({
  reducer: reducers,
});
