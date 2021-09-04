import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import s from './Navigation.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav>
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={s.link}
          activeClassName={s.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
