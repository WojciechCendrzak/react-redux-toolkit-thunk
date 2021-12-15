import { fakeAsync } from '../../fakeAsync';
import { User } from './user.model';

export const userApi = {
  fetchUser: (id: string) =>
    fakeAsync<User>({ id, firstName: 'John', lastName: 'Dow' }),
};

export type Api = typeof userApi;
