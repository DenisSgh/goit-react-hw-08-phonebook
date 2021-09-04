import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

export default function PrivateRoute({
  children,
  restricted = false,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldLoggedIn = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldLoggedIn ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
