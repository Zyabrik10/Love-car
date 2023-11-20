import css from './Header.module.css';
import globalCss from 'css/global.module.css';

import Navigation from './components/Navigation/Navigation';

export default function Header() {
  return (
    <header className={css['header']}>
      <div className={`${globalCss.container} ${css['header-container']}`}>
        <Navigation />
      </div>
    </header>
  );
}
