import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../logic/store/user/user.selectors';
import { userSlice } from '../logic/store/user/user.slice';
import { userThunks } from '../logic/store/user/user.thunks';

export const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(userThunks.fetchUserById({ userId: '1' }));
  }, [dispatch]);

  const handleOnResetUser = () => dispatch(userSlice.actions.reset());

  const handleOnSetCustomUser = () =>
    dispatch(
      userSlice.actions.setUser({
        user: {
          id: '1',
          firstName: 'Custom First Name',
          lastName: 'Custom Last Name',
        },
      })
    );

  return (
    <div>
      <div>Thunk example</div>
      {user && <div>{`${user.firstName}  ${user.lastName}`}</div>}
      <button onClick={handleOnSetCustomUser}>set custom user</button>
      <button onClick={handleOnResetUser}>reset user</button>
    </div>
  );
};
