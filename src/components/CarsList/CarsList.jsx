import { nanoid } from 'nanoid';
import {  useSelector } from 'react-redux';
import { selectCars } from 'redux/cars/cars-selector';
import CarsItem from './components/CarsItem/CarsItem';

import globalCss from 'css/global.module.css';
import css from './CarsList.module.css';

export default function CarsList({ cars }) {
  const { favorites } = useSelector(selectCars);

  return (
    <ul className={`${globalCss['flex-container']} ${css['list']}`}>
      {cars.map(
        (obj) => {
          const { id } = obj;
          const isFav = favorites.hasOwnProperty(id);

          return (
            <CarsItem
              obj={{...obj, isFav}}
              key={nanoid()}
            />
          );
        }
      )}
    </ul>
  );
}
