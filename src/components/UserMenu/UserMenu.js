import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
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
      <span className={s.text}>Welcome, {name}</span>
      <Button variant="outlined" onClick={() => dispatch(logOut())}>
        Sign out
      </Button>
    </div>
  );
}
