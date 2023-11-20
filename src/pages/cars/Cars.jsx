import { useDispatch, useSelector } from 'react-redux';
import { selectCars } from 'redux/cars/cars-selector';
import { getCars } from 'redux/cars/cars-actions';

import { useEffect } from 'react';

import Filter from 'components/Filter/Filter';

import globalCss from 'css/global.module.css';

import css from './Cars.module.css';
import Modal from 'components/Modal/Modal';

import { Hourglass } from 'react-loader-spinner';
import CarList from 'components/CarsList/CarsList';

import Button from './components/Button/Button';

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
