import CarsList from 'components/CarsList/CarsList';
import Modal from 'components/Modal/Modal';
import globalCss from 'css/global.module.css';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites } from 'redux/cars/cars-actions';
import { selectCars } from 'redux/cars/cars-selector';

export default function Favorites() {
  const { favorites } = useSelector(selectCars);

  const dispatch = useDispatch();

  useEffect(() => {
    if (favorites.length === 0) dispatch(getFavorites());
  }, [favorites, dispatch]);

  return (
    <>
      <Modal />
      <section className={globalCss["section"]}>
        <div className={globalCss.container}>
          {favorites.length !== 0 ? <CarsList cars={favorites} favorites={favorites} /> : <p>No cars</p>}
        </div>
      </section>
    </>
  );
}
