// import { NavigationLink } from './AuthNav.styled';
import { Button, ButtonGroup } from '@chakra-ui/button';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// import { Link } from '@chakra-ui/react';

const AuthNav = () => {
  const location = useLocation();
  return (
    <nav>
      <ButtonGroup gap="2">
        <Button isActive={location.pathname === '/login'} colorScheme="orange">
          <NavLink to="/login">Login</NavLink>
        </Button>
        <Button
          isActive={location.pathname === '/register'}
          colorScheme="orange"
        >
          <NavLink to="/register">Register</NavLink>
        </Button>
      </ButtonGroup>
    </nav>
  );
};

export default AuthNav;
