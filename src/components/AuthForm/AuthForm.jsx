import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useLocation } from 'react-router';
import { loginUser, signupUser } from '../../redux/auth/operations';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

const AuthForm = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (pathname === '/login') {
      dispatch(
        loginUser({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      return;
    }
    dispatch(
      signupUser({
        name: form.elements.username.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        {pathname === '/register' && (
          <FormLabel>
            Username
            <Input
              placeholder="Enter username"
              focusBorderColor="#DD6B20"
              type="text"
              name="username"
            />
          </FormLabel>
        )}
        <FormLabel>
          Email
          <Input
            placeholder="Enter email"
            focusBorderColor="#DD6B20"
            type="email"
            name="email"
          />
        </FormLabel>
        <FormLabel>
          Password
          <InputGroup>
            <Input
              name="password"
              focusBorderColor="#DD6B20"
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormLabel>
      </FormControl>
      <Button colorScheme="orange" type="submit" mt={4}>
        {pathname === '/register'? 'Register' : 'Login'}
      </Button>
    </form>
  );
};

export default AuthForm;
