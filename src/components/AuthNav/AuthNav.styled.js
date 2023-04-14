import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  font-size: 28px;
  font-weight: 500;
  text-decoration: none;
  /* color: black; */

  @media screen and (max-width: 1024px) {
    font-size: 24px;
  }

  @media screen and (max-width: 720px) {
    font-size: 16px;
  }

  /* &.active {
    color: #dd6b20;
  } */

  /* &:not(:last-child) {
    margin-right: 10px; */
    /* margin-left: 10px; */
  /* } */
`;
