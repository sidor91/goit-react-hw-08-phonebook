import React from 'react';
import { useContacts } from 'utilites/hooks/useContacts';
import { ListOfContacts } from './ContactList.styled';
import Contact from '../Contact';

const ContactList = () => {
  const { contacts, filter } = useContacts();

  const showFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = showFilteredContacts();

  return (
    <ListOfContacts>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} name={name} number={number} id={id} />
      ))}
    </ListOfContacts>
  );
};

export default ContactList;
