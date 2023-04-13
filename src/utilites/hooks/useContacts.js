import { useSelector } from 'react-redux';
import {
  getContacts,
  getIsLoading,
  getError,
  getFilter,
  getIsModalOpen,
  getEditedName,
  getEditedPhone,
  getIsContactEdited,
  getEditedId,
} from 'redux/contacts/selectors';

export const useContacts = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filter = useSelector(getFilter);
  const isModalOpen = useSelector(getIsModalOpen);
  const editedName = useSelector(getEditedName);
  const editedPhone = useSelector(getEditedPhone);
  const isContactEdited = useSelector(getIsContactEdited);
  const editedId = useSelector(getEditedId);

  return {
    contacts,
    isLoading,
    error,
    filter,
    isModalOpen,
    editedName,
    editedPhone,
    isContactEdited,
    editedId,
  };
};
