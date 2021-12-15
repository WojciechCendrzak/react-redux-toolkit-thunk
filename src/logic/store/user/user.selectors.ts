import { StoreState } from '../../../app/app.store';

export const selectUser = (state: StoreState) => state.user.user;

export const selectIsAuthenticated = (state: StoreState) =>
  state.user.isAuthenticated;
