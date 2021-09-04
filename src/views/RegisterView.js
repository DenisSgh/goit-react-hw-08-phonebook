import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

import s from './Views.module.css';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const hadleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        return setName(value);

      case 'email':
        return setEmail(value);

      case 'password':
        return setPassword(value);

      default:
        break;
    }
  };

  const hadleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h2 className={s.title}>Registration</h2>

      <form className={s.form} onSubmit={hadleSubmit}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            name="name"
            type="text"
            placeholder="Type your name"
            value={name}
            onChange={hadleChange}
          />
        </label>

        <label className={s.label}>
          Email
          <input
            className={s.input}
            name="email"
            type="email"
            placeholder="Type email"
            value={email}
            onChange={hadleChange}
          />
        </label>

        <label className={s.label}>
          Password
          <input
            className={s.input}
            name="password"
            type="password"
            placeholder="Type password"
            value={password}
            onChange={hadleChange}
          />
        </label>

        <button type="submit" className={s.button}>
          Register
        </button>
      </form>
    </>
  );
}
