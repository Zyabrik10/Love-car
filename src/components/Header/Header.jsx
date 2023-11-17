import { NavLink } from 'react-router-dom';

import css from './Header.module.css';
import globalCss from 'css/global.module.css';

export default function Header() {
  return (
    <header className={css['header']}>
      <div className={`${globalCss.container} ${css['header-container']}`}>
        <nav className={css['header-nav']}>
          <ul className={css['header-nav-list']}>
            <li>
              <NavLink to={'/'}>home</NavLink>
            </li>
            <li>
              <NavLink to={'/catalog'}>cars</NavLink>
            </li>
            <li>
              <NavLink to={'/favorites'}>favorites</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
