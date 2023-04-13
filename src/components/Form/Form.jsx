import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  FormElement,
  Label,
  InputField,
  Submit,
  LabelName,
} from './Form.styled';
import { useDispatch } from 'react-redux';
import { useContacts } from 'utilites/hooks/useContacts';
import { addContact, patchContact } from '../../redux/contacts/operations';

const initialValues = { name: '', number: '' };
const schema = yup.object({
  name: yup.string().required(),
  number: yup.string().required(),
});

const FormComponent = ({ dataToEdit = null }) => {
  const { contacts, isContactEdited, editedId } = useContacts();
  const dispatch = useDispatch();

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const isNameTaken = contacts.find(contact => contact.name === name);
    if (isNameTaken) {
      return alert(`${isNameTaken.name} is already in contacts`);
    }
    if (isContactEdited) {
      dispatch(patchContact({ name, number, editedId }));
      resetForm();
      return;
    }
    dispatch(addContact({ name, number }));
    resetForm();
  };

  return (
    <Formik
      initialValues={dataToEdit || initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormElement>
        <Label>
          <LabelName>Name</LabelName>
          <InputField
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" />
        </Label>
        <Label>
          <LabelName>Number</LabelName>
          <InputField
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" />
        </Label>
        {isContactEdited ? (
          <Submit type="submit">Edit contact</Submit>
        ) : (
          <Submit type="submit">Add contact</Submit>
        )}
      </FormElement>
    </Formik>
  );
};

export default FormComponent;
