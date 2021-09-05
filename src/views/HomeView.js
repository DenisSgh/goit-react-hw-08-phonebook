import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import s from './Views.module.css';

export default function HomePage() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <h1 className={s.title}>Welcome!</h1>
      {isLoggedIn ? (
        <div className={s.container}>
          <h2 className={s.subTitle}>
            You are logged and can use the application
          </h2>
          <Link to="/contacts" className={s.link}>
            Click
          </Link>
        </div>
      ) : (
        <h2 className={s.subTitle}>
          You are not logged, please register or log in and then you can use the
          application!
        </h2>
      )}
    </>
  );
}
