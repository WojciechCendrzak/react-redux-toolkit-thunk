import { userSlice, UserState } from "../logic/store/user/user.slice";

export interface StoreState {
  user: UserState;
}

export const reducers = {
  user: userSlice.reducer,
};
