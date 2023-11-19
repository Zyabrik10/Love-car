import { nanoid } from 'nanoid';
import CatalogItem from './components/CatalogItem/CatalogItem';

import globalCss from 'css/global.module.css';
import css from './CatalogList.module.css';

import PropTypes from 'prop-types';

export default function CatalogList({ cars }) {
  return (
    <ul className={`${globalCss['flex-container']} ${css['list']}`}>
      {cars.length !== 0 &&
        cars.map(obj => {
          const { id } = obj;

          const key = nanoid();

          return <CatalogItem obj={{ ...obj, id }} keyProp={key} key={key} />;
        })}
    </ul>
  );
}

CatalogList.propTypes = {
  cars: PropTypes.array,
};
