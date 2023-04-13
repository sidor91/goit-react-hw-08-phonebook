import { useDispatch } from 'react-redux';
import { useAuth } from 'utilites/hooks/useAuth';
import { logoutUser } from '../../redux/auth/operations';
import { StyledDiv, StyledButton } from './UserMenu.styled';

const UserMenu = () => {
  const { isLoggedIn, userName } = useAuth();
    const dispatch = useDispatch();
    
    return (
      isLoggedIn && (
        <StyledDiv>
          <p>Hello, {userName}!</p>
          <StyledButton
            type="button"
            onClick={() => {
              dispatch(logoutUser());
            }}
          >
            Logout
          </StyledButton>
        </StyledDiv>
      )
    );
};

export default UserMenu;

