import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import shortid from 'shortid';

import { getContacts } from 'redux/contacts/contactsSelectors';
import {
  fetchAddContact,
  fetchEditContact,
} from 'redux/contacts/contactsOperations';
import { CssButton, CssTextField } from 'components/customInputs';

import s from './Form.module.css';

const Form = ({ id, nameEdit = '', numberEdit = '', action, actionName }) => {
  const [name, setName] = useState(nameEdit);
  const [number, setNumber] = useState(numberEdit);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const isButtonDisable = name === '' || number === '';

  const handleCreateContact = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        return setName(value);

      case 'number':
        return setNumber(value);

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in the contact list`);
    }

    switch (action) {
      case 'add':
        dispatch(fetchAddContact({ name, number }));
        break;

      case 'edit':
        dispatch(fetchEditContact({ id, name, number }));
        break;

      default:
        break;
    }

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const nameId = shortid.generate();
  const numberId = shortid.generate();

  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.inputContainer}>
          <CssTextField
            id={nameId}
            type="text"
            name="name"
            label="Name"
            value={name}
            onChange={handleCreateContact}
            variant="outlined"
          />
        </div>

        <div className={s.inputContainer}>
          <CssTextField
            id={numberId}
            type="number"
            name="number"
            label="Number"
            value={number}
            onChange={handleCreateContact}
            variant="outlined"
          />
        </div>

        <CssButton type="submit" variant="outlined" disabled={isButtonDisable}>
          {actionName}
        </CssButton>
      </form>
    </div>
  );
};

export default Form;
