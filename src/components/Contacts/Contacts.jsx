import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/contacts/contactsSelectors';
import {
  fetchContacts,
  fetchDeleteContact,
} from 'redux/contacts/contactsOperations';

import Section from 'components/Section';
import s from './Contacts.module.css';

const Contacts = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section title="Contacts">
      {contacts.length !== 0 ? (
        <ul className={s.list}>
          <h3 className={s.total}>Total: {contacts.length}</h3>
          {contacts.map(contact => {
            const { id, name, number } = contact;

            return (
              <li className={s.item} key={id}>
                <div className={s.position}>
                  <span>{name}:</span>
                  <span>{number}</span>
                </div>
                <button
                  className={s.button}
                  type="button"
                  onClick={() => dispatch(fetchDeleteContact(id))}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={s.notification}>No contacts found :(</p>
      )}
    </Section>
  );
};

export default Contacts;
