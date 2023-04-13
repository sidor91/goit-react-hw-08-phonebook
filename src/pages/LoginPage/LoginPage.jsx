import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/auth/operations';
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledButton,
} from './LoginPage.styled';


const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      loginUser({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };
  return (
    <div>
      <h1>Please login</h1>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>
          Email
          <StyledInput type="email" name="email" />
        </StyledLabel>
        <StyledLabel>
          Password
          <StyledInput type="text" name="password" />
        </StyledLabel>
        <StyledButton type="submit">Login</StyledButton>
      </StyledForm>
    </div>
  );
};

export default LoginPage;