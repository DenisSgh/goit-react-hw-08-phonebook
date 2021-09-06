import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import { getVisibleContacts } from 'redux/contacts/contactsSelectors';
import {
  fetchContacts,
  fetchDeleteContact,
} from 'redux/contacts/contactsOperations';

import Section from 'components/Section';
import s from './Contacts.module.css';
import ModalEdit from 'components/ModalEdit';

const Contacts = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section title="">
      {contacts.length !== 0 && (
        <ul className={s.list}>
          {contacts.map(contact => {
            const { id, name, number } = contact;

            return (
              <li className={s.item} key={id}>
                <div className={s.position}>
                  <span className={s.name}>{name}:</span>
                  <span>{number}</span>
                </div>
                <div className={s.container}>
                  <ModalEdit id={id} action="edit" />
                  <button
                    className={s.button}
                    type="button"
                    onClick={() => dispatch(fetchDeleteContact(id))}
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </Section>
  );
};

export default Contacts;
