import PropTypes from 'prop-types';
// import {
//   ContactItem,
//   ContactName,
//   ContactNumber,
//   ContactDeleteButton,
//   ContactData,
//   ContactActioons,
//   ContactEditButton,
// } from './Contact.styled';
import { useDispatch } from 'react-redux';
import {
  toggleModal,
  addNameToEdit,
  addPhoneToEdit,
  setIsContactEdited,
  addEditedId,
} from '../../redux/contacts/slice';
import { deleteContact } from '../../redux/contacts/operations';
import {
  Avatar,
  Button,
  ButtonGroup,
  Box,
  Flex,
  Spacer,
  HStack,
  ListItem,
  Text,
} from '@chakra-ui/react';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(toggleModal());
    dispatch(addNameToEdit(name));
    dispatch(addPhoneToEdit(number));
    dispatch(addEditedId(id));
    dispatch(setIsContactEdited(true));
  };
  return (
    <ListItem>
      <HStack display={{ base: 'block', sm: 'flex' }} w="100%">
        <Flex justify="space-between" w="100%">
          <Avatar
            mr={4}
            name={name}
            src="https://bit.ly/broken-ListItemnk"
          />
          <HStack
            w="100%"
            justify="space-between"
          >
            <Box>
              <Text fontSize={{ base: 'sm', md: 'md' }}>{name}:</Text>
            </Box>
            <Spacer />
            <Box>
              <Text fontSize={{ base: 'sm', md: 'md' }}>{number}</Text>
            </Box>
          </HStack>
        </Flex>
        <Spacer />
        <ButtonGroup
          display={{ base: 'flex', sm: 'inline-flex' }}
          justifyContent={{ base: 'center', sm: 'normal' }}
          w={{ base: '100%', sm: 'auto' }}
        >
          <Button
            size="sm"
            colorScheme="orange"
            type="button"
            onClick={handleEdit}
          >
            Edit
          </Button>
          <Button
            size="sm"
            colorScheme="orange"
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </Button>
        </ButtonGroup>
      </HStack>
    </ListItem>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Contact;

<Box>
  <Flex>
    <Box w="70px" h="10" bg="red.500" />
    <Spacer />
    <Box w="170px" h="10" bg="red.500" />
    <Spacer />
    <Box w="180px" h="10" bg="red.500" />
  </Flex>
</Box>;
