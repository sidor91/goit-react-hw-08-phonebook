import { useDispatch } from 'react-redux';
import { signupUser } from '../../redux/auth/operations'
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledButton,
} from './RegisterPage.styled';

const RegisterPage = () => {
    const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
      const form = e.currentTarget;
      console.log('form.elements.username.value', form.elements.username.value)
      dispatch(
        signupUser({
          name: form.elements.username.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
  };
  return (
    <div>
      <h1>Please register</h1>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>
          Username
          <StyledInput type="text" name="username" />
        </StyledLabel>
        <StyledLabel>
          Email
          <StyledInput type="email" name="email" />
        </StyledLabel>
        <StyledLabel>
          Password
          <StyledInput type="text" name="password" />
        </StyledLabel>
        <StyledButton type="submit">Signup</StyledButton>
      </StyledForm>
    </div>
  );
};

export default RegisterPage;
