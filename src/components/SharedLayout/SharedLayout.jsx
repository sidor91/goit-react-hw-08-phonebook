import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../Loader/Loader';
import {
  StyledHeader,
  // StyledMain,
} from './SharedLayout.styled';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { useAuth } from 'utilites/hooks/useAuth';
import { Flex, Box, Spacer, Container } from '@chakra-ui/layout';


const SharedLayout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Container maxW="container.xl">
      <StyledHeader>
        <Flex align="center">
          <Box p="4">
            <Navigation />
          </Box>
          <Spacer />
          <Box p="4">{isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>
        </Flex>
      </StyledHeader>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default SharedLayout;

  