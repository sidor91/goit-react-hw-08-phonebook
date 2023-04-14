import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import {
  toggleModal,
  setIsContactEdited,
  addNameToEdit,
  addPhoneToEdit,
} from '../../redux/contacts/slice';
import { useContacts } from 'utilites/hooks/useContacts';
import FormComponent from '../Form';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

const modalRoot = document.querySelector('#modal-root');

const ModalComponent = () => {
  const dispatch = useDispatch();
  const { editedName, editedPhone, isModalOpen, isContactEdited } =
    useContacts();

  const initialValues = { name: `${editedName}`, number: `${editedPhone}` };

  const handleModalClose = () => {
    dispatch(toggleModal());
    dispatch(addNameToEdit(''));
    dispatch(addPhoneToEdit(''));
    dispatch(setIsContactEdited(false));
  };

  return createPortal(
    <Modal isOpen={isModalOpen} onClose={handleModalClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {isContactEdited ? 'Edit a contact' : 'Create a contact'}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormComponent
            dataToEdit={initialValues}
            closeModal={handleModalClose}
          />
        </ModalBody>
      </ModalContent>
    </Modal>,
    modalRoot
  );
};

export default ModalComponent;
