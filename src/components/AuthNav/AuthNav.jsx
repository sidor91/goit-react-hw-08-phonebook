import { NavLink, useLocation } from 'react-router-dom';
import { Button, ButtonGroup } from '@chakra-ui/button';

const AuthNav = () => {
  const { pathname } = useLocation();
  return (
    <nav>
      <ButtonGroup gap="2">
        <Button isActive={pathname === '/login'} colorScheme="orange">
          <NavLink to="/login">Login</NavLink>
        </Button>
        <Button isActive={pathname === '/register'} colorScheme="orange">
          <NavLink to="/register">Register</NavLink>
        </Button>
      </ButtonGroup>
    </nav>
  );
};

export default AuthNav;
