import { useDispatch } from 'react-redux';
import { useAuth } from 'utilites/hooks/useAuth';
import { logoutUser } from '../../redux/auth/operations';
import { StyledDiv } from './UserMenu.styled';
import { Button } from '@chakra-ui/button';

const UserMenu = () => {
  const { userName } = useAuth();
    const dispatch = useDispatch();
    
    return (
      <StyledDiv>
        <p>Hello, {userName}!</p>
        <Button
          ml={4}
          colorScheme="orange"
          onClick={() => {
            dispatch(logoutUser());
          }}
        >
          Logout
        </Button>
      </StyledDiv>
    );
};

export default UserMenu;

