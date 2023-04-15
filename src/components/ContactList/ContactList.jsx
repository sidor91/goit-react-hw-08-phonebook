import React from 'react';
import { useContacts } from 'utilites/hooks/useContacts';
// import { ListOfContacts } from './ContactList.styled';
import Contact from '../Contact';
import Loader from 'components/Loader/Loader';
import {
  // Stack, HStack,
  VStack,
  StackDivider,
  List,
} from '@chakra-ui/react';

const ContactList = () => {
  const { contacts, filter, isLoading } = useContacts();

  const showFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = showFilteredContacts();

  return isLoading ? (
    <Loader />
  ) : (
    <List mt={4}>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        {filteredContacts.map(({ id, name, number }) => (
          <Contact key={id} name={name} number={number} id={id} />
        ))}
      </VStack>
    </List>
  );
};

export default ContactList;
