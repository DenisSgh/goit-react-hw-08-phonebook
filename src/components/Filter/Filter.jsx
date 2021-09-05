import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/contactsOperations';
import {
  getFilter,
  getVisibleContacts,
} from 'redux/contacts/contactsSelectors';
// import { TextField } from '@material-ui/core';
import Section from 'components/Section';
import { CssTextFieldFilter } from 'components/customInputs';

import s from './Filter.module.css';

const Filter = () => {
  const contacts = useSelector(getVisibleContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <Section title="CONTACTS">
      <h3 className={s.total}>(Total: {contacts.length})</h3>
      <CssTextFieldFilter
        id="filled-basic"
        type="text"
        name="filter"
        label="Find"
        placeholder="by name"
        value={filter}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
        variant="filled"
      />
      {/* <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          placeholder="Type contact name"
          value={filter}
          onChange={e => dispatch(changeFilter(e.currentTarget.value))}
        />
      </label> */}
    </Section>
  );
};

export default Filter;
