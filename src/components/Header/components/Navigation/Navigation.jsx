import { NavLink } from 'react-router-dom';

import css from './Navigation.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: #3470ff;
  }
`;

export default function Navigation() {
  return (
    <nav className={css['header-nav']}>
      <ul className={css['header-nav-list']}>
        <li>
          <StyledLink to={'/'}>home</StyledLink>
        </li>
        <li>
          <StyledLink to={'/catalog'}>cars</StyledLink>
        </li>
        <li>
          <StyledLink to={'/favorites'}>favorites</StyledLink>
        </li>
      </ul>
    </nav>
  );
}
