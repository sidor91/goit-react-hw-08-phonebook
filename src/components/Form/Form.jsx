import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useContacts } from 'utilites/hooks/useContacts';
import { addContact, patchContact } from '../../redux/contacts/operations';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  HStack,
  Box,
} from '@chakra-ui/react';

const initialValues = { name: '', number: '' };
const schema = yup.object({
  name: yup.string().required(),
  number: yup.number().required(),
});

const FormComponent = ({ dataToEdit = null, closeModal }) => {
  const { contacts, isContactEdited, editedId, isLoading } = useContacts();
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

  const validateName = value => {
    if (!value) {
      return 'This field is required';
    }
  };

  return (
    <Formik
      initialValues={dataToEdit || initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <Field
          validate={validateName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        >
          {({ field, form }) => (
            <FormControl isInvalid={form.errors.name && form.touched.name}>
              <FormLabel>Full name</FormLabel>
              <Input focusBorderColor="#DD6B20" {...field} placeholder="Name" />
              <FormErrorMessage>{form.errors.name}</FormErrorMessage>
            </FormControl>
          )}
        </Field>
        <Field
          validate={validateName}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        >
          {({ field, form }) => (
            <FormControl isInvalid={form.errors.number}>
              <FormLabel>Phone number</FormLabel>
              <Input
                focusBorderColor="#DD6B20"
                {...field}
                placeholder="Number"
              />
              <FormErrorMessage>{form.errors.number}</FormErrorMessage>
            </FormControl>
          )}
        </Field>
        <HStack>
          <Box>
            <Button
              mt={4}
              colorScheme="orange"
              isLoading={isLoading}
              type="submit"
            >
              Save
            </Button>
          </Box>

          <Box>
            <Button
              mt={4}
              colorScheme="gray"
              type="button"
              onClick={() => {
                closeModal();
              }}
            >
              Cancel
            </Button>
          </Box>
        </HStack>
      </Form>
    </Formik>
  );
};

export default FormComponent;
