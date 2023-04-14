import PropTypes from 'prop-types';
// import {
//   ContactItem,
//   ContactName,
//   ContactNumber,
//   ContactDeleteButton,
//   ContactData,
//   ContactActioons,
//   ContactEditButton,
// } from './Contact.styled';
import { useDispatch } from 'react-redux';
import {
  toggleModal,
  addNameToEdit,
  addPhoneToEdit,
  setIsContactEdited,
  addEditedId,
} from '../../redux/contacts/slice';
import { deleteContact } from '../../redux/contacts/operations';


const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(toggleModal());
    dispatch(addNameToEdit(name));
    dispatch(addPhoneToEdit(number));
    dispatch(addEditedId(id));
    dispatch(setIsContactEdited(true));
  };
  return (
    <li>
        <div>
          <span>{name}:</span>
          <span>{number}</span>
        </div>
        <div>
          <button type="button" onClick={handleEdit}>
            Edit
          </button>
          <button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </button>
        </div>
    </li>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Contact;
