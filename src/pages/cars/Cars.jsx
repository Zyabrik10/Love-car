import { useDispatch, useSelector } from 'react-redux';
import { selectCars } from 'redux/cars/cars-selector';
import { addCars, getCars } from 'redux/cars/cars-actions';

import { useEffect, useState } from 'react';

import Filter from 'components/Filter/Filter';

import globalCss from 'css/global.module.css';

import css from './Cars.module.css';
import Modal from 'components/Modal/Modal';

import { Hourglass } from 'react-loader-spinner';
import CarList from 'components/CarsList/CarsList';
import { selectFilters } from 'redux/filter/filters-selector';

function Button() {
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

export default function Cars() {
  const dispatch = useDispatch();
  const { cars, isLoading } = useSelector(selectCars);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <>
      <Modal />
      <section className={globalCss.section}>
        <div className={`${globalCss.container} ${css.container}`}>
          <Filter />
          {isLoading ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Hourglass
                visible={true}
                height="80"
                width="80"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={['#306cce', '#72a1ed']}
              />
            </div>
          ) : cars.length === 0 ? (
            <p style={{ textAlign: 'center' }}>No cars</p>
          ) : (
            <>
              <CarList cars={cars} />
              <Button />
            </>
          )}
        </div>
      </section>
    </>
  );
}
