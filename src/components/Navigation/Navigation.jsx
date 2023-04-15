import { useAuth } from 'utilites/hooks/useAuth';
import { ButtonGroup, Button } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const handleClick = () => {
    if (pathname === '/contacts') {
      return navigate('/');
    }
    return navigate('/contacts');
  }
  return (
    <nav>
      <ButtonGroup gap="2">
        <Button
          isActive={pathname === '/'}
          colorScheme="orange"
          variant="link"
          onClick={handleClick}
          fontSize="xl"
        >
          Home
        </Button>
        {isLoggedIn && (
          <Button
            isActive={pathname === '/contacts'}
            colorScheme="orange"
            variant="link"
            onClick={handleClick}
            fontSize="xl"
          >
            Contacts
          </Button>
        )}
      </ButtonGroup>
    </nav>
  );
}


export default Navigation;











