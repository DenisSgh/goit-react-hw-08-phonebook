import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import shortid from 'shortid';

// import ModalAdd from 'components/ModalAdd';
import { getContacts } from 'redux/contacts/contactsSelectors';
import { fetchAddContact } from 'redux/contacts/contactsOperations';
import { CssButton, CssTextField } from 'components/customInputs';
import Section from 'components/Section';

import s from './Form.module.css';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
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

    dispatch(fetchAddContact({ name, number }));
    // handleClose();
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const nameId = shortid.generate();
  const numberId = shortid.generate();

  return (
    <Section title="PHONEBOOK" className={s.container}>
      {/* <ModalAdd> */}

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
            // InputLabelProps={{
            //   shrink: true,
            // }}
            variant="outlined"
          />
        </div>

        <CssButton type="submit" variant="outlined" disabled={isButtonDisable}>
          Add new contact
        </CssButton>
      </form>
      {/* </ModalAdd> */}
    </Section>
  );
};

export default Form;
