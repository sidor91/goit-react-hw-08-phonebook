import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  font-size: 32px;
  text-decoration: none;
  color: black;

  &.active {
    color: orangered;
  }

  &:not(:last-child) {
    margin-right: 10px;
    /* margin-left: 10px; */
  }
`;
