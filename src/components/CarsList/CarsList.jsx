import { nanoid } from 'nanoid';
import CarsItem from './components/CarsItem/CarsItem';

import globalCss from 'css/global.module.css';
import css from './CarsList.module.css';

import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
// import { selectCars } from 'redux/cars/cars-selector';

export default function CarsList({ cars }) {
  return (
    <ul className={`${globalCss['flex-container']} ${css['list']}`}>
      {cars.length !== 0 &&
        cars.map(obj => {
          const { id } = obj;
          let idVal = id;

          if (obj.hasOwnProperty('carId')) {
            idVal = obj.carId;
          }

          return (
            <CarsItem
              obj={{ ...obj, id: idVal }}
              key={nanoid()}
            />
          );
        })}
    </ul>
  );
}

CarsList.propTypes = {
  cars: PropTypes.array,
  favorites: PropTypes.array,
};
