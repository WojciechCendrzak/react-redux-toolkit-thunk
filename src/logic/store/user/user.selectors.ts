import { StoreState } from '../../../app/app.reducers';

export const selectUser = (state: StoreState) => state.user.user;
