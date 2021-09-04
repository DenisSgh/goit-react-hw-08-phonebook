import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import s from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
