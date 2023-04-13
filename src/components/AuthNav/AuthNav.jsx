import { NavigationLink } from './AuthNav.styled';
import { useAuth } from 'utilites/hooks/useAuth';

const AuthNav = () => {
  const { isLoggedIn } = useAuth();

  return !isLoggedIn && 
    (<nav>
      <NavigationLink to="/login">Login</NavigationLink>
      <NavigationLink to="/register">Register</NavigationLink>
    </nav>)
  ;
};

export default AuthNav;