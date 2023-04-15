import { useDispatch } from 'react-redux';
import { useAuth } from 'utilites/hooks/useAuth';
import { logoutUser } from '../../redux/auth/operations';
// import { StyledDiv } from './UserMenu.styled';
import { Button } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';

const UserMenu = () => {
  const { userName } = useAuth();
    const dispatch = useDispatch();
    
    return (
      <Flex align="center">
        <p>Hello, {userName}!</p>
        <Button
          fontSize={{ base: 'sm', md: 'md', lg: 'md' }}
          size="sm"
          ml={4}
          colorScheme="orange"
          onClick={() => {
            dispatch(logoutUser());
          }}
        >
          Logout
        </Button>
      </Flex>
    );
};

export default UserMenu;

