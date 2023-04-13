import PropTypes from 'prop-types';
import {
  ContactItem,
  ContactName,
  ContactNumber,
  ContactDeleteButton,
  ContactData,
  ContactActioons,
  ContactEditButton,
} from './Contact.styled';
import { useDispatch } from 'react-redux';
import {
  toggleModal,
  addNameToEdit,
  addPhoneToEdit,
  isContactEdited,
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
    dispatch(isContactEdited(true));
  };
  return (
    <ContactItem>
      <ContactData>
        <ContactName>{name}:</ContactName>
        <ContactNumber>{number}</ContactNumber>
      </ContactData>
      <ContactActioons>
        <ContactEditButton type="button" onClick={handleEdit}>
          Edit
        </ContactEditButton>
        <ContactDeleteButton
          type="button"
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </ContactDeleteButton>
      </ContactActioons>
    </ContactItem>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Contact;
