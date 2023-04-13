import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../Loader/Loader';
import {
  StyledHeader,
  StyledMain,
} from './SharedLayout.styled';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';

const SharedLayout = () => {
  return (
    <>
      <StyledHeader>
        <Navigation />
        <UserMenu />
        <AuthNav/>
      </StyledHeader>
      <StyledMain>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </StyledMain>
    </>
  );
};

export default SharedLayout;
