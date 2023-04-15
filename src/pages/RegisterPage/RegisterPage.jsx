import { useDispatch } from 'react-redux';
import { signupUser } from '../../redux/auth/operations'
// import {
//   StyledForm,
//   StyledInput,
//   StyledLabel,
//   StyledButton,
// } from './RegisterPage.styled';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Box,
} from '@chakra-ui/react';

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
    <Box>
      <Heading my={4} align="center">
        Please register
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>
            Username
            <Input focusBorderColor="#DD6B20" type="text" name="username" />
          </FormLabel>
          <FormLabel>
            Email
            <Input focusBorderColor="#DD6B20" type="email" name="email" />
          </FormLabel>
          <FormLabel>
            Password
            <Input focusBorderColor="#DD6B20" type="text" name="password" />
          </FormLabel>
        </FormControl>
        <Button colorScheme="orange" type="submit" mt={4}>
          Signup
        </Button>
      </form>
    </Box>
  );
};

export default RegisterPage;
