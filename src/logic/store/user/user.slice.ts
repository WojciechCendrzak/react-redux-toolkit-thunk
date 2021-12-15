import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from './user.model';
import { userThunks } from './user.thunks';

export interface UserState {
  user?: User;
}

export const initialUserState: UserState = {};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    reset: () => initialUserState,
    setUser: (state, action: PayloadAction<{ user: User }>) => {
      state.user = action.payload.user;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userThunks.fetchUserById.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});
