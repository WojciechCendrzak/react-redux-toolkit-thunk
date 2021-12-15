import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../logic/store/user/user.slice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
