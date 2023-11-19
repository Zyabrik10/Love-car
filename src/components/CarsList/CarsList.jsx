import { nanoid } from 'nanoid';
import CarItem from './components/CarItem/CarItem';

import globalCss from 'css/global.module.css';
import css from './CarsList.module.css';

import PropTypes from 'prop-types';

export default function CarList({ cars }) {
  // console.log(cars);
  return (
    <ul className={`${globalCss['flex-container']} ${css['list']}`}>
      {cars.length !== 0 &&
        cars.map(obj => {
          const { id } = obj;
          const key = nanoid();

          return <CarItem obj={{ ...obj, id }} key={key} />;
        })}
    </ul>
  );
}

CarList.propTypes = {
  cars: PropTypes.array,
};
