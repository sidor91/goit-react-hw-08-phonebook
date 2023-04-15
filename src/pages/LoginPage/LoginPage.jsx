import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/auth/operations';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Box,
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
    <Box>
      <Heading my={4} align="center">
        Please login
      </Heading>
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
        <Button colorScheme="orange" type="submit" mt={4}>
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginPage;