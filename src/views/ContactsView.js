import Filter from 'components/Filter';
import Contacts from 'components/Contacts';
import s from './Views.module.css';
import ModalAdd from 'components/ModalAdd/ModalAdd';

export default function ContactsView() {
  return (
    <div className={s.contactsContainer}>
      <h2 className={s.mainTitle}>PHONEBOOK</h2>
      <ModalAdd action="add" />
      <Filter />
      <Contacts />
    </div>
  );
}
