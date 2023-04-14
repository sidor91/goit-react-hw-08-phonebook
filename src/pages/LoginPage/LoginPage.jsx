import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/auth/operations';
// import {
//   StyledForm,
//   StyledInput,
//   StyledLabel,
//   StyledButton,
// } from './LoginPage.styled';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  FormHelperText,
  Container,
  Heading,
} from '@chakra-ui/react';


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
    <Container>
      <Heading mb={4} mt={4}>Please login</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>
            Email
            <Input focusBorderColor="#DD6B20" type="email" name="email" />
          </FormLabel>
          <FormLabel>
            Password
            <Input focusBorderColor="#DD6B20" type="text" name="password" />
          </FormLabel>
        </FormControl>
        <Button type="submit">Login</Button>
      </form>
    </Container>
  );
};

export default LoginPage;