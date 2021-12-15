import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from './user.model';
import { userThunks } from './user.thunks';

interface State {
  isAuthenticated: boolean;
  user?: User;
}

const initialUserState: State = {
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    reset: () => initialUserState,
    setUser: (state, action: PayloadAction<{ user: User }>) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userThunks.fetchUserById.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    });
  },
});
