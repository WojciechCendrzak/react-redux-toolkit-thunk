import { createAsyncThunk } from '@reduxjs/toolkit';
import { userApi } from './user.api';
import { User } from './user.model';

const fetchUserById = createAsyncThunk<User, { userId: string }>(
  'user/fetchUserById',
  async (payload) => {
    const user = await userApi.fetchUser(payload.userId);
    return user;
  }
);

export const userThunks = {
  fetchUserById,
};
