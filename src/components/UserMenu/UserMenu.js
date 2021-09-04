import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { getUserName } from 'redux/auth/authSelectors';
import defaultAvatar from './avatar.jpg';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div className={s.container}>
      <img src={defaultAvatar} alt="avatar" width="32" className={s.avatar} />
      <span>Welcome, {name}</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Sign out
      </button>
    </div>
  );
}
