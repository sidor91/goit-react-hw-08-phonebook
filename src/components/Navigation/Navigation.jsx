import { NavigationLink } from './Navigation.styled';
import { useAuth } from 'utilites/hooks/useAuth';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
const { isLoggedIn } = useAuth();

    return (
      <nav>
        <NavigationLink to="/">Main Page</NavigationLink>
        {isLoggedIn && <NavigationLink to="/contacts">Contacts</NavigationLink>}
      </nav>
    );
}


export default Navigation;











