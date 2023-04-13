import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useCallback } from 'react';
import {
  toggleModal,
  isContactEdited,
  addNameToEdit,
  addPhoneToEdit,
} from '../../redux/contacts/slice';
import { useContacts } from 'utilites/hooks/useContacts';
import { Backdrop, ModalWindow } from './Modal.styled';
import FormComponent from '../Form';

const modalRoot = document.querySelector('#modal-root');

const Modal = () => {
    const dispatch = useDispatch();
    const { editedName, editedPhone } = useContacts();
    
    const initialValues = { name: `${ editedName }`, number: `${ editedPhone }` };

  const handleModalClose = useCallback(
    e => {
      if (e.target === e.currentTarget || e.code === 'Escape') {
          dispatch(toggleModal());
          dispatch(addNameToEdit(''));
          dispatch(addPhoneToEdit(''));
          dispatch(isContactEdited(false));
        window.removeEventListener('keydown', handleModalClose);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleModalClose);
  }, [handleModalClose]);

  return createPortal(
    <Backdrop onClick={handleModalClose}>
      <ModalWindow>
        <FormComponent dataToEdit={initialValues} />
      </ModalWindow>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
