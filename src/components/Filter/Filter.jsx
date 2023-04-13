import { FilterLabel, FilterInput, FilterLabelName } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { addFilter } from '../../redux/contacts/slice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterLabel>
      <FilterLabelName>Find contacts by name</FilterLabelName>
      <FilterInput
        type="text"
        name="filter"
        onChange={e => {
          dispatch(addFilter(e.target.value));
        }}
      />
    </FilterLabel>
  );
};

export default Filter;
