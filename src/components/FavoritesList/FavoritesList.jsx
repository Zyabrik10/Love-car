import { nanoid } from 'nanoid';
import CarsItem from './components/FavoritesItem/FavoritesItem';

import globalCss from 'css/global.module.css';
import css from './FavoritesList.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { selectCars } from 'redux/cars/cars-selector';
import { useEffect } from 'react';
import { getFavorites } from 'redux/cars/cars-actions';

function Items() {
  const dispatch = useDispatch();
  const { favorites } = useSelector(selectCars);

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  return (
    <>
      {true ? console.log('re-render') : null}

      {favorites.length === 0 ? (
        <p>No cars</p>
      ) : (
        favorites.map(obj => {
          const { carId } = obj;

          const key = nanoid();

          return (
            <CarsItem obj={{ ...obj, id: carId }} keyProp={key} key={key} />
          );
        })
      )}
    </>
  );
}

export default function FavoritesList() {
  return (
    <>
      <ul className={`${globalCss['flex-container']} ${css['list']}`}>
        <Items />
      </ul>
    </>
  );
}
