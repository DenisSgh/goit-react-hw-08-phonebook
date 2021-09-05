import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { CssButton, CssTextField } from 'components/customInputs';

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
    <div className={s.container}>
      <h2 className={s.title}>Registration</h2>

      <form className={s.form} onSubmit={hadleSubmit}>
        <div className={s.inputContainer}>
          <CssTextField
            type="text"
            name="name"
            label="Name"
            placeholder="Type your name"
            value={name}
            onChange={hadleChange}
            variant="outlined"
          />
        </div>

        <div className={s.inputContainer}>
          <CssTextField
            type="email"
            name="email"
            label="Email"
            placeholder="Type email"
            value={email}
            onChange={hadleChange}
            variant="outlined"
          />
        </div>

        <div className={s.inputContainer}>
          <CssTextField
            type="password"
            name="password"
            label="Password"
            placeholder="Type password"
            value={password}
            onChange={hadleChange}
            variant="outlined"
          />
        </div>

        <CssButton type="submit" variant="outlined">
          Register
        </CssButton>
      </form>
    </div>
  );
}
