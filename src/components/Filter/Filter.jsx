// import { FilterLabel, FilterInput, FilterLabelName } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { addFilter } from '../../redux/contacts/slice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label>
      <span>Find contacts by name</span>
      <input
        type="text"
        name="filter"
        onChange={e => {
          dispatch(addFilter(e.target.value));
        }}
      />
    </label>
  );
};

export default Filter;
