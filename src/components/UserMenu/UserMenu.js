import { CssButtonLogOut } from 'components/customInputs';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { getUserName } from 'redux/auth/authSelectors';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import defaultAvatar from './avatar.jpg';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div className={s.container}>
      <img src={defaultAvatar} alt="avatar" width="32" className={s.avatar} />
      <span className={s.text}>Welcome, {name}</span>
      <CssButtonLogOut variant="outlined" onClick={() => dispatch(logOut())}>
        <ExitToAppIcon className={s.icon} />
        {/* Sign out */}
      </CssButtonLogOut>
    </div>
  );
}
