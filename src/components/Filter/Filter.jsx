import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/contactsOperations';
import { getFilter } from 'redux/contacts/contactsSelectors';

import s from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        name="filter"
        type="text"
        placeholder="Type contact name"
        value={filter}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      />
    </label>
  );
};

export default Filter;
