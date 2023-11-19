import { NavLink } from 'react-router-dom';

import css from './Header.module.css';
import globalCss from 'css/global.module.css';

import styled from "styled-components";

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: #3470ff;
  }
`;

export default function Header() {
  return (
    <header className={css['header']}>
      <div className={`${globalCss.container} ${css['header-container']}`}>
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
      </div>
    </header>
  );
}
