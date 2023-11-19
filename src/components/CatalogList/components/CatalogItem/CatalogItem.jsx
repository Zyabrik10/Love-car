import { useDispatch, useSelector } from 'react-redux';

import css from './CatalogItem.module.css';
import { openModal } from 'redux/modal/modal-actions';

import PropTypes from 'prop-types';

import loveSvg from 'img/svg/love.svg';
import loveActiveSvg from 'img/svg/love_active.svg';

import { toggleFavorite } from 'redux/cars/cars-actions';
import { useEffect, useState } from 'react';
import { selectCars } from 'redux/cars/cars-selector';

export default function CatalogItem({ obj }) {
  const { favorites } = useSelector(selectCars);

  const {
    img,
    model,
    year,
    rentalPrice,
    id,
    address,
    rentalCompany,
    type,
    mileage,
    make,
  } = obj;

  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);

  const toggleFavoriteHandler = async ({ currentTarget }) => {
    const isFav = currentTarget.getAttribute('data-fav') === 'true';
    const id = currentTarget.getAttribute('data-id');

    dispatch(toggleFavorite({ id, isFav: isFav }));
    setIsFav(!isFav);
  };

  const addr = address ? address.split(', ') : ['', ''];

  const openInfoHandler = async ({ target }) => {
    const id = target.getAttribute('data-id');
    dispatch(openModal(id));
  };

  useEffect(() => {
    setIsFav(favorites.some(({ carId }) => carId === String(id)));
  }, [favorites, id]);

  return (
    <li className={css['container']}>
      <div className={css['img-box']}>
        <img className={css.img} src={img} alt="" />
        <button
          className={`${css['fav-button']} ${isFav ? 'active' : ''}`}
          type="button"
          onClick={toggleFavoriteHandler}
          data-id={id}
          data-fav={isFav}
        >
          <img src={isFav ? loveActiveSvg : loveSvg} alt="" />
        </button>
      </div>
      <div className={css['description-box']}>
        <p className={css['my']}>
          {make}, {year}
        </p>
        <p>{rentalPrice}</p>
      </div>

      <div className={css['info-box']}>
        <p className={css['car-info']}>
          {`${addr[1]}`}
          <span className={css['delimeter']}>|</span>
          {`${addr[2]}`}
          <span className={css['delimeter']}>|</span>
          {`${rentalCompany}`}
        </p>
        <p className={css['car-info']}>
          {`${type}`}
          <span className={css['delimeter']}>|</span>
          {`${model}`}
          <span className={css['delimeter']}>|</span>
          {`${mileage}`}
        </p>
      </div>
      <button
        className={css['learn-more']}
        type="button"
        data-id={id}
        onClick={openInfoHandler}
      >
        Learn More
      </button>
    </li>
  );
}

CatalogItem.propTypes = {
  obj: PropTypes.object,
};
