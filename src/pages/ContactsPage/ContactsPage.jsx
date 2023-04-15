import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { toggleModal } from 'redux/contacts/slice';
import Section from '../../components/Section';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import Loader from '../../components/Loader';
import { useContacts } from 'utilites/hooks/useContacts';
// import { StyledButton, StyledIcon, Container } from './ContactsPage.styled';
import { Button, Heading, Divider, Box, Text, VStack } from '@chakra-ui/react';

const ContactsPage = () => {
  const { contacts, isLoading, error } = useContacts();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section>
        <VStack  justifyContent='center'>
          <Heading my={4} as="h1" align='center'>
            Add a contact by clicking a button
          </Heading>
          <Button
            colorScheme="orange"
            fontSize="sm"
            size='sm'
            type="button"
            onClick={() => {
              dispatch(toggleModal());
            }}
          >
            {/* <StyledIcon /> */} Add
          </Button>
        </VStack>
      </Section>
      <Divider />
      <Section title="Contacts">
        {isLoading && !error && contacts.length > 0 && <Loader />}
        {error && <p>Something went wrong. {error}</p>}
        {contacts.length > 0 && !isLoading && (
          <>
            <Filter />
            <ContactList />
          </>
        )}
        {contacts.length === 0 && !isLoading && (
          <Text>You haven't added any contacts yet 😥</Text>
        )}
      </Section>
    </>
  );
};

export default ContactsPage;
