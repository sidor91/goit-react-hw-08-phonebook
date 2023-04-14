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
import { Flex, Box, Spacer } from '@chakra-ui/layout';


const SharedLayout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
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
    </>
  );
};

export default SharedLayout;

  