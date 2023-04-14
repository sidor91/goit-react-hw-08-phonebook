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

const ContactsPage = () => {
  const { contacts, isLoading, error } = useContacts();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section>
        <div>
          <span>Add a contact by clicking a button</span>
          <button
            type="button"
            onClick={() => {
              dispatch(toggleModal());
            }}
          >
            {/* <StyledIcon /> */} Add
          </button>
        </div>
      </Section>
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
          <p>You haven't added any contacts yet 😥</p>
        )}
      </Section>
    </>
  );
};

export default ContactsPage;
