import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.5rem;
  color: #2a363b;
  transition: all 0.3s ease-in-out;
  padding: 12px;

  &:hover,
  &:focus {
    text-shadow: 3px 3px 20px #2a363b, -2px 1px 30px #2a363b;
  }

  &.active {
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
