import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'utilites/hooks/useAuth';
import { logoutUser } from '../../redux/auth/operations';
import { Button } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';

const UserMenu = () => {
  const navigate = useNavigate();
  const { userName } = useAuth();
    const dispatch = useDispatch();
    
    return (
      <Flex align="center">
        <p>Hello, {userName}!</p>
        <Button
          fontSize="sm"
          size="sm"
          ml={4}
          colorScheme="orange"
          onClick={() => {
            dispatch(logoutUser());
            navigate('/', { replace: true });
          }}
        >
          Logout
        </Button>
      </Flex>
    );
};

export default UserMenu;
