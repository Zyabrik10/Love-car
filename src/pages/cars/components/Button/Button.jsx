import { useDispatch, useSelector } from 'react-redux';
import { selectCars } from 'redux/cars/cars-selector';
import { addCars } from 'redux/cars/cars-actions';

import { useState } from 'react';

import css from './Button.module.css';
import { selectFilters } from 'redux/filter/filters-selector';

export default function Button() {
  const dispatch = useDispatch();

  const { isButtonShown } = useSelector(selectCars);
  const { carBrand } = useSelector(selectFilters);


  const [page, setPage] = useState(1);

  const buttonHandler = () => {
    dispatch(addCars({ page: page + 1, carBrand }));
    setPage(page + 1);
  };

  return (
    <>
      {isButtonShown ? (
        <button className={css['load-more']} onClick={buttonHandler}>
          Load more
        </button>
      ) : null}
    </>
  );
}