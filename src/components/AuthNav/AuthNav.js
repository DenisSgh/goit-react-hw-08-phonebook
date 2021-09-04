// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { getIsLoggedIn } from 'redux/auth/authSelectors';
import s from './AuthNav.module.css';

export default function AuthNav() {
  // const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <div>
      <NavLink
        to="/login"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Sign in
      </NavLink>

      <NavLink
        to="/register"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        Sign up
      </NavLink>
    </div>
  );
}
